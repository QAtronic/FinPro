import prisma from "../db"
import { FxService } from "./fx"
import { roundToDecimals } from "../utils"

export interface ConsolidatedData {
  entityId: string
  entityName: string
  accountId: string
  accountCode: string
  accountName: string
  accountType: string
  month: number
  amount: number
  convertedAmount: number
  currency: string
}

export interface ConsolidationResult {
  data: ConsolidatedData[]
  summary: {
    totalEntities: number
    totalAccounts: number
    totalAmount: number
    baseCurrency: string
  }
}

export class ConsolidationService {
  private fxService: FxService

  constructor() {
    this.fxService = new FxService()
  }

  async consolidateVersion(
    versionId: string,
    orgId: string,
    baseCurrency: string = "USD"
  ): Promise<ConsolidationResult> {
    // Get all plan cells for the version
    const planCells = await prisma.planCell.findMany({
      where: {
        versionId,
        version: {
          orgId
        }
      },
      include: {
        entity: true,
        account: true,
        version: true
      }
    })

    // Get FX rates for the fiscal year
    const fiscalYear = planCells[0]?.version.fiscalYear || new Date().getFullYear()
    const fxRates = await this.fxService.getRatesForYear(orgId, fiscalYear)

    const consolidatedData: ConsolidatedData[] = []

    for (const cell of planCells) {
      const entityCurrency = cell.entity.currency
      let convertedAmount = cell.amount

      // Convert to base currency if different
      if (entityCurrency !== baseCurrency) {
        const monthlyRates = fxRates.filter(rate => 
          rate.currency === entityCurrency && 
          rate.date.getMonth() === cell.month - 1
        )
        
        if (monthlyRates.length > 0) {
          // Use average rate for P&L accounts, closing rate for BS accounts
          const isPLAccount = ['REVENUE', 'EXPENSE'].includes(cell.account.type)
          const rate = isPLAccount 
            ? this.fxService.getAverageRate(monthlyRates)
            : monthlyRates[monthlyRates.length - 1].rateToBase
          
          convertedAmount = cell.amount * rate
        }
      }

      consolidatedData.push({
        entityId: cell.entityId,
        entityName: cell.entity.name,
        accountId: cell.accountId,
        accountCode: cell.account.code,
        accountName: cell.account.name,
        accountType: cell.account.type,
        month: cell.month,
        amount: cell.amount,
        convertedAmount: roundToDecimals(convertedAmount, 2),
        currency: entityCurrency
      })
    }

    // Apply ownership percentages for partial consolidation
    const entities = await prisma.entity.findMany({
      where: { orgId, isActive: true }
    })

    const ownershipMap = new Map(
      entities.map(entity => [entity.id, entity.ownershipPct || 1.0])
    )

    const adjustedData = consolidatedData.map(item => ({
      ...item,
      convertedAmount: roundToDecimals(
        item.convertedAmount * (ownershipMap.get(item.entityId) || 1.0),
        2
      )
    }))

    // Group by account and month for final consolidation
    const groupedData = this.groupConsolidatedData(adjustedData)

    const totalAmount = groupedData.reduce((sum, item) => sum + item.convertedAmount, 0)

    return {
      data: groupedData,
      summary: {
        totalEntities: new Set(consolidatedData.map(d => d.entityId)).size,
        totalAccounts: new Set(consolidatedData.map(d => d.accountId)).size,
        totalAmount: roundToDecimals(totalAmount, 2),
        baseCurrency
      }
    }
  }

  private groupConsolidatedData(data: ConsolidatedData[]): ConsolidatedData[] {
    const grouped = new Map<string, ConsolidatedData>()

    for (const item of data) {
      const key = `${item.accountId}-${item.month}`
      
      if (grouped.has(key)) {
        const existing = grouped.get(key)!
        existing.convertedAmount += item.convertedAmount
        existing.convertedAmount = roundToDecimals(existing.convertedAmount, 2)
      } else {
        grouped.set(key, {
          ...item,
          entityId: 'CONSOLIDATED',
          entityName: 'Consolidated',
          currency: 'USD'
        })
      }
    }

    return Array.from(grouped.values())
  }

  async getConsolidatedPandL(
    versionId: string,
    orgId: string,
    baseCurrency: string = "USD"
  ): Promise<ConsolidatedData[]> {
    const result = await this.consolidateVersion(versionId, orgId, baseCurrency)
    
    return result.data.filter(item => 
      ['REVENUE', 'EXPENSE'].includes(item.accountType)
    ).sort((a, b) => {
      // Sort by account type (Revenue first, then Expense)
      if (a.accountType !== b.accountType) {
        return a.accountType === 'REVENUE' ? -1 : 1
      }
      // Then by month
      return a.month - b.month
    })
  }

  async getConsolidatedBalanceSheet(
    versionId: string,
    orgId: string,
    baseCurrency: string = "USD"
  ): Promise<ConsolidatedData[]> {
    const result = await this.consolidateVersion(versionId, orgId, baseCurrency)
    
    return result.data.filter(item => 
      ['ASSET', 'LIABILITY', 'EQUITY'].includes(item.accountType)
    ).sort((a, b) => {
      // Sort by account type (Asset, Liability, Equity)
      const typeOrder = { 'ASSET': 1, 'LIABILITY': 2, 'EQUITY': 3 }
      const orderA = typeOrder[a.accountType as keyof typeof typeOrder] || 4
      const orderB = typeOrder[b.accountType as keyof typeof typeOrder] || 4
      
      if (orderA !== orderB) return orderA - orderB
      return a.month - b.month
    })
  }

  async applyEliminations(
    consolidatedData: ConsolidatedData[],
    eliminations: Array<{
      accountId: string
      month: number
      amount: number
      memo: string
    }>
  ): Promise<ConsolidatedData[]> {
    const result = [...consolidatedData]

    for (const elimination of eliminations) {
      const existingIndex = result.findIndex(
        item => item.accountId === elimination.accountId && item.month === elimination.month
      )

      if (existingIndex >= 0) {
        result[existingIndex].convertedAmount += elimination.amount
        result[existingIndex].convertedAmount = roundToDecimals(result[existingIndex].convertedAmount, 2)
      } else {
        // Add new elimination entry
        result.push({
          entityId: 'ELIMINATION',
          entityName: 'Elimination',
          accountId: elimination.accountId,
          accountCode: 'ELIM',
          accountName: elimination.memo,
          accountType: 'EXPENSE',
          month: elimination.month,
          amount: elimination.amount,
          convertedAmount: elimination.amount,
          currency: 'USD'
        })
      }
    }

    return result
  }
}
