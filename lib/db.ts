// Mock Prisma client for development
const mockPrismaClient = {
  user: {
    findMany: () => Promise.resolve([]),
    findUnique: () => Promise.resolve(null),
    create: () => Promise.resolve({ id: 'mock-user' }),
    update: () => Promise.resolve({ id: 'mock-user' }),
    delete: () => Promise.resolve({ id: 'mock-user' })
  },
  organization: {
    findMany: () => Promise.resolve([]),
    findUnique: () => Promise.resolve(null),
    create: () => Promise.resolve({ id: 'mock-org' }),
    update: () => Promise.resolve({ id: 'mock-org' }),
    delete: () => Promise.resolve({ id: 'mock-org' })
  },
  // Add other models as needed
  account: {
    findMany: () => Promise.resolve([]),
    findUnique: () => Promise.resolve(null)
  },
  entity: {
    findMany: () => Promise.resolve([]),
    findUnique: () => Promise.resolve(null)
  },
  version: {
    findMany: () => Promise.resolve([]),
    findUnique: () => Promise.resolve(null)
  },
  planCell: {
    findMany: () => Promise.resolve([]),
    findUnique: () => Promise.resolve(null)
  }
}

export const prisma = mockPrismaClient
export default prisma
