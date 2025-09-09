'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Plus, 
  Search, 
  Filter,
  Calendar,
  DollarSign,
  Shield,
  TrendingUp,
  Users,
  FileText
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const healthPolicies = [
  {
    id: 'HLTH-001',
    clientName: 'Mike Wilson',
    planType: 'Family Plan',
    coverage: 'Comprehensive',
    status: 'Active',
    premium: 4800,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    members: 4
  },
  {
    id: 'HLTH-002',
    clientName: 'Sarah Johnson',
    planType: 'Individual',
    coverage: 'Basic',
    status: 'Active',
    premium: 2800,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    members: 1
  },
  {
    id: 'HLTH-003',
    clientName: 'TechCorp Solutions',
    planType: 'Group Plan',
    coverage: 'Premium',
    status: 'Active',
    premium: 25000,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    members: 25
  },
  {
    id: 'HLTH-004',
    clientName: 'John Smith',
    planType: 'Individual',
    coverage: 'Comprehensive',
    status: 'Active',
    premium: 3200,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    members: 1
  }
]

const monthlyData = [
  { month: 'Jan', premiums: 450000, claims: 380000, profit: 70000 },
  { month: 'Feb', premiums: 480000, claims: 420000, profit: 60000 },
  { month: 'Mar', premiums: 520000, claims: 450000, profit: 70000 },
  { month: 'Apr', premiums: 500000, claims: 410000, profit: 90000 },
  { month: 'May', premiums: 540000, claims: 460000, profit: 80000 },
  { month: 'Jun', premiums: 580000, claims: 490000, profit: 90000 },
]

const planData = [
  { plan: 'Individual', policies: 1250, premium: 1800000 },
  { plan: 'Family', policies: 680, premium: 2200000 },
  { plan: 'Group', policies: 120, premium: 1600000 },
  { plan: 'Senior', policies: 320, premium: 800000 },
]

export default function HealthInsurancePage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Health Insurance</h1>
            <p className="text-muted-foreground">
              Manage health and medical insurance policies
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Health Policy
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,370</div>
              <p className="text-xs text-muted-foreground">
                +4.8% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Premiums</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4.5M</div>
              <p className="text-xs text-muted-foreground">
                +7.2% from last year
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loss Ratio</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">84.5%</div>
              <p className="text-xs text-muted-foreground">
                +1.2% from last year
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Claims</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                Avg. 5.8 days to process
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Premiums vs Claims Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Health Insurance Performance</CardTitle>
              <CardDescription>
                Monthly premiums and claims trend for health insurance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => `$${(Number(value) / 1000).toFixed(0)}K`}
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#f9fafb'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="premiums" 
                    stroke="#7c3aed" 
                    strokeWidth={2}
                    name="Premiums"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="claims" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    name="Claims"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="profit" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    name="Profit"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Plan Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Plan Distribution</CardTitle>
              <CardDescription>
                Distribution of policies by plan type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={planData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="plan" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value) => `$${(Number(value) / 1000000).toFixed(1)}M`}
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#f9fafb'
                    }}
                  />
                  <Bar dataKey="premium" fill="#f59e0b" name="Premium" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Health Policies Table */}
        <Card>
          <CardHeader>
            <CardTitle>Health Insurance Policies</CardTitle>
            <CardDescription>
              Recent health insurance policies and their details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search health policies by client, plan type, or policy ID..."
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
              {healthPolicies.map((policy) => (
                <div key={policy.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{policy.id}</h3>
                        <Badge className="bg-green-100 text-green-800">
                          {policy.status}
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-800">
                          {policy.coverage}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{policy.clientName}</p>
                      <p className="text-xs text-muted-foreground">{policy.planType}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${policy.premium.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">
                      {policy.startDate} - {policy.endDate}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {policy.members} members
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

