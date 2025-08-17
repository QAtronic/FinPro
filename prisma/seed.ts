import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create organization
  const organization = await prisma.organization.create({
    data: {
      name: 'CorpFin Pro Demo',
      baseCurrency: 'USD',
    },
  })

  console.log('✅ Created organization:', organization.name)

  // Create admin user
  const passwordHash = await bcrypt.hash('Admin123!', 12)
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@corpfin.pro',
      name: 'Admin User',
      passwordHash,
      role: 'CFO',
      orgId: organization.id,
    },
  })

  console.log('✅ Created admin user:', adminUser.email)

  // Create entities
  const entities = await Promise.all([
    prisma.entity.create({
      data: {
        name: 'US Operations',
        currency: 'USD',
        ownershipPct: 100,
        orgId: organization.id,
      },
    }),
    prisma.entity.create({
      data: {
        name: 'European Operations',
        currency: 'EUR',
        ownershipPct: 80,
        orgId: organization.id,
      },
    }),
  ])

  console.log('✅ Created entities:', entities.map(e => e.name))

  // Create Chart of Accounts
  const accounts = await Promise.all([
    // Assets
    prisma.account.create({
      data: {
        code: '1000',
        name: 'Cash and Cash Equivalents',
        type: 'ASSET',
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '1100',
        name: 'Accounts Receivable',
        type: 'ASSET',
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '1200',
        name: 'Inventory',
        type: 'ASSET',
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      code: '1300',
      name: 'Fixed Assets',
      type: 'ASSET',
      orgId: organization.id,
    }),
    prisma.account.create({
      data: {
        code: '1310',
        name: 'Equipment',
        type: 'ASSET',
        parentId: (await prisma.account.findFirst({ where: { code: '1300', orgId: organization.id } }))?.id,
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '1320',
        name: 'Buildings',
        type: 'ASSET',
        parentId: (await prisma.account.findFirst({ where: { code: '1300', orgId: organization.id } }))?.id,
        orgId: organization.id,
      },
    }),

    // Liabilities
    prisma.account.create({
      data: {
        code: '2000',
        name: 'Accounts Payable',
        type: 'LIABILITY',
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '2100',
        name: 'Short-term Debt',
        type: 'LIABILITY',
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '2200',
        name: 'Long-term Debt',
        type: 'LIABILITY',
        orgId: organization.id,
      },
    }),

    // Equity
    prisma.account.create({
      data: {
        code: '3000',
        name: 'Common Stock',
        type: 'EQUITY',
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '3100',
        name: 'Retained Earnings',
        type: 'EQUITY',
        orgId: organization.id,
      },
    }),

    // Revenue
    prisma.account.create({
      data: {
        code: '4000',
        name: 'Sales Revenue',
        type: 'REVENUE',
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '4100',
        name: 'Other Revenue',
        type: 'REVENUE',
        orgId: organization.id,
      },
    }),

    // Expenses
    prisma.account.create({
      data: {
        code: '5000',
        name: 'Cost of Goods Sold',
        type: 'EXPENSE',
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '6000',
        name: 'Operating Expenses',
        type: 'EXPENSE',
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '6100',
        name: 'Salaries and Wages',
        type: 'EXPENSE',
        parentId: (await prisma.account.findFirst({ where: { code: '6000', orgId: organization.id } }))?.id,
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '6200',
        name: 'Rent Expense',
        type: 'EXPENSE',
        parentId: (await prisma.account.findFirst({ where: { code: '6000', orgId: organization.id } }))?.id,
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '6300',
        name: 'Utilities',
        type: 'EXPENSE',
        parentId: (await prisma.account.findFirst({ where: { code: '6000', orgId: organization.id } }))?.id,
        orgId: organization.id,
      },
    }),
    prisma.account.create({
      data: {
        code: '6400',
        name: 'Depreciation',
        type: 'EXPENSE',
        parentId: (await prisma.account.findFirst({ where: { code: '6000', orgId: organization.id } }))?.id,
        orgId: organization.id,
      },
    }),
  ])

  console.log('✅ Created accounts:', accounts.length, 'accounts')

  // Create FX rates for the last 3 months
  const fxRates = []
  const currencies = ['EUR', 'GBP', 'JPY']
  const months = [10, 11, 12] // Oct, Nov, Dec 2024

  for (const month of months) {
    for (const currency of currencies) {
      const rate = currency === 'EUR' ? 0.85 + Math.random() * 0.1 :
                   currency === 'GBP' ? 0.75 + Math.random() * 0.1 :
                   110 + Math.random() * 20

      fxRates.push({
        date: new Date(2024, month - 1, 15),
        currency,
        rateToBase: parseFloat(rate.toFixed(4)),
        orgId: organization.id,
      })
    }
  }

  await prisma.fxRate.createMany({
    data: fxRates,
  })

  console.log('✅ Created FX rates:', fxRates.length, 'rates')

  // Create a sample budget version
  const budgetVersion = await prisma.version.create({
    data: {
      name: 'FY2025 Budget v1',
      type: 'BUDGET',
      fiscalYear: 2025,
      status: 'DRAFT',
      orgId: organization.id,
    },
  })

  console.log('✅ Created budget version:', budgetVersion.name)

  // Create sample plan cells
  const planCells = []
  const usEntity = entities[0]
  const sampleAccounts = accounts.slice(0, 10) // Use first 10 accounts

  for (const account of sampleAccounts) {
    for (let month = 1; month <= 12; month++) {
      const baseAmount = account.type === 'REVENUE' ? 100000 + Math.random() * 50000 :
                        account.type === 'EXPENSE' ? 50000 + Math.random() * 30000 :
                        account.type === 'ASSET' ? 200000 + Math.random() * 100000 :
                        account.type === 'LIABILITY' ? 100000 + Math.random() * 50000 :
                        500000 + Math.random() * 200000

      planCells.push({
        versionId: budgetVersion.id,
        entityId: usEntity.id,
        accountId: account.id,
        month,
        amount: parseFloat((baseAmount * (0.8 + Math.random() * 0.4)).toFixed(2)),
      })
    }
  }

  await prisma.planCell.createMany({
    data: planCells,
  })

  console.log('✅ Created plan cells:', planCells.length, 'cells')

  // Create sample drivers
  const drivers = await Promise.all([
    prisma.driver.create({
      data: {
        name: 'Headcount Driver',
        expression: 'headcount * salary * months',
        inputs: {
          headcount: 100,
          salary: 50000,
          months: 12
        },
        orgId: organization.id,
      },
    }),
    prisma.driver.create({
      data: {
        name: 'Revenue Driver',
        expression: 'units * price * seasonality',
        inputs: {
          units: 10000,
          price: 25,
          seasonality: [1.1, 1.0, 0.9, 1.0, 1.1, 1.2, 1.1, 1.0, 0.9, 1.0, 1.1, 1.2]
        },
        orgId: organization.id,
      },
    }),
  ])

  console.log('✅ Created drivers:', drivers.length, 'drivers')

  console.log('🎉 Database seeding completed successfully!')
  console.log('')
  console.log('📋 Login Credentials:')
  console.log('   Email: admin@corpfin.pro')
  console.log('   Password: Admin123!')
  console.log('')
  console.log('⚠️  IMPORTANT: Change the default password in production!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
