import prisma from "../db"
import { roundToDecimals } from "../utils"

export interface FxRate {
  id: string
  date: Date
  currency: string
  rateToBase: number
}

export interface FxRateInput {
  date: Date
  currency: string
  rateToBase: number
}

export class FxService {
  async getRatesForYear(orgId: string, year: number): Promise<FxRate[]> {
    const startDate = new Date(year, 0, 1)
    const endDate = new Date(year, 11, 31)

    const rates = await prisma.fxRate.findMany({
      where: {
        orgId,
        date: {
          gte: startDate,
          lte: endDate
        }
      },
      orderBy: {
        date: 'asc'
      }
    })

    return rates.map(rate => ({
      ...rate,
      date: rate.date
    }))
  }

  async getRateForDate(orgId: string, date: Date, currency: string): Promise<number | null> {
    const rate = await prisma.fxRate.findFirst({
      where: {
        orgId,
        date,
        currency
      }
    })

    return rate?.rateToBase || null
  }

  async getMonthlyAverageRate(orgId: string, year: number, month: number, currency: string): Promise<number | null> {
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0) // Last day of the month

    const rates = await prisma.fxRate.findMany({
      where: {
        orgId,
        currency,
        date: {
          gte: startDate,
          lte: endDate
        }
      }
    })

    if (rates.length === 0) return null

    const averageRate = rates.reduce((sum, rate) => sum + rate.rateToBase, 0) / rates.length
    return roundToDecimals(averageRate, 4)
  }

  async getClosingRateForMonth(orgId: string, year: number, month: number, currency: string): Promise<number | null> {
    const endDate = new Date(year, month, 0) // Last day of the month

    const rate = await prisma.fxRate.findFirst({
      where: {
        orgId,
        currency,
        date: {
          lte: endDate
        }
      },
      orderBy: {
        date: 'desc'
      }
    })

    return rate?.rateToBase || null
  }

  async addRate(orgId: string, rateData: FxRateInput): Promise<FxRate> {
    const rate = await prisma.fxRate.create({
      data: {
        orgId,
        date: rateData.date,
        currency: rateData.currency,
        rateToBase: roundToDecimals(rateData.rateToBase, 4)
      }
    })

    return {
      ...rate,
      date: rate.date
    }
  }

  async updateRate(id: string, rateToBase: number): Promise<FxRate> {
    const rate = await prisma.fxRate.update({
      where: { id },
      data: {
        rateToBase: roundToDecimals(rateToBase, 4)
      }
    })

    return {
      ...rate,
      date: rate.date
    }
  }

  async deleteRate(id: string): Promise<void> {
    await prisma.fxRate.delete({
      where: { id }
    })
  }

  async importRates(orgId: string, rates: FxRateInput[]): Promise<{ success: number; errors: string[] }> {
    const errors: string[] = []
    let success = 0

    for (const rateData of rates) {
      try {
        await this.addRate(orgId, rateData)
        success++
      } catch (error) {
        errors.push(`Failed to import rate for ${rateData.currency} on ${rateData.date.toISOString()}: ${error}`)
      }
    }

    return { success, errors }
  }

  getAverageRate(rates: FxRate[]): number {
    if (rates.length === 0) return 1.0
    const average = rates.reduce((sum, rate) => sum + rate.rateToBase, 0) / rates.length
    return roundToDecimals(average, 4)
  }

  convertAmount(amount: number, fromCurrency: string, toCurrency: string, rate: number): number {
    if (fromCurrency === toCurrency) return amount
    return roundToDecimals(amount * rate, 2)
  }

  async convertToBaseCurrency(
    amount: number,
    fromCurrency: string,
    orgId: string,
    date: Date
  ): Promise<number> {
    if (fromCurrency === 'USD') return amount

    const rate = await this.getRateForDate(orgId, date, fromCurrency)
    if (!rate) {
      throw new Error(`No FX rate found for ${fromCurrency} on ${date.toISOString()}`)
    }

    return this.convertAmount(amount, fromCurrency, 'USD', rate)
  }

  async convertFromBaseCurrency(
    amount: number,
    toCurrency: string,
    orgId: string,
    date: Date
  ): Promise<number> {
    if (toCurrency === 'USD') return amount

    const rate = await this.getRateForDate(orgId, date, toCurrency)
    if (!rate) {
      throw new Error(`No FX rate found for ${toCurrency} on ${date.toISOString()}`)
    }

    return this.convertAmount(amount, 'USD', toCurrency, 1 / rate)
  }

  async getSupportedCurrencies(orgId: string): Promise<string[]> {
    const rates = await prisma.fxRate.findMany({
      where: { orgId },
      select: { currency: true },
      distinct: ['currency']
    })

    return rates.map(rate => rate.currency).sort()
  }

  async validateRate(rateData: FxRateInput): Promise<{ isValid: boolean; errors: string[] }> {
    const errors: string[] = []

    if (!rateData.currency || rateData.currency.length !== 3) {
      errors.push('Currency must be a 3-letter code')
    }

    if (rateData.rateToBase <= 0) {
      errors.push('Exchange rate must be positive')
    }

    if (rateData.rateToBase > 10000) {
      errors.push('Exchange rate seems unusually high')
    }

    if (!rateData.date || isNaN(rateData.date.getTime())) {
      errors.push('Invalid date')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }
}
