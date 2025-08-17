import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

export function formatNumber(num: number, decimals: number = 0): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num)
}

export function formatPercentage(value: number, decimals: number = 1): string {
  return `${formatNumber(value * 100, decimals)}%`
}

export function calculateVariance(actual: number, budget: number): { delta: number; percentage: number } {
  const delta = actual - budget
  const percentage = budget !== 0 ? (delta / Math.abs(budget)) * 100 : 0
  return { delta, percentage }
}

export function getMonthName(month: number): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  return months[month - 1] || ""
}

export function getQuarterFromMonth(month: number): number {
  return Math.ceil(month / 3)
}

export function getQuarterName(quarter: number): string {
  return `Q${quarter}`
}

export function getFiscalYearMonths(fiscalYear: number): number[] {
  return Array.from({ length: 12 }, (_, i) => i + 1)
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as T
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as T
  if (typeof obj === "object") {
    const clonedObj = {} as T
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
  return obj
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const group = String(item[key])
    groups[group] = groups[group] || []
    groups[group].push(item)
    return groups
  }, {} as Record<string, T[]>)
}

export function sumBy<T>(array: T[], key: keyof T): number {
  return array.reduce((sum, item) => {
    const value = item[key]
    return sum + (typeof value === "number" ? value : 0)
  }, 0)
}

export function averageBy<T>(array: T[], key: keyof T): number {
  if (array.length === 0) return 0
  return sumBy(array, key) / array.length
}

export function roundToDecimals(value: number, decimals: number = 2): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

export function isValidDate(date: any): boolean {
  return date instanceof Date && !isNaN(date.getTime())
}

export function parseCSVDate(dateString: string): Date | null {
  const date = new Date(dateString)
  return isValidDate(date) ? date : null
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  return String(error)
}
