'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  RefreshCw,
  Download,
  Upload,
  Settings,
  Calendar
} from 'lucide-react'

const fxRates = [
  {
    id: '1',
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    rate: 0.85,
    change: 0.02,
    changePercent: 2.4,
    lastUpdated: '2024-12-20T10:30:00Z',
    source: 'ECB'
  },
  {
    id: '2',
    fromCurrency: 'USD',
    toCurrency: 'GBP',
    rate: 0.78,
    change: -0.01,
    changePercent: -1.3,
    lastUpdated: '2024-12-20T10:30:00Z',
    source: 'BOE'
  },
  {
    id: '3',
    fromCurrency: 'USD',
    toCurrency: 'JPY',
    rate: 148.50,
    change: 1.20,
    changePercent: 0.8,
    lastUpdated: '2024-12-20T10:30:00Z',
    source: 'BOJ'
  },
  {
    id: '4',
    fromCurrency: 'USD',
    toCurrency: 'CAD',
    rate: 1.35,
    change: 0.00,
    changePercent: 0.0,
    lastUpdated: '2024-12-20T10:30:00Z',
    source: 'BOC'
  },
  {
    id: '5',
    fromCurrency: 'USD',
    toCurrency: 'AUD',
    rate: 1.48,
    change: -0.03,
    changePercent: -2.0,
    lastUpdated: '2024-12-20T10:30:00Z',
    source: 'RBA'
  },
  {
    id: '6',
    fromCurrency: 'EUR',
    toCurrency: 'GBP',
    rate: 0.92,
    change: -0.02,
    changePercent: -2.1,
    lastUpdated: '2024-12-20T10:30:00Z',
    source: 'ECB'
  }
]

const getChangeIcon = (change: number) => {
  if (change > 0) {
    return <TrendingUp className="h-4 w-4 text-green-400" />
  } else if (change < 0) {
    return <TrendingDown className="h-4 w-4 text-red-400" />
  } else {
    return <div className="h-4 w-4" />
  }
}

const getChangeBadge = (changePercent: number) => {
  if (changePercent > 0) {
    return <Badge className="bg-green-800 text-green-200">+{changePercent.toFixed(1)}%</Badge>
  } else if (changePercent < 0) {
    return <Badge className="bg-red-800 text-red-200">{changePercent.toFixed(1)}%</Badge>
  } else {
    return <Badge className="bg-gray-800 text-gray-200">0.0%</Badge>
  }
}

export default function FxRatesPage() {
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

  const totalRates = fxRates.length
  const lastUpdate = new Date(fxRates[0]?.lastUpdated || Date.now()).toLocaleString()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">FX Rates</h1>
            <p className="text-muted-foreground">
              Manage foreign exchange rates for multi-currency operations
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
            <Button>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Rates</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRates}</div>
              <p className="text-xs text-muted-foreground">
                Currency pairs
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
                10:30 AM
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Central banks
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Auto Refresh</CardTitle>
              <RefreshCw className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Enabled</div>
              <p className="text-xs text-muted-foreground">
                Every 15 minutes
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FX Rates Table */}
        <Card>
          <CardHeader>
            <CardTitle>Exchange Rates</CardTitle>
            <CardDescription>
              Current foreign exchange rates and their changes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fxRates.map((rate) => (
                <div key={rate.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getChangeIcon(rate.change)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{rate.fromCurrency}/{rate.toCurrency}</h3>
                        {getChangeBadge(rate.changePercent)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Source: {rate.source} • Updated: {new Date(rate.lastUpdated).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold">{rate.rate.toFixed(4)}</div>
                      <div className="text-sm text-muted-foreground">
                        {rate.change > 0 ? '+' : ''}{rate.change.toFixed(4)} change
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        History
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-1" />
                        Edit
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
              <CardTitle>Rate Management</CardTitle>
              <CardDescription>
                Common FX rate management tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Upload className="h-4 w-4 mr-2" />
                Import Historical Rates
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Export Rate Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Configure Data Sources
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Set Update Schedule
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest rate updates and changes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">USD/EUR rate updated to 0.8500</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">USD/GBP rate decreased by 1.3%</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New JPY rate source added</p>
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
