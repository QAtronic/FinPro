'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Building2, 
  Target,
  Calendar,
  Activity,
  BarChart3,
  PieChart
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell, Pie } from 'recharts'

const monthlyData = [
  { month: 'Jan', revenue: 2500000, expenses: 1800000, profit: 700000 },
  { month: 'Feb', revenue: 2600000, expenses: 1850000, profit: 750000 },
  { month: 'Mar', revenue: 2800000, expenses: 1900000, profit: 900000 },
  { month: 'Apr', revenue: 2750000, expenses: 1880000, profit: 870000 },
  { month: 'May', revenue: 2900000, expenses: 1950000, profit: 950000 },
  { month: 'Jun', revenue: 3000000, expenses: 2000000, profit: 1000000 },
]

const pieData = [
  { name: 'Revenue', value: 17550000, color: '#10b981' },
  { name: 'COGS', value: 11580000, color: '#ef4444' },
  { name: 'Operating Expenses', value: 5980000, color: '#f59e0b' },
]

const kpiCards = [
  {
    title: 'Total Revenue',
    value: '$17.55M',
    change: '+12.5%',
    changeType: 'positive' as const,
    icon: DollarSign,
    description: 'Year to date'
  },
  {
    title: 'Gross Margin',
    value: '34.0%',
    change: '+2.1%',
    changeType: 'positive' as const,
    icon: TrendingUp,
    description: 'vs last year'
  },
  {
    title: 'EBITDA',
    value: '$5.98M',
    change: '+8.3%',
    changeType: 'positive' as const,
    icon: Target,
    description: 'Year to date'
  },
  {
    title: 'Active Entities',
    value: '12',
    change: '+2',
    changeType: 'positive' as const,
    icon: Building2,
    description: 'This quarter'
  },
  {
    title: 'Budget Variance',
    value: '-2.3%',
    change: '-1.1%',
    changeType: 'negative' as const,
    icon: TrendingDown,
    description: 'vs plan'
  },
  {
    title: 'Cash Flow',
    value: '$3.2M',
    change: '+15.2%',
    changeType: 'positive' as const,
    icon: Activity,
    description: 'This month'
  }
]

export default function DashboardPage() {
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
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {session?.user?.name}. Here's what's happening with your finances today.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kpiCards.map((card) => {
            const Icon = card.icon
            return (
              <Card key={card.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {card.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {card.description}
                  </p>
                  <div className={`flex items-center text-xs mt-1 ${
                    card.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {card.changeType === 'positive' ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {card.change}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>
                Monthly revenue performance over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
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
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    name="Revenue"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="profit" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    name="Profit"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Expense Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
              <CardDescription>
                Distribution of costs and expenses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => `$${(Number(value) / 1000000).toFixed(1)}M`}
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#f9fafb'
                    }}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates and changes in your financial data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Budget version "Q4 2024" approved</p>
                  <p className="text-xs text-muted-foreground">2 hours ago by John Smith</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">FX rates updated for EUR and GBP</p>
                  <p className="text-xs text-muted-foreground">4 hours ago by System</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New entity "TechCorp Europe" added</p>
                  <p className="text-xs text-muted-foreground">1 day ago by Sarah Johnson</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Monthly actuals imported successfully</p>
                  <p className="text-xs text-muted-foreground">2 days ago by System</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
