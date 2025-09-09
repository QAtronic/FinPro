'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Filter,
  Calendar,
  Mail,
  Bell,
  Send,
  User,
  Building2,
  Clock,
  CheckCircle
} from 'lucide-react'

const messages = [
  {
    id: 'MSG-001',
    type: 'Policy Renewal',
    recipient: 'John Smith',
    subject: 'Auto Insurance Renewal Reminder',
    status: 'Sent',
    priority: 'High',
    sentDate: '2024-01-20',
    readDate: '2024-01-21'
  },
  {
    id: 'MSG-002',
    type: 'Claim Update',
    recipient: 'Sarah Johnson',
    subject: 'Property Claim #8923 Status Update',
    status: 'Delivered',
    priority: 'Medium',
    sentDate: '2024-01-19',
    readDate: null
  },
  {
    id: 'MSG-003',
    type: 'New Policy',
    recipient: 'TechCorp Solutions',
    subject: 'Business Insurance Policy Confirmation',
    status: 'Sent',
    priority: 'High',
    sentDate: '2024-01-18',
    readDate: '2024-01-19'
  },
  {
    id: 'MSG-004',
    type: 'General',
    recipient: 'Mike Wilson',
    subject: 'Health Insurance Plan Options',
    status: 'Draft',
    priority: 'Low',
    sentDate: null,
    readDate: null
  },
  {
    id: 'MSG-005',
    type: 'Payment Reminder',
    recipient: 'ABC Manufacturing',
    subject: 'Premium Payment Due - Policy #BUS-002',
    status: 'Scheduled',
    priority: 'High',
    sentDate: '2024-01-25',
    readDate: null
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Sent':
      return 'bg-green-100 text-green-800'
    case 'Delivered':
      return 'bg-blue-100 text-blue-800'
    case 'Draft':
      return 'bg-gray-100 text-gray-800'
    case 'Scheduled':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-800'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800'
    case 'Low':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Policy Renewal':
      return Bell
    case 'Claim Update':
      return MessageSquare
    case 'New Policy':
      return CheckCircle
    case 'Payment Reminder':
      return Mail
    default:
      return MessageSquare
  }
}

export default function MessagesPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
            <p className="text-muted-foreground">
              Manage communications and notifications
            </p>
            </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            New Message
          </Button>
            </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,847</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sent Today</CardTitle>
              <Send className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                +5 from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Read Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.3%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Scheduled messages
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Messages Table */}
        <Card>
          <CardHeader>
            <CardTitle>Message Management</CardTitle>
            <CardDescription>
              View and manage all communications with clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search messages by recipient, subject, or type..."
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
              {messages.map((message) => {
                const TypeIcon = getTypeIcon(message.type)
                return (
                  <div key={message.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <TypeIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{message.subject}</h3>
                          <Badge className={getStatusColor(message.status)}>
                            {message.status}
                          </Badge>
                          <Badge className={getPriorityColor(message.priority)}>
                            {message.priority}
                          </Badge>
                          </div>
                        <p className="text-sm text-muted-foreground">{message.recipient}</p>
                        <p className="text-xs text-muted-foreground">{message.type}</p>
                          </div>
                        </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        {message.sentDate ? `Sent: ${message.sentDate}` : 'Draft'}
                      </p>
                      {message.readDate && (
                        <p className="text-xs text-muted-foreground">
                          Read: {message.readDate}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        ID: {message.id}
                          </p>
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
              <CardTitle className="text-lg">Send Bulk Message</CardTitle>
              <CardDescription>
                Send messages to multiple clients at once
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" />
                Create Bulk Message
                      </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Message Templates</CardTitle>
              <CardDescription>
                Use pre-defined message templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                <MessageSquare className="mr-2 h-4 w-4" />
                View Templates
                        </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Notification Settings</CardTitle>
              <CardDescription>
                Configure message preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                <Bell className="mr-2 h-4 w-4" />
                Manage Settings
                      </Button>
            </CardContent>
          </Card>
                    </div>
                  </div>
    </DashboardLayout>
  )
}
