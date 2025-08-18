'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Download, 
  Eye, 
  Plus, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Filter,
  Search,
  Settings
} from 'lucide-react'

const reports = [
  {
    id: '1',
    name: 'Income Statement',
    type: 'FINANCIAL',
    description: 'Profit and loss statement for the current period',
    lastRun: '2024-12-20T10:30:00Z',
    status: 'READY',
    format: 'PDF',
    size: '2.3 MB'
  },
  {
    id: '2',
    name: 'Balance Sheet',
    type: 'FINANCIAL',
    description: 'Financial position as of the reporting date',
    lastRun: '2024-12-20T10:30:00Z',
    status: 'READY',
    format: 'PDF',
    size: '1.8 MB'
  },
  {
    id: '3',
    name: 'Cash Flow Statement',
    type: 'FINANCIAL',
    description: 'Cash inflows and outflows for the period',
    lastRun: '2024-12-20T10:30:00Z',
    status: 'READY',
    format: 'PDF',
    size: '1.5 MB'
  },
  {
    id: '4',
    name: 'Budget vs Actual',
    type: 'ANALYSIS',
    description: 'Variance analysis between budget and actual results',
    lastRun: '2024-12-19T15:45:00Z',
    status: 'READY',
    format: 'EXCEL',
    size: '3.2 MB'
  },
  {
    id: '5',
    name: 'Revenue by Region',
    type: 'ANALYSIS',
    description: 'Geographic revenue breakdown and trends',
    lastRun: '2024-12-18T09:15:00Z',
    status: 'READY',
    format: 'EXCEL',
    size: '1.1 MB'
  },
  {
    id: '6',
    name: 'Expense Analysis',
    type: 'ANALYSIS',
    description: 'Detailed expense breakdown by category',
    lastRun: '2024-12-17T14:20:00Z',
    status: 'READY',
    format: 'EXCEL',
    size: '2.7 MB'
  },
  {
    id: '7',
    name: 'KPI Dashboard',
    type: 'DASHBOARD',
    description: 'Key performance indicators and metrics',
    lastRun: '2024-12-20T11:00:00Z',
    status: 'READY',
    format: 'PDF',
    size: '4.1 MB'
  },
  {
    id: '8',
    name: 'Forecast Report',
    type: 'FORECAST',
    description: 'Financial projections and forecasting analysis',
    lastRun: '2024-12-16T16:30:00Z',
    status: 'READY',
    format: 'EXCEL',
    size: '5.2 MB'
  }
]

const getTypeBadge = (type: string) => {
  const colors = {
    FINANCIAL: 'bg-blue-800 text-blue-200',
    ANALYSIS: 'bg-green-800 text-green-200',
    DASHBOARD: 'bg-purple-800 text-purple-200',
    FORECAST: 'bg-orange-800 text-orange-200'
  }
  return <Badge className={colors[type as keyof typeof colors]}>{type}</Badge>
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'READY':
      return <Badge className="bg-green-800 text-green-200">Ready</Badge>
    case 'PROCESSING':
      return <Badge className="bg-yellow-800 text-yellow-200">Processing</Badge>
    case 'ERROR':
      return <Badge className="bg-red-800 text-red-200">Error</Badge>
    default:
      return <Badge className="bg-gray-800 text-gray-200">Unknown</Badge>
  }
}

export default function ReportsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
            <p className="text-muted-foreground">
              Generate and manage financial reports and analysis
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Report
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reports.length}</div>
              <p className="text-xs text-muted-foreground">
                Available reports
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ready Reports</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reports.filter(r => r.status === 'READY').length}</div>
              <p className="text-xs text-muted-foreground">
                Ready for download
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Report Types</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                Financial, Analysis, Dashboard, Forecast
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Today</div>
              <p className="text-xs text-muted-foreground">
                11:00 AM
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Available Reports</CardTitle>
                <CardDescription>
                  Browse and generate financial reports
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
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{report.name}</CardTitle>
                      {getTypeBadge(report.type)}
                    </div>
                    <CardDescription className="text-sm">
                      {report.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        {getStatusBadge(report.status)}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium">{report.format}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium">{report.size}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Last Run:</span>
                        <span className="font-medium">
                          {new Date(report.lastRun).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-1" />
                          Download
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
              <CardTitle>Report Categories</CardTitle>
              <CardDescription>
                Browse reports by category
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Financial Statements
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analysis Reports
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Performance Dashboards
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Forecast Reports
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest report generation activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">KPI Dashboard generated</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Income Statement updated</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Budget vs Actual report created</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Forecast Report scheduled</p>
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
