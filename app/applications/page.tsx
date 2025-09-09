'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ClipboardList, 
  Plus, 
  Search, 
  Filter,
  Calendar,
  DollarSign,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Building2
} from 'lucide-react'

const applications = [
  {
    id: 'APP-001',
    clientName: 'John Smith',
    productType: 'Auto Insurance',
    status: 'Under Review',
    premium: 1200,
    submittedDate: '2024-01-20',
    reviewDate: '2024-01-22',
    coverage: 'Comprehensive',
    icon: User
  },
  {
    id: 'APP-002',
    clientName: 'TechCorp Solutions',
    productType: 'Business Insurance',
    status: 'Approved',
    premium: 25000,
    submittedDate: '2024-01-18',
    reviewDate: '2024-01-19',
    coverage: 'Comprehensive',
    icon: Building2
  },
  {
    id: 'APP-003',
    clientName: 'Sarah Johnson',
    productType: 'Property Insurance',
    status: 'Pending',
    premium: 3500,
    submittedDate: '2024-01-21',
    reviewDate: null,
    coverage: 'Standard',
    icon: User
  },
  {
    id: 'APP-004',
    clientName: 'Mike Wilson',
    productType: 'Health Insurance',
    status: 'Rejected',
    premium: 4800,
    submittedDate: '2024-01-15',
    reviewDate: '2024-01-17',
    coverage: 'Family Plan',
    icon: User
  },
  {
    id: 'APP-005',
    clientName: 'ABC Manufacturing',
    productType: 'Business Insurance',
    status: 'Under Review',
    premium: 45000,
    submittedDate: '2024-01-19',
    reviewDate: '2024-01-23',
    coverage: 'Industrial',
    icon: Building2
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved':
      return 'bg-green-100 text-green-800'
    case 'Under Review':
      return 'bg-blue-100 text-blue-800'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'Rejected':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Approved':
      return CheckCircle
    case 'Under Review':
      return Clock
    case 'Pending':
      return AlertCircle
    case 'Rejected':
      return AlertCircle
    default:
      return Clock
  }
}

export default function ApplicationsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
            <p className="text-muted-foreground">
              Manage policy applications and quotes
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Application
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">847</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                Avg. 2.3 days to review
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.5%</div>
              <p className="text-xs text-muted-foreground">
                +3.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.8M</div>
              <p className="text-xs text-muted-foreground">
                Potential premiums
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Applications Table */}
        <Card>
          <CardHeader>
            <CardTitle>Application Management</CardTitle>
            <CardDescription>
              Review and process insurance applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search applications by client, product type, or application ID..."
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            <div className="space-y-4">
              {applications.map((application) => {
                const Icon = application.icon
                const StatusIcon = getStatusIcon(application.status)
                return (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{application.id}</h3>
                          <Badge className={getStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                          <Badge className="bg-blue-100 text-blue-800">
                            {application.coverage}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{application.clientName}</p>
                        <p className="text-xs text-muted-foreground">{application.productType}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${application.premium.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">
                        Submitted: {application.submittedDate}
                      </p>
                      {application.reviewDate && (
                        <p className="text-xs text-muted-foreground">
                          Reviewed: {application.reviewDate}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Generate Quote</CardTitle>
              <CardDescription>
                Create insurance quotes for potential clients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                New Quote
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Application Templates</CardTitle>
              <CardDescription>
                Use pre-filled application templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                <ClipboardList className="mr-2 h-4 w-4" />
                View Templates
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bulk Processing</CardTitle>
              <CardDescription>
                Process multiple applications at once
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                <Shield className="mr-2 h-4 w-4" />
                Bulk Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

