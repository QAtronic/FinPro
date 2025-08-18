'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Upload, 
  Download, 
  FileText, 
  CheckCircle,
  AlertCircle,
  Clock,
  Eye,
  Trash2,
  Plus,
  Settings
} from 'lucide-react'

const importJobs = [
  {
    id: '1',
    name: 'December 2024 GL Data',
    type: 'GL_DATA',
    status: 'COMPLETED',
    fileName: 'gl_data_dec_2024.csv',
    recordsProcessed: 15420,
    recordsFailed: 0,
    createdAt: '2024-12-20T10:30:00Z',
    completedAt: '2024-12-20T10:35:00Z'
  },
  {
    id: '2',
    name: 'Q4 2024 Transactions',
    type: 'TRANSACTIONS',
    status: 'PROCESSING',
    fileName: 'transactions_q4_2024.xlsx',
    recordsProcessed: 8500,
    recordsFailed: 23,
    createdAt: '2024-12-20T11:00:00Z',
    completedAt: null
  },
  {
    id: '3',
    name: 'November 2024 Actuals',
    type: 'ACTUALS',
    status: 'COMPLETED',
    fileName: 'actuals_nov_2024.csv',
    recordsProcessed: 12350,
    recordsFailed: 5,
    createdAt: '2024-12-19T14:20:00Z',
    completedAt: '2024-12-19T14:25:00Z'
  },
  {
    id: '4',
    name: 'Chart of Accounts Update',
    type: 'ACCOUNT_STRUCTURE',
    status: 'FAILED',
    fileName: 'coa_update_2024.csv',
    recordsProcessed: 0,
    recordsFailed: 150,
    createdAt: '2024-12-18T09:15:00Z',
    completedAt: null
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'COMPLETED':
      return <CheckCircle className="h-4 w-4 text-green-400" />
    case 'PROCESSING':
      return <Clock className="h-4 w-4 text-yellow-400" />
    case 'FAILED':
      return <AlertCircle className="h-4 w-4 text-red-400" />
    default:
      return <Clock className="h-4 w-4 text-gray-400" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'COMPLETED':
      return <Badge className="bg-green-800 text-green-200">Completed</Badge>
    case 'PROCESSING':
      return <Badge className="bg-yellow-800 text-yellow-200">Processing</Badge>
    case 'FAILED':
      return <Badge className="bg-red-800 text-red-200">Failed</Badge>
    default:
      return <Badge className="bg-gray-800 text-gray-200">Unknown</Badge>
  }
}

export default function ImportPage() {
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

  const completedJobs = importJobs.filter(job => job.status === 'COMPLETED').length
  const failedJobs = importJobs.filter(job => job.status === 'FAILED').length
  const totalRecords = importJobs.reduce((sum, job) => sum + job.recordsProcessed, 0)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Data Import</h1>
            <p className="text-muted-foreground">
              Import and manage financial data from external sources
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Import
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Imports</CardTitle>
              <Upload className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{importJobs.length}</div>
              <p className="text-xs text-muted-foreground">
                Import jobs
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Successful</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedJobs}</div>
              <p className="text-xs text-muted-foreground">
                Completed imports
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{failedJobs}</div>
              <p className="text-xs text-muted-foreground">
                Failed imports
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Records Processed</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRecords.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Total records
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Import Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>Import Jobs</CardTitle>
            <CardDescription>
              Recent data import jobs and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {importJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(job.status)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{job.name}</h3>
                        {getStatusBadge(job.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {job.fileName} • {new Date(job.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        {job.recordsProcessed.toLocaleString()} processed
                      </div>
                      {job.recordsFailed > 0 && (
                        <div className="text-sm text-red-400">
                          {job.recordsFailed} failed
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Log
                      </Button>
                      {job.status === 'FAILED' && (
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Import Templates</CardTitle>
              <CardDescription>
                Download templates for different data types
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                GL Data Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Transaction Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Account Structure Template
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Entity Data Template
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest import activity and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">December GL data imported successfully</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Q4 transactions processing</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Chart of accounts import failed</p>
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
