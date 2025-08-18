'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Building2, 
  Globe, 
  DollarSign,
  Users,
  Activity,
  Edit,
  Eye,
  Trash2,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const entities = [
  {
    id: '1',
    name: 'TechCorp Inc.',
    currency: 'USD',
    isActive: true,
    ownershipPct: 100,
    country: 'United States',
    revenue: 8500000,
    employees: 150,
    status: 'active'
  },
  {
    id: '2',
    name: 'TechCorp Europe Ltd.',
    currency: 'EUR',
    isActive: true,
    ownershipPct: 100,
    country: 'United Kingdom',
    revenue: 4200000,
    employees: 75,
    status: 'active'
  },
  {
    id: '3',
    name: 'TechCorp Asia Pte Ltd.',
    currency: 'SGD',
    isActive: true,
    ownershipPct: 100,
    country: 'Singapore',
    revenue: 2800000,
    employees: 45,
    status: 'active'
  },
  {
    id: '4',
    name: 'TechCorp Canada Inc.',
    currency: 'CAD',
    isActive: true,
    ownershipPct: 100,
    country: 'Canada',
    revenue: 1800000,
    employees: 30,
    status: 'active'
  },
  {
    id: '5',
    name: 'TechCorp Australia Pty Ltd.',
    currency: 'AUD',
    isActive: false,
    ownershipPct: 0,
    country: 'Australia',
    revenue: 0,
    employees: 0,
    status: 'inactive'
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <CheckCircle className="h-4 w-4 text-green-400" />
    case 'inactive':
      return <AlertCircle className="h-4 w-4 text-red-400" />
    default:
      return <Activity className="h-4 w-4 text-gray-400" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-green-800 text-green-200">Active</Badge>
    case 'inactive':
      return <Badge className="bg-red-800 text-red-200">Inactive</Badge>
    default:
      return <Badge className="bg-gray-800 text-gray-200">Unknown</Badge>
  }
}

export default function EntitiesPage() {
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

  const totalRevenue = entities.reduce((sum, entity) => sum + entity.revenue, 0)
  const totalEmployees = entities.reduce((sum, entity) => sum + entity.employees, 0)
  const activeEntities = entities.filter(entity => entity.isActive).length

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Entities</h1>
            <p className="text-muted-foreground">
              Manage legal entities and subsidiaries across your organization
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Entity
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Entities</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{entities.length}</div>
              <p className="text-xs text-muted-foreground">
                {activeEntities} active
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${(totalRevenue / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">
                Across all entities
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalEmployees}</div>
              <p className="text-xs text-muted-foreground">
                Global headcount
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Countries</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Operating regions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Entities Table */}
        <Card>
          <CardHeader>
            <CardTitle>Legal Entities</CardTitle>
            <CardDescription>
              Overview of all legal entities and their key metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {entities.map((entity) => (
                <div key={entity.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(entity.status)}
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{entity.name}</h3>
                        {getStatusBadge(entity.status)}
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          <span>{entity.country}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {entity.currency} • {entity.ownershipPct}% ownership
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        ${(entity.revenue / 1000000).toFixed(1)}M Revenue
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {entity.employees} employees
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
                      {!entity.isActive && (
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

        {/* Geographic Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Region</CardTitle>
              <CardDescription>
                Revenue distribution across geographic regions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">North America</span>
                  <span className="text-sm font-medium">$10.3M (58.7%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '58.7%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Europe</span>
                  <span className="text-sm font-medium">$4.2M (23.9%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '23.9%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Asia Pacific</span>
                  <span className="text-sm font-medium">$2.8M (16.0%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '16.0%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Other</span>
                  <span className="text-sm font-medium">$0.2M (1.4%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '1.4%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common entity management tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Add New Entity
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Globe className="h-4 w-4 mr-2" />
                Manage Currencies
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                Entity Performance
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="h-4 w-4 mr-2" />
                Consolidation Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
