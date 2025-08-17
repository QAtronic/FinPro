import { describe, it, expect } from 'vitest'
import { 
  formatCurrency, 
  formatNumber, 
  formatPercentage, 
  calculateVariance,
  groupBy,
  sumArray
} from '@/lib/utils'

describe('Utility Functions', () => {
  describe('formatCurrency', () => {
    it('should format positive numbers correctly', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56')
      expect(formatCurrency(1000000)).toBe('$1,000,000.00')
    })

    it('should format negative numbers correctly', () => {
      expect(formatCurrency(-1234.56)).toBe('-$1,234.56')
    })

    it('should handle zero', () => {
      expect(formatCurrency(0)).toBe('$0.00')
    })

    it('should handle custom currency', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56')
    })
  })

  describe('formatNumber', () => {
    it('should format numbers with commas', () => {
      expect(formatNumber(1234567)).toBe('1,234,567')
      expect(formatNumber(1234.56)).toBe('1,234.56')
    })

    it('should handle decimals', () => {
      expect(formatNumber(1234.567, 2)).toBe('1,234.57')
    })
  })

  describe('formatPercentage', () => {
    it('should format percentages correctly', () => {
      expect(formatPercentage(0.1234)).toBe('12.34%')
      expect(formatPercentage(0.5)).toBe('50.00%')
    })

    it('should handle negative percentages', () => {
      expect(formatPercentage(-0.1234)).toBe('-12.34%')
    })
  })

  describe('calculateVariance', () => {
    it('should calculate variance correctly', () => {
      const result = calculateVariance(1000, 1200)
      expect(result.absolute).toBe(200)
      expect(result.percentage).toBe(20)
    })

    it('should handle negative variance', () => {
      const result = calculateVariance(1000, 800)
      expect(result.absolute).toBe(-200)
      expect(result.percentage).toBe(-20)
    })

    it('should handle zero budget', () => {
      const result = calculateVariance(0, 1000)
      expect(result.absolute).toBe(1000)
      expect(result.percentage).toBe(Infinity)
    })
  })

  describe('groupBy', () => {
    it('should group array by key', () => {
      const data = [
        { id: 1, category: 'A', value: 10 },
        { id: 2, category: 'B', value: 20 },
        { id: 3, category: 'A', value: 30 }
      ]

      const result = groupBy(data, 'category')
      expect(result).toEqual({
        A: [
          { id: 1, category: 'A', value: 10 },
          { id: 3, category: 'A', value: 30 }
        ],
        B: [
          { id: 2, category: 'B', value: 20 }
        ]
      })
    })
  })

  describe('sumArray', () => {
    it('should sum array of numbers', () => {
      expect(sumArray([1, 2, 3, 4, 5])).toBe(15)
      expect(sumArray([1.5, 2.5, 3.5])).toBe(7.5)
    })

    it('should handle empty array', () => {
      expect(sumArray([])).toBe(0)
    })

    it('should handle array with key', () => {
      const data = [
        { value: 10 },
        { value: 20 },
        { value: 30 }
      ]
      expect(sumArray(data, 'value')).toBe(60)
    })
  })
})
