import prisma from "../db"
import { ConsolidationService } from "./consolidation"
import { roundToDecimals } from "../utils"

export interface CashFlowItem {
  category: string
  description: string
  amount: number
  month: number
}

export interface CashFlowStatement {
  operating: CashFlowItem[]
  investing: CashFlowItem[]
  financing: CashFlowItem[]
  summary: {
    netCashFromOperating: number
    netCashFromInvesting: number
    netCashFromFinancing: number
    netChangeInCash: number
    beginningCash: number
    endingCash: number
  }
}

export class CashFlowService {
  private consolidationService: ConsolidationService

  constructor() {
    this.consolidationService = new ConsolidationService()
  }

  async generateCashFlowStatement(
    versionId: string,
    orgId: string,
    baseCurrency: string = "USD"
  ): Promise<CashFlowStatement> {
    // Get consolidated data
    const consolidatedData = await this.consolidationService.consolidateVersion(
      versionId,
      orgId,
      baseCurrency
    )

    // Generate operating cash flow (indirect method)
    const operating = await this.generateOperatingCashFlow(consolidatedData.data, versionId, orgId)

    // Generate investing cash flow
    const investing = await this.generateInvestingCashFlow(consolidatedData.data)

    // Generate financing cash flow
    const financing = await this.generateFinancingCashFlow(consolidatedData.data)

    // Calculate summary
    const summary = this.calculateCashFlowSummary(operating, investing, financing)

    return {
      operating,
      investing,
      financing,
      summary
    }
  }

  private async generateOperatingCashFlow(
    data: any[],
    versionId: string,
    orgId: string
  ): Promise<CashFlowItem[]> {
    const operating: CashFlowItem[] = []

    // Start with Net Income
    const netIncome = this.calculateNetIncome(data)
    operating.push({
      category: "Net Income",
      description: "Net Income",
      amount: netIncome,
      month: 1 // We'll aggregate by month later
    })

    // Add non-cash adjustments
    const nonCashAdjustments = this.calculateNonCashAdjustments(data)
    operating.push({
      category: "Non-Cash Adjustments",
      description: "Depreciation & Amortization",
      amount: nonCashAdjustments,
      month: 1
    })

    // Calculate working capital changes
    const workingCapitalChanges = this.calculateWorkingCapitalChanges(data)
    operating.push({
      category: "Working Capital Changes",
      description: "Changes in AR, AP, Inventory",
      amount: workingCapitalChanges,
      month: 1
    })

    return operating
  }

  private async generateInvestingCashFlow(data: any[]): Promise<CashFlowItem[]> {
    const investing: CashFlowItem[] = []

    // Capital expenditures (simplified - look for fixed asset accounts)
    const capex = this.calculateCapitalExpenditures(data)
    investing.push({
      category: "Capital Expenditures",
      description: "Purchase of Fixed Assets",
      amount: capex,
      month: 1
    })

    // Other investing activities (placeholder)
    investing.push({
      category: "Other Investing",
      description: "Other Investing Activities",
      amount: 0,
      month: 1
    })

    return investing
  }

  private async generateFinancingCashFlow(data: any[]): Promise<CashFlowItem[]> {
    const financing: CashFlowItem[] = []

    // Debt activities (simplified)
    const debtChanges = this.calculateDebtChanges(data)
    financing.push({
      category: "Debt Activities",
      description: "Net Debt Issuance/Repayment",
      amount: debtChanges,
      month: 1
    })

    // Equity activities (simplified)
    const equityChanges = this.calculateEquityChanges(data)
    financing.push({
      category: "Equity Activities",
      description: "Net Equity Issuance/Repurchase",
      amount: equityChanges,
      month: 1
    })

    return financing
  }

  private calculateNetIncome(data: any[]): number {
    const revenue = data
      .filter(item => item.accountType === 'REVENUE')
      .reduce((sum, item) => sum + item.convertedAmount, 0)

    const expenses = data
      .filter(item => item.accountType === 'EXPENSE')
      .reduce((sum, item) => sum + item.convertedAmount, 0)

    return roundToDecimals(revenue - expenses, 2)
  }

  private calculateNonCashAdjustments(data: any[]): number {
    // Look for depreciation and amortization accounts
    const depreciationAccounts = data.filter(item =>
      item.accountName.toLowerCase().includes('depreciation') ||
      item.accountName.toLowerCase().includes('amortization')
    )

    return roundToDecimals(
      depreciationAccounts.reduce((sum, item) => sum + item.convertedAmount, 0),
      2
    )
  }

  private calculateWorkingCapitalChanges(data: any[]): number {
    // Calculate changes in current assets and liabilities
    const currentAssets = data.filter(item =>
      item.accountType === 'ASSET' &&
      (item.accountName.toLowerCase().includes('receivable') ||
       item.accountName.toLowerCase().includes('inventory') ||
       item.accountName.toLowerCase().includes('cash'))
    )

    const currentLiabilities = data.filter(item =>
      item.accountType === 'LIABILITY' &&
      item.accountName.toLowerCase().includes('payable')
    )

    const assetChanges = currentAssets.reduce((sum, item) => sum + item.convertedAmount, 0)
    const liabilityChanges = currentLiabilities.reduce((sum, item) => sum + item.convertedAmount, 0)

    // Working capital change = liability changes - asset changes
    return roundToDecimals(liabilityChanges - assetChanges, 2)
  }

  private calculateCapitalExpenditures(data: any[]): number {
    // Look for fixed asset accounts
    const fixedAssets = data.filter(item =>
      item.accountType === 'ASSET' &&
      (item.accountName.toLowerCase().includes('equipment') ||
       item.accountName.toLowerCase().includes('building') ||
       item.accountName.toLowerCase().includes('vehicle') ||
       item.accountName.toLowerCase().includes('furniture'))
    )

    return roundToDecimals(
      fixedAssets.reduce((sum, item) => sum + item.convertedAmount, 0),
      2
    )
  }

  private calculateDebtChanges(data: any[]): number {
    // Look for debt accounts
    const debtAccounts = data.filter(item =>
      item.accountType === 'LIABILITY' &&
      (item.accountName.toLowerCase().includes('loan') ||
       item.accountName.toLowerCase().includes('debt') ||
       item.accountName.toLowerCase().includes('note'))
    )

    return roundToDecimals(
      debtAccounts.reduce((sum, item) => sum + item.convertedAmount, 0),
      2
    )
  }

  private calculateEquityChanges(data: any[]): number {
    // Look for equity accounts
    const equityAccounts = data.filter(item =>
      item.accountType === 'EQUITY' &&
      (item.accountName.toLowerCase().includes('capital') ||
       item.accountName.toLowerCase().includes('stock') ||
       item.accountName.toLowerCase().includes('retained'))
    )

    return roundToDecimals(
      equityAccounts.reduce((sum, item) => sum + item.convertedAmount, 0),
      2
    )
  }

  private calculateCashFlowSummary(
    operating: CashFlowItem[],
    investing: CashFlowItem[],
    financing: CashFlowItem[]
  ): CashFlowStatement['summary'] {
    const netCashFromOperating = operating.reduce((sum, item) => sum + item.amount, 0)
    const netCashFromInvesting = investing.reduce((sum, item) => sum + item.amount, 0)
    const netCashFromFinancing = financing.reduce((sum, item) => sum + item.amount, 0)

    const netChangeInCash = netCashFromOperating + netCashFromInvesting + netCashFromFinancing

    // For simplicity, assume beginning cash is 0
    const beginningCash = 0
    const endingCash = beginningCash + netChangeInCash

    return {
      netCashFromOperating: roundToDecimals(netCashFromOperating, 2),
      netCashFromInvesting: roundToDecimals(netCashFromInvesting, 2),
      netCashFromFinancing: roundToDecimals(netCashFromFinancing, 2),
      netChangeInCash: roundToDecimals(netChangeInCash, 2),
      beginningCash: roundToDecimals(beginningCash, 2),
      endingCash: roundToDecimals(endingCash, 2)
    }
  }

  async generate13WeekCashFlow(
    orgId: string,
    baseCurrency: string = "USD"
  ): Promise<{
    weeks: Array<{
      week: number
      date: string
      inflows: number
      outflows: number
      netFlow: number
      openingBalance: number
      closingBalance: number
    }>
    summary: {
      totalInflows: number
      totalOutflows: number
      netCashFlow: number
      averageWeeklyBurn: number
    }
  }> {
    // This is a simplified 13-week cash flow
    // In a real implementation, you would pull from AR/AP aging and other sources
    
    const weeks = []
    let openingBalance = 1000000 // Starting cash balance
    let totalInflows = 0
    let totalOutflows = 0

    for (let week = 1; week <= 13; week++) {
      // Simplified cash flow projections
      const inflows = 50000 + Math.random() * 100000 // AR collections
      const outflows = 30000 + Math.random() * 80000 // AP payments, payroll, etc.
      const netFlow = inflows - outflows
      const closingBalance = openingBalance + netFlow

      weeks.push({
        week,
        date: this.getWeekDate(week),
        inflows: roundToDecimals(inflows, 2),
        outflows: roundToDecimals(outflows, 2),
        netFlow: roundToDecimals(netFlow, 2),
        openingBalance: roundToDecimals(openingBalance, 2),
        closingBalance: roundToDecimals(closingBalance, 2)
      })

      openingBalance = closingBalance
      totalInflows += inflows
      totalOutflows += outflows
    }

    const netCashFlow = totalInflows - totalOutflows
    const averageWeeklyBurn = totalOutflows / 13

    return {
      weeks,
      summary: {
        totalInflows: roundToDecimals(totalInflows, 2),
        totalOutflows: roundToDecimals(totalOutflows, 2),
        netCashFlow: roundToDecimals(netCashFlow, 2),
        averageWeeklyBurn: roundToDecimals(averageWeeklyBurn, 2)
      }
    }
  }

  private getWeekDate(weekNumber: number): string {
    const startDate = new Date()
    const weekDate = new Date(startDate.getTime() + (weekNumber - 1) * 7 * 24 * 60 * 60 * 1000)
    return weekDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }
}
