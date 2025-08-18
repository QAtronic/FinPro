'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Settings, 
  Database, 
  Shield, 
  Bell,
  Globe,
  DollarSign,
  Calendar,
  Activity
} from 'lucide-react'

const settings = [
  {
    id: '1',
    name: 'Database Configuration',
    description: 'Database connection and backup settings',
    status: 'CONFIGURED',
    lastUpdated: '2024-12-20T10:30:00Z',
    icon: Database
  },
  {
    id: '2',
    name: 'Security Settings',
    description: 'Authentication and authorization configuration',
    status: 'CONFIGURED',
    lastUpdated: '2024-12-19T14:20:00Z',
    icon: Shield
  },
  {
    id: '3',
    name: 'Notification Preferences',
    description: 'Email and system notification settings',
    status: 'PENDING',
    lastUpdated: '2024-12-18T09:15:00Z',
    icon: Bell
  },
  {
    id: '4',
    name: 'Regional Settings',
    description: 'Timezone, language, and regional preferences',
    status: 'CONFIGURED',
    lastUpdated: '2024-12-17T16:45:00Z',
    icon: Globe
  },
  {
    id: '5',
    name: 'Currency Configuration',
    description: 'Default currencies and exchange rate settings',
    status: 'CONFIGURED',
    lastUpdated: '2024-12-16T11:30:00Z',
    icon: DollarSign
  },
  {
    id: '6',
    name: 'Fiscal Year Settings',
    description: 'Fiscal year configuration and period management',
    status: 'CONFIGURED',
    lastUpdated: '2024-12-15T13:20:00Z',
    icon: Calendar
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'CONFIGURED':
      return <Badge className="bg-green-100 text-green-800">Configured</Badge>
    case 'PENDING':
      return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
    case 'ERROR':
      return <Badge className="bg-red-100 text-red-800">Error</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>
  }
}

export default function SettingsPage() {
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

  const configuredSettings = settings.filter(s => s.status === 'CONFIGURED').length
  const pendingSettings = settings.filter(s => s.status === 'PENDING').length
  const lastUpdate = new Date(settings[0]?.lastUpdated || Date.now()).toLocaleString()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Configure system settings and preferences
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Activity className="h-4 w-4 mr-2" />
              System Status
            </Button>
            <Button>
              <Settings className="h-4 w-4 mr-2" />
              Save All
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Settings</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{settings.length}</div>
              <p className="text-xs text-muted-foreground">
                Configuration items
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Configured</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{configuredSettings}</div>
              <p className="text-xs text-muted-foreground">
                Properly configured
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingSettings}</div>
              <p className="text-xs text-muted-foreground">
                Require attention
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

        {/* Settings Grid */}
        <Card>
          <CardHeader>
            <CardTitle>System Configuration</CardTitle>
            <CardDescription>
              Manage system settings and configuration options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {settings.map((setting) => {
                const Icon = setting.icon
                return (
                  <Card key={setting.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className="h-5 w-5 text-muted-foreground" />
                          <CardTitle className="text-lg">{setting.name}</CardTitle>
                        </div>
                        {getStatusBadge(setting.status)}
                      </div>
                      <CardDescription className="text-sm">
                        {setting.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Last Updated:</span>
                          <span className="font-medium">
                            {new Date(setting.lastUpdated).toLocaleDateString()}
                          </span>
                        </div>
                        <Button variant="outline" className="w-full">
                          <Settings className="h-4 w-4 mr-2" />
                          Configure
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>System Maintenance</CardTitle>
              <CardDescription>
                System maintenance and backup operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Database className="h-4 w-4 mr-2" />
                Database Backup
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                System Health Check
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Security Audit
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Performance Optimization
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest configuration changes and updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Database configuration updated</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Security settings modified</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Notification preferences pending</p>
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
