'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Calculator, 
  ChevronDown, 
  ChevronRight,
  Edit,
  Eye,
  Trash2,
  Search,
  Filter,
  Download,
  Upload
} from 'lucide-react'

const accounts = [
  {
    id: '1',
    code: '1000',
    name: 'Assets',
    type: 'ASSET',
    parentId: null,
    isActive: true,
    balance: 25000000,
    children: [
      {
        id: '2',
        code: '1100',
        name: 'Current Assets',
        type: 'ASSET',
        parentId: '1',
        isActive: true,
        balance: 15000000,
        children: [
          {
            id: '3',
            code: '1110',
            name: 'Cash and Cash Equivalents',
            type: 'ASSET',
            parentId: '2',
            isActive: true,
            balance: 8000000,
            children: []
          },
          {
            id: '4',
            code: '1120',
            name: 'Accounts Receivable',
            type: 'ASSET',
            parentId: '2',
            isActive: true,
            balance: 4500000,
            children: []
          },
          {
            id: '5',
            code: '1130',
            name: 'Inventory',
            type: 'ASSET',
            parentId: '2',
            isActive: true,
            balance: 2500000,
            children: []
          }
        ]
      },
      {
        id: '6',
        code: '1200',
        name: 'Fixed Assets',
        type: 'ASSET',
        parentId: '1',
        isActive: true,
        balance: 10000000,
        children: [
          {
            id: '7',
            code: '1210',
            name: 'Property, Plant & Equipment',
            type: 'ASSET',
            parentId: '6',
            isActive: true,
            balance: 8000000,
            children: []
          },
          {
            id: '8',
            code: '1220',
            name: 'Intangible Assets',
            type: 'ASSET',
            parentId: '6',
            isActive: true,
            balance: 2000000,
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '9',
    code: '2000',
    name: 'Liabilities',
    type: 'LIABILITY',
    parentId: null,
    isActive: true,
    balance: 12000000,
    children: [
      {
        id: '10',
        code: '2100',
        name: 'Current Liabilities',
        type: 'LIABILITY',
        parentId: '9',
        isActive: true,
        balance: 8000000,
        children: [
          {
            id: '11',
            code: '2110',
            name: 'Accounts Payable',
            type: 'LIABILITY',
            parentId: '10',
            isActive: true,
            balance: 5000000,
            children: []
          },
          {
            id: '12',
            code: '2120',
            name: 'Accrued Expenses',
            type: 'LIABILITY',
            parentId: '10',
            isActive: true,
            balance: 3000000,
            children: []
          }
        ]
      },
      {
        id: '13',
        code: '2200',
        name: 'Long-term Debt',
        type: 'LIABILITY',
        parentId: '9',
        isActive: true,
        balance: 4000000,
        children: []
      }
    ]
  },
  {
    id: '14',
    code: '3000',
    name: 'Equity',
    type: 'EQUITY',
    parentId: null,
    isActive: true,
    balance: 13000000,
    children: [
      {
        id: '15',
        code: '3100',
        name: 'Common Stock',
        type: 'EQUITY',
        parentId: '14',
        isActive: true,
        balance: 10000000,
        children: []
      },
      {
        id: '16',
        code: '3200',
        name: 'Retained Earnings',
        type: 'EQUITY',
        parentId: '14',
        isActive: true,
        balance: 3000000,
        children: []
      }
    ]
  },
  {
    id: '17',
    code: '4000',
    name: 'Revenue',
    type: 'REVENUE',
    parentId: null,
    isActive: true,
    balance: 17550000,
    children: [
      {
        id: '18',
        code: '4100',
        name: 'Product Revenue',
        type: 'REVENUE',
        parentId: '17',
        isActive: true,
        balance: 14000000,
        children: []
      },
      {
        id: '19',
        code: '4200',
        name: 'Service Revenue',
        type: 'REVENUE',
        parentId: '17',
        isActive: true,
        balance: 3550000,
        children: []
      }
    ]
  },
  {
    id: '20',
    code: '5000',
    name: 'Expenses',
    type: 'EXPENSE',
    parentId: null,
    isActive: true,
    balance: 11580000,
    children: [
      {
        id: '21',
        code: '5100',
        name: 'Cost of Goods Sold',
        type: 'EXPENSE',
        parentId: '20',
        isActive: true,
        balance: 8000000,
        children: []
      },
      {
        id: '22',
        code: '5200',
        name: 'Operating Expenses',
        type: 'EXPENSE',
        parentId: '20',
        isActive: true,
        balance: 3580000,
        children: [
          {
            id: '23',
            code: '5210',
            name: 'Salaries and Wages',
            type: 'EXPENSE',
            parentId: '22',
            isActive: true,
            balance: 2500000,
            children: []
          },
          {
            id: '24',
            code: '5220',
            name: 'Rent and Utilities',
            type: 'EXPENSE',
            parentId: '22',
            isActive: true,
            balance: 800000,
            children: []
          },
          {
            id: '25',
            code: '5230',
            name: 'Marketing and Advertising',
            type: 'EXPENSE',
            parentId: '22',
            isActive: true,
            balance: 280000,
            children: []
          }
        ]
      }
    ]
  }
]

const getTypeBadge = (type: string) => {
  const colors = {
    ASSET: 'bg-blue-800 text-blue-200',
    LIABILITY: 'bg-red-800 text-red-200',
    EQUITY: 'bg-green-800 text-green-200',
    REVENUE: 'bg-purple-800 text-purple-200',
    EXPENSE: 'bg-orange-800 text-orange-200'
  }
  return <Badge className={colors[type as keyof typeof colors]}>{type}</Badge>
}

const AccountRow = ({ account, level = 0 }: { account: any; level?: number }) => {
  const [expanded, setExpanded] = React.useState(level < 2)
  
  return (
    <>
      <div className="flex items-center justify-between p-3 border-b hover:bg-gray-50">
        <div className="flex items-center space-x-2" style={{ paddingLeft: `${level * 20}px` }}>
          {account.children && account.children.length > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-1 hover:bg-gray-200 rounded"
            >
              {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          )}
          <div className="flex items-center space-x-3">
            <span className="font-mono text-sm">{account.code}</span>
            <span className="font-medium">{account.name}</span>
            {getTypeBadge(account.type)}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm font-medium">
              ${(account.balance / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-muted-foreground">
              {account.children && account.children.length > 0 ? `${account.children.length} sub-accounts` : 'Leaf account'}
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
            {!account.children || account.children.length === 0 ? (
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </Button>
            ) : null}
          </div>
        </div>
      </div>
      {expanded && account.children && account.children.map((child: any) => (
        <AccountRow key={child.id} account={child} level={level + 1} />
      ))}
    </>
  )
}

export default function AccountsPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </DashboardLayout>
    )
  }

  if (!session) {
    redirect('/auth/signin')
  }

  const totalAccounts = accounts.reduce((sum, account) => {
    const countChildren = (acc: any): number => {
      return 1 + (acc.children ? acc.children.reduce((s: number, c: any) => s + countChildren(c), 0) : 0)
    }
    return sum + countChildren(account)
  }, 0)

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Chart of Accounts</h1>
            <p className="text-muted-foreground">
              Manage your account structure and hierarchy
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Account
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Accounts</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAccounts}</div>
              <p className="text-xs text-muted-foreground">
                Across all categories
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalBalance / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">
                Net position
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Types</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Asset, Liability, Equity, Revenue, Expense
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAccounts}</div>
              <p className="text-xs text-muted-foreground">
                100% active
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Account Hierarchy</CardTitle>
                <CardDescription>
                  Navigate and manage your chart of accounts
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg">
              {accounts.map((account) => (
                <AccountRow key={account.id} account={account} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Account Type Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Balance by Account Type</CardTitle>
              <CardDescription>
                Distribution of balances across account categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Assets</span>
                  <span className="text-sm font-medium">$25.0M (47.6%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '47.6%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Liabilities</span>
                  <span className="text-sm font-medium">$12.0M (22.9%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-400 h-2 rounded-full" style={{ width: '22.9%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Equity</span>
                  <span className="text-sm font-medium">$13.0M (24.8%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '24.8%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Revenue</span>
                  <span className="text-sm font-medium">$17.55M (33.4%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '33.4%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Expenses</span>
                  <span className="text-sm font-medium">$11.58M (22.1%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{ width: '22.1%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common account management tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Add New Account
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Upload className="h-4 w-4 mr-2" />
                Import Account Structure
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Export Chart of Accounts
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calculator className="h-4 w-4 mr-2" />
                Account Reconciliation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
