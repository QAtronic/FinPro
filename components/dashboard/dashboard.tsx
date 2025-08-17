'use client'

import { useSession } from 'next-auth/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Users, 
  Calendar,
  ArrowRight,
  Plus
} from 'lucide-react'
import Link from 'next/link'
import { formatCurrency, formatPercentage } from '@/lib/utils'

interface KPICardProps {
  title: string
  value: string
  change: number
  changeType: 'positive' | 'negative' | 'neutral'
  icon: React.ReactNode
}

function KPICard({ title, value, change, changeType, icon }: KPICardProps) {
  return (
    <Card className="kpi-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`flex items-center text-xs ${
          changeType === 'positive' ? 'text-green-600' : 
          changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
        }`}>
          {changeType === 'positive' ? <TrendingUp className="h-3 w-3 mr-1" /> :
           changeType === 'negative' ? <TrendingDown className="h-3 w-3 mr-1" /> : null}
          {formatPercentage(Math.abs(change) / 100)}
          <span className="ml-1">vs last month</span>
        </div>
      </CardContent>
    </Card>
  )
}

export function Dashboard() {
  const { data: session } = useSession()

  // Mock data - in real app, fetch from API
  const kpis = [
    {
      title: "Total Revenue",
      value: formatCurrency(2500000),
      change: 12.5,
      changeType: 'positive' as const,
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "Gross Margin",
      value: formatPercentage(0.68),
      change: 2.1,
      changeType: 'positive' as const,
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "Operating Expenses",
      value: formatCurrency(1800000),
      change: -5.2,
      changeType: 'positive' as const,
      icon: <TrendingDown className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "EBITDA",
      value: formatCurrency(700000),
      change: 18.7,
      changeType: 'positive' as const,
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "Cash Balance",
      value: formatCurrency(1200000),
      change: 8.3,
      changeType: 'positive' as const,
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: "Active Entities",
      value: "3",
      change: 0,
      changeType: 'neutral' as const,
      icon: <Users className="h-4 w-4 text-muted-foreground" />
    }
  ]

  const quickActions = [
    {
      title: "Create Budget",
      description: "Start a new budget version",
      href: "/budget/new",
      icon: <Plus className="h-5 w-5" />
    },
    {
      title: "Run Consolidation",
      description: "Consolidate multi-entity data",
      href: "/consolidation",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      title: "Generate Reports",
      description: "Create financial reports",
      href: "/reports",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: "Cash Flow Planning",
      description: "13-week cash flow view",
      href: "/cash",
      icon: <TrendingUp className="h-5 w-5" />
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, {session?.user?.name} • {session?.user?.orgName}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{action.title}</h3>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Budget Versions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "FY2025 Budget v2", status: "Approved", date: "2024-01-15" },
                  { name: "Q1 Forecast", status: "Review", date: "2024-01-10" },
                  { name: "FY2024 Actual", status: "Locked", date: "2024-01-05" }
                ].map((version, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{version.name}</p>
                      <p className="text-sm text-muted-foreground">{version.date}</p>
                    </div>
                    <span className={`status-badge ${version.status.toLowerCase()}`}>
                      {version.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { service: "Database", status: "Healthy", color: "text-green-600" },
                  { service: "FX Rates", status: "Up to date", color: "text-green-600" },
                  { service: "Consolidation Engine", status: "Ready", color: "text-green-600" },
                  { service: "Report Generator", status: "Available", color: "text-green-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{item.service}</span>
                    <span className={item.color}>{item.status}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
