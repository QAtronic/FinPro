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
  Search, 
  Filter,
  Calendar,
  DollarSign,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Shield
} from 'lucide-react'

const clients = [
  {
    id: 'CLI-001',
    name: 'TechCorp Solutions',
    type: 'Business',
    status: 'Active',
    email: 'contact@techcorp.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, San Francisco, CA',
    policies: 5,
    totalPremium: 125000,
    lastContact: '2024-01-15',
    icon: Building2
  },
  {
    id: 'CLI-002',
    name: 'John Smith',
    type: 'Individual',
    status: 'Active',
    email: 'john.smith@email.com',
    phone: '+1 (555) 234-5678',
    address: '456 Oak Street, New York, NY',
    policies: 2,
    totalPremium: 6000,
    lastContact: '2024-01-18',
    icon: User
  },
  {
    id: 'CLI-003',
    name: 'Sarah Johnson',
    type: 'Individual',
    status: 'Active',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 345-6789',
    address: '789 Pine Road, Chicago, IL',
    policies: 3,
    totalPremium: 8500,
    lastContact: '2024-01-20',
    icon: User
  },
  {
    id: 'CLI-004',
    name: 'ABC Manufacturing',
    type: 'Business',
    status: 'Inactive',
    email: 'info@abcmanufacturing.com',
    phone: '+1 (555) 456-7890',
    address: '321 Industrial Blvd, Detroit, MI',
    policies: 8,
    totalPremium: 250000,
    lastContact: '2023-12-15',
    icon: Building2
  },
  {
    id: 'CLI-005',
    name: 'Mike Wilson',
    type: 'Individual',
    status: 'Active',
    email: 'mike.wilson@email.com',
    phone: '+1 (555) 567-8901',
    address: '654 Elm Court, Boston, MA',
    policies: 1,
    totalPremium: 4800,
    lastContact: '2024-01-22',
    icon: User
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800'
    case 'Inactive':
      return 'bg-red-100 text-red-800'
    case 'Prospect':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Business':
      return 'bg-blue-100 text-blue-800'
    case 'Individual':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function ClientsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
            <p className="text-muted-foreground">
              Manage your insurance clients and prospects
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Client
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                +156 this quarter
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,654</div>
              <p className="text-xs text-muted-foreground">
                93.2% of total
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Premiums</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$23.0M</div>
              <p className="text-xs text-muted-foreground">
                +8.3% from last year
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Premium</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$8,078</div>
              <p className="text-xs text-muted-foreground">
                Per client
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Client Management</CardTitle>
            <CardDescription>
              Search and filter clients by various criteria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search clients by name, email, or company..."
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Clients Table */}
            <div className="space-y-4">
              {clients.map((client) => {
                const Icon = client.icon
                return (
                  <div key={client.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{client.name}</h3>
                          <Badge className={getStatusColor(client.status)}>
                            {client.status}
                          </Badge>
                          <Badge className={getTypeColor(client.type)}>
                            {client.type}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {client.email}
                          </span>
                          <span className="flex items-center">
                            <Phone className="h-3 w-3 mr-1" />
                            {client.phone}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {client.address}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${client.totalPremium.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">
                        {client.policies} policies
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Last contact: {client.lastContact}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

