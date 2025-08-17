import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}))

// Mock NextAuth
vi.mock('next-auth/react', () => ({
  useSession: () => ({
    data: null,
    status: 'unauthenticated',
  }),
  signIn: vi.fn(),
  signOut: vi.fn(),
}))

// Mock Prisma
vi.mock('@/lib/db', () => ({
  default: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    organization: {
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    entity: {
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    account: {
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    planCell: {
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      createMany: vi.fn(),
    },
    fxRate: {
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
    $queryRaw: vi.fn(),
    $transaction: vi.fn(),
  },
}))

// Global test utilities
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
