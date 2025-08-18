'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  Clock,
  AlertCircle,
  Eye,
  Edit,
  User,
  Calendar,
  Activity
} from 'lucide-react'

const approvals = [
  {
    id: '1',
    title: 'Q1 2025 Budget Approval',
    type: 'BUDGET',
    status: 'PENDING',
    requester: 'Sarah Johnson',
    amount: 13500000,
    submittedAt: '2024-12-20T09:00:00Z',
    dueDate: '2024-12-25T17:00:00Z',
    priority: 'HIGH'
  },
  {
    id: '2',
    title: 'Capital Expenditure Request',
    type: 'CAPEX',
    status: 'APPROVED',
    requester: 'Mike Chen',
    amount: 2500000,
    submittedAt: '2024-12-19T14:30:00Z',
    approvedAt: '2024-12-20T10:15:00Z',
    priority: 'MEDIUM'
  },
  {
    id: '3',
    title: 'New Entity Setup',
    type: 'ENTITY',
    status: 'REJECTED',
    requester: 'Lisa Wang',
    amount: 500000,
    submittedAt: '2024-12-18T11:20:00Z',
    rejectedAt: '2024-12-19T16:45:00Z',
    priority: 'LOW'
  },
  {
    id: '4',
    title: 'FX Hedge Strategy',
    type: 'STRATEGY',
    status: 'PENDING',
    requester: 'David Smith',
    amount: 0,
    submittedAt: '2024-12-20T08:15:00Z',
    dueDate: '2024-12-23T17:00:00Z',
    priority: 'HIGH'
  },
  {
    id: '5',
    title: 'Software License Renewal',
    type: 'EXPENSE',
    status: 'APPROVED',
    requester: 'Alex Brown',
    amount: 150000,
    submittedAt: '2024-12-17T13:45:00Z',
    approvedAt: '2024-12-18T09:30:00Z',
    priority: 'MEDIUM'
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'APPROVED':
      return <CheckCircle className="h-4 w-4 text-green-400" />
    case 'REJECTED':
      return <XCircle className="h-4 w-4 text-red-400" />
    case 'PENDING':
      return <Clock className="h-4 w-4 text-yellow-400" />
    default:
      return <AlertCircle className="h-4 w-4 text-gray-400" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'APPROVED':
      return <Badge className="bg-green-800 text-green-200">Approved</Badge>
    case 'REJECTED':
      return <Badge className="bg-red-800 text-red-200">Rejected</Badge>
    case 'PENDING':
      return <Badge className="bg-yellow-800 text-yellow-200">Pending</Badge>
    default:
      return <Badge className="bg-gray-800 text-gray-200">Unknown</Badge>
  }
}

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case 'HIGH':
      return <Badge className="bg-red-800 text-red-200">High</Badge>
    case 'MEDIUM':
      return <Badge className="bg-yellow-800 text-yellow-200">Medium</Badge>
    case 'LOW':
      return <Badge className="bg-green-800 text-green-200">Low</Badge>
    default:
      return <Badge className="bg-gray-800 text-gray-200">Unknown</Badge>
  }
}

export default function ApprovalsPage() {
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

  const pendingApprovals = approvals.filter(a => a.status === 'PENDING').length
  const approvedCount = approvals.filter(a => a.status === 'APPROVED').length
  const totalAmount = approvals.reduce((sum, a) => sum + a.amount, 0)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Approvals</h1>
            <p className="text-muted-foreground">
              Manage workflow approvals and authorization requests
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Activity className="h-4 w-4 mr-2" />
              Workflow
            </Button>
            <Button>
              <Shield className="h-4 w-4 mr-2" />
              New Request
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingApprovals}</div>
              <p className="text-xs text-muted-foreground">
                Awaiting approval
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{approvedCount}</div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalAmount / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">
                All requests
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3 days</div>
              <p className="text-xs text-muted-foreground">
                Response time
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Approvals Table */}
        <Card>
          <CardHeader>
            <CardTitle>Approval Requests</CardTitle>
            <CardDescription>
              Manage and track approval requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {approvals.map((approval) => (
                <div key={approval.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(approval.status)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{approval.title}</h3>
                        {getStatusBadge(approval.status)}
                        {getPriorityBadge(approval.priority)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Requested by {approval.requester} • {new Date(approval.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      {approval.amount > 0 && (
                        <div className="text-sm font-medium">
                          ${(approval.amount / 1000000).toFixed(1)}M
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground">
                        {approval.type}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      {approval.status === 'PENDING' && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </>
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
              <CardTitle>Request Types</CardTitle>
              <CardDescription>
                Common approval request categories
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Budget Approvals
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                Capital Expenditure
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Entity Management
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Strategy Approvals
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest approval activities and decisions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Capital Expenditure Request approved</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Q1 2025 Budget submitted for approval</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New Entity Setup request rejected</p>
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
