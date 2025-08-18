'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  Plus, 
  Eye, 
  Edit, 
  Copy,
  Trash2,
  BarChart3,
  Target,
  DollarSign,
  Activity
} from 'lucide-react'

const scenarios = [
  {
    id: '1',
    name: 'Base Case 2025',
    description: 'Standard forecast based on current trends',
    status: 'ACTIVE',
    revenue: 18500000,
    expenses: 12500000,
    profit: 6000000,
    margin: 32.4,
    createdAt: '2024-12-01T08:00:00Z',
    updatedAt: '2024-12-20T10:30:00Z'
  },
  {
    id: '2',
    name: 'Optimistic Growth',
    description: 'High growth scenario with market expansion',
    status: 'ACTIVE',
    revenue: 22000000,
    expenses: 13500000,
    profit: 8500000,
    margin: 38.6,
    createdAt: '2024-12-05T09:00:00Z',
    updatedAt: '2024-12-18T14:20:00Z'
  },
  {
    id: '3',
    name: 'Conservative Budget',
    description: 'Conservative approach with cost controls',
    status: 'ACTIVE',
    revenue: 16500000,
    expenses: 11500000,
    profit: 5000000,
    margin: 30.3,
    createdAt: '2024-12-10T11:00:00Z',
    updatedAt: '2024-12-19T16:45:00Z'
  },
  {
    id: '4',
    name: 'Market Downturn',
    description: 'Scenario planning for economic challenges',
    status: 'DRAFT',
    revenue: 14000000,
    expenses: 10500000,
    profit: 3500000,
    margin: 25.0,
    createdAt: '2024-12-15T13:00:00Z',
    updatedAt: '2024-12-20T09:15:00Z'
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return <Badge className="bg-green-100 text-green-800">Active</Badge>
    case 'DRAFT':
      return <Badge className="bg-blue-100 text-blue-800">Draft</Badge>
    case 'ARCHIVED':
      return <Badge className="bg-gray-100 text-gray-800">Archived</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>
  }
}

export default function ScenariosPage() {
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

  const activeScenarios = scenarios.filter(s => s.status === 'ACTIVE').length
  const totalRevenue = scenarios.reduce((sum, s) => sum + s.revenue, 0)
  const avgMargin = scenarios.reduce((sum, s) => sum + s.margin, 0) / scenarios.length

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Scenarios</h1>
            <p className="text-muted-foreground">
              What-if analysis and financial modeling scenarios
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Compare
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Scenario
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Scenarios</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{scenarios.length}</div>
              <p className="text-xs text-muted-foreground">
                {activeScenarios} active
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalRevenue / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">
                Across all scenarios
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Margin</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgMargin.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                Average profit margin
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Today</div>
              <p className="text-xs text-muted-foreground">
                10:30 AM
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Scenarios Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Scenarios</CardTitle>
            <CardDescription>
              Manage and compare different financial scenarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scenarios.map((scenario) => (
                <Card key={scenario.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{scenario.name}</CardTitle>
                      {getStatusBadge(scenario.status)}
                    </div>
                    <CardDescription className="text-sm">
                      {scenario.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Revenue:</span>
                          <div className="font-medium">${(scenario.revenue / 1000000).toFixed(1)}M</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Expenses:</span>
                          <div className="font-medium">${(scenario.expenses / 1000000).toFixed(1)}M</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Profit:</span>
                          <div className="font-medium">${(scenario.profit / 1000000).toFixed(1)}M</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Margin:</span>
                          <div className="font-medium">{scenario.margin.toFixed(1)}%</div>
                        </div>
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Scenario Templates</CardTitle>
              <CardDescription>
                Pre-built scenario templates for common use cases
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Growth Scenario Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Target className="h-4 w-4 mr-2" />
                Cost Reduction Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="h-4 w-4 mr-2" />
                Market Expansion Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                Risk Assessment Template
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest scenario updates and comparisons
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Base Case 2025 updated</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Scenario comparison generated</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Market Downturn scenario created</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
