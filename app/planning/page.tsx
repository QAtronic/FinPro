'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Download, 
  Upload, 
  Eye, 
  Edit, 
  Lock, 
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  Target,
  TrendingUp,
  DollarSign
} from 'lucide-react'

const versions = [
  {
    id: '1',
    name: 'Q4 2024 Budget',
    type: 'BUDGET',
    fiscalYear: 2024,
    status: 'APPROVED',
    lockedAt: '2024-10-15T10:00:00Z',
    createdAt: '2024-09-01T08:00:00Z',
    updatedAt: '2024-10-15T10:00:00Z',
    totalRevenue: 12500000,
    totalExpenses: 8500000,
    variance: 2.3
  },
  {
    id: '2',
    name: 'Q1 2025 Forecast',
    type: 'FORECAST',
    fiscalYear: 2025,
    status: 'REVIEW',
    lockedAt: null,
    createdAt: '2024-12-01T08:00:00Z',
    updatedAt: '2024-12-15T14:30:00Z',
    totalRevenue: 13500000,
    totalExpenses: 9200000,
    variance: -1.8
  },
  {
    id: '3',
    name: '2024 Actuals',
    type: 'ACTUAL',
    fiscalYear: 2024,
    status: 'LOCKED',
    lockedAt: '2024-12-31T23:59:59Z',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-12-31T23:59:59Z',
    totalRevenue: 17550000,
    totalExpenses: 11580000,
    variance: 0.0
  },
  {
    id: '4',
    name: 'Q2 2025 Forecast',
    type: 'FORECAST',
    fiscalYear: 2025,
    status: 'DRAFT',
    lockedAt: null,
    createdAt: '2024-12-20T09:00:00Z',
    updatedAt: '2024-12-20T09:00:00Z',
    totalRevenue: 14200000,
    totalExpenses: 9500000,
    variance: 0.0
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'APPROVED':
      return <CheckCircle className="h-4 w-4 text-green-400" />
    case 'REVIEW':
      return <Clock className="h-4 w-4 text-yellow-400" />
    case 'DRAFT':
      return <Edit className="h-4 w-4 text-blue-400" />
    case 'LOCKED':
      return <Lock className="h-4 w-4 text-gray-400" />
    default:
      return <AlertCircle className="h-4 w-4 text-red-400" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'APPROVED':
      return <Badge className="bg-green-800 text-green-200">Approved</Badge>
    case 'REVIEW':
      return <Badge className="bg-yellow-800 text-yellow-200">In Review</Badge>
    case 'DRAFT':
      return <Badge className="bg-blue-800 text-blue-200">Draft</Badge>
    case 'LOCKED':
      return <Badge className="bg-gray-800 text-gray-200">Locked</Badge>
    default:
      return <Badge className="bg-red-800 text-red-200">Error</Badge>
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'BUDGET':
      return <Target className="h-4 w-4" />
    case 'FORECAST':
      return <TrendingUp className="h-4 w-4" />
    case 'ACTUAL':
      return <Calendar className="h-4 w-4" />
    default:
      return <Calendar className="h-4 w-4" />
  }
}

export default function PlanningPage() {
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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Planning</h1>
            <p className="text-muted-foreground">
              Manage budgets, forecasts, and financial planning versions
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Version
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Versions</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                Across 2 fiscal years
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">
                Q1 2025 Forecast
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12.5M</div>
              <p className="text-xs text-muted-foreground">
                Q4 2024 Budget
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Variance</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.1%</div>
              <p className="text-xs text-muted-foreground">
                vs actuals
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Versions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Planning Versions</CardTitle>
            <CardDescription>
              Manage your budget and forecast versions with approval workflows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {versions.map((version) => (
                <div key={version.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(version.status)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{version.name}</h3>
                        {getStatusBadge(version.status)}
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          {getTypeIcon(version.type)}
                          <span>{version.type}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        FY {version.fiscalYear} • Created {new Date(version.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        ${(version.totalRevenue / 1000000).toFixed(1)}M Revenue
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ${(version.totalExpenses / 1000000).toFixed(1)}M Expenses
                      </div>
                      {version.variance !== 0 && (
                        <div className={`text-xs ${
                          version.variance > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {version.variance > 0 ? '+' : ''}{version.variance}% variance
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      {version.status === 'DRAFT' && (
                        <Button size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      )}
                      {version.status === 'REVIEW' && (
                        <Button size="sm">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common planning tasks and workflows
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Create New Budget Version
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Upload className="h-4 w-4 mr-2" />
                Import Actual Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Export Planning Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Run Variance Analysis
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest changes and approvals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Q4 2024 Budget approved</p>
                  <p className="text-xs text-muted-foreground">2 hours ago by John Smith</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Q1 2025 Forecast submitted for review</p>
                  <p className="text-xs text-muted-foreground">1 day ago by Sarah Johnson</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Actual data imported for December</p>
                  <p className="text-xs text-muted-foreground">3 days ago by System</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
