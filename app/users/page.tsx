'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Plus, 
  Edit, 
  Eye,
  Trash2,
  Shield,
  User,
  Mail,
  Calendar,
  Activity,
  Car,
  Home,
  Heart,
  Briefcase
} from 'lucide-react'

const users = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@trustline.com',
    role: 'MANAGER',
    status: 'ACTIVE',
    lastLogin: '2024-12-20T10:30:00Z',
    createdAt: '2024-01-15T08:00:00Z',
    department: 'Claims'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@trustline.com',
    role: 'AGENT',
    status: 'ACTIVE',
    lastLogin: '2024-12-20T09:15:00Z',
    createdAt: '2024-02-01T09:00:00Z',
    department: 'Sales'
  },
  {
    id: '3',
    name: 'Mike Chen',
    email: 'mike.chen@trustline.com',
    role: 'UNDERWRITER',
    status: 'ACTIVE',
    lastLogin: '2024-12-19T16:45:00Z',
    createdAt: '2024-03-10T10:00:00Z',
    department: 'Underwriting'
  },
  {
    id: '4',
    name: 'Lisa Wang',
    email: 'lisa.wang@trustline.com',
    role: 'AGENT',
    status: 'ACTIVE',
    lastLogin: '2024-12-20T08:30:00Z',
    createdAt: '2024-04-05T11:00:00Z',
    department: 'Customer Service'
  },
  {
    id: '5',
    name: 'David Smith',
    email: 'david.smith@trustline.com',
    role: 'VIEWER',
    status: 'INACTIVE',
    lastLogin: '2024-12-10T14:20:00Z',
    createdAt: '2024-05-20T13:00:00Z',
    department: 'Operations'
  },
  {
    id: '6',
    name: 'Alex Brown',
    email: 'alex.brown@trustline.com',
    role: 'AGENT',
    status: 'ACTIVE',
    lastLogin: '2024-12-20T11:00:00Z',
    createdAt: '2024-06-15T14:00:00Z',
    department: 'Sales'
  }
]

const getRoleBadge = (role: string) => {
  switch (role) {
    case 'MANAGER':
      return <Badge className="bg-purple-800 text-purple-200">Manager</Badge>
    case 'AGENT':
      return <Badge className="bg-blue-800 text-blue-200">Agent</Badge>
    case 'UNDERWRITER':
      return <Badge className="bg-green-800 text-green-200">Underwriter</Badge>
    case 'VIEWER':
      return <Badge className="bg-gray-800 text-gray-200">Viewer</Badge>
    default:
      return <Badge className="bg-gray-800 text-gray-200">Unknown</Badge>
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return <Badge className="bg-green-800 text-green-200">Active</Badge>
    case 'INACTIVE':
      return <Badge className="bg-red-800 text-red-200">Inactive</Badge>
    case 'PENDING':
      return <Badge className="bg-yellow-800 text-yellow-200">Pending</Badge>
    default:
      return <Badge className="bg-gray-800 text-gray-200">Unknown</Badge>
  }
}

export default function UsersPage() {
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

  const activeUsers = users.filter(u => u.status === 'ACTIVE').length
  const totalUsers = users.length
  const lastLogin = new Date(users[0]?.lastLogin || Date.now()).toLocaleString()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground">
              Manage user accounts and permissions
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Roles
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                Registered users
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeUsers}</div>
              <p className="text-xs text-muted-foreground">
                Currently active
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">User Roles</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                Role types
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Activity</CardTitle>
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

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>
              Manage user accounts, roles, and permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{user.name}</h3>
                        {getRoleBadge(user.role)}
                        {getStatusBadge(user.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {user.email} • {user.department} • Joined {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        Last login: {new Date(user.lastLogin).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {user.department}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      {user.status === 'INACTIVE' && (
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
              <CardTitle>User Roles</CardTitle>
              <CardDescription>
                Manage user roles and permissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Manager - Full Access
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Agent - Manage Policies
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                Underwriter - Risk Assessment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="h-4 w-4 mr-2" />
                Viewer - Read Only
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest user activities and changes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">John Smith logged in</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New user Alex Brown added</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">David Smith account deactivated</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
