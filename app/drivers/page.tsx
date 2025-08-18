'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Activity, 
  Plus, 
  Edit, 
  Eye,
  Trash2,
  TrendingUp,
  TrendingDown,
  Target,
  Calculator,
  Settings
} from 'lucide-react'

const drivers = [
  {
    id: '1',
    name: 'Revenue Growth Rate',
    category: 'REVENUE',
    currentValue: 12.5,
    unit: '%',
    description: 'Annual revenue growth rate assumption',
    impact: 'HIGH',
    lastUpdated: '2024-12-20T10:30:00Z',
    trend: 'up'
  },
  {
    id: '2',
    name: 'Gross Margin',
    category: 'MARGIN',
    currentValue: 34.0,
    unit: '%',
    description: 'Target gross margin percentage',
    impact: 'HIGH',
    lastUpdated: '2024-12-19T14:20:00Z',
    trend: 'stable'
  },
  {
    id: '3',
    name: 'Employee Count',
    category: 'OPERATIONAL',
    currentValue: 300,
    unit: 'employees',
    description: 'Total number of employees',
    impact: 'MEDIUM',
    lastUpdated: '2024-12-18T09:15:00Z',
    trend: 'up'
  },
  {
    id: '4',
    name: 'Customer Acquisition Cost',
    category: 'COST',
    currentValue: 150,
    unit: 'USD',
    description: 'Average cost to acquire new customer',
    impact: 'HIGH',
    lastUpdated: '2024-12-17T16:45:00Z',
    trend: 'down'
  },
  {
    id: '5',
    name: 'Churn Rate',
    category: 'RETENTION',
    currentValue: 5.2,
    unit: '%',
    description: 'Monthly customer churn rate',
    impact: 'MEDIUM',
    lastUpdated: '2024-12-16T11:30:00Z',
    trend: 'down'
  },
  {
    id: '6',
    name: 'Average Order Value',
    category: 'REVENUE',
    currentValue: 250,
    unit: 'USD',
    description: 'Average value per customer order',
    impact: 'MEDIUM',
    lastUpdated: '2024-12-15T13:20:00Z',
    trend: 'up'
  }
]

const getImpactBadge = (impact: string) => {
  switch (impact) {
    case 'HIGH':
      return <Badge className="bg-red-800 text-red-200">High Impact</Badge>
    case 'MEDIUM':
      return <Badge className="bg-yellow-800 text-yellow-200">Medium Impact</Badge>
    case 'LOW':
      return <Badge className="bg-green-800 text-green-200">Low Impact</Badge>
    default:
      return <Badge className="bg-gray-800 text-gray-200">Unknown</Badge>
  }
}

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up':
      return <TrendingUp className="h-4 w-4 text-green-400" />
    case 'down':
      return <TrendingDown className="h-4 w-4 text-red-400" />
    case 'stable':
      return <Target className="h-4 w-4 text-blue-400" />
    default:
      return <Activity className="h-4 w-4 text-gray-400" />
  }
}

export default function DriversPage() {
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

  const totalDrivers = drivers.length
  const highImpactDrivers = drivers.filter(d => d.impact === 'HIGH').length
  const lastUpdate = new Date(drivers[0]?.lastUpdated || Date.now()).toLocaleString()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Business Drivers</h1>
            <p className="text-muted-foreground">
              Manage key business drivers and assumptions for financial modeling
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Calculator className="h-4 w-4 mr-2" />
              Calculate Impact
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Driver
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Drivers</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalDrivers}</div>
              <p className="text-xs text-muted-foreground">
                Business drivers
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Impact</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{highImpactDrivers}</div>
              <p className="text-xs text-muted-foreground">
                Critical drivers
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Driver categories
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

        {/* Drivers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Business Drivers</CardTitle>
            <CardDescription>
              Key business drivers and their current values
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {drivers.map((driver) => (
                <div key={driver.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getTrendIcon(driver.trend)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{driver.name}</h3>
                        {getImpactBadge(driver.impact)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {driver.description} • Updated: {new Date(driver.lastUpdated).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {driver.currentValue}{driver.unit}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {driver.category}
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
                      <Button variant="outline" size="sm">
                        <Calculator className="h-4 w-4 mr-1" />
                        Impact
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Driver Categories</CardTitle>
              <CardDescription>
                Manage drivers by category
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Revenue Drivers
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Target className="h-4 w-4 mr-2" />
                Margin Drivers
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                Operational Drivers
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calculator className="h-4 w-4 mr-2" />
                Cost Drivers
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest driver updates and changes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Revenue Growth Rate updated to 12.5%</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New driver "Customer Lifetime Value" added</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Impact analysis completed for all drivers</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
