'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  BarChart3,
  Calculator,
  FileText,
  Settings,
  TrendingUp,
  Users,
  Building2,
  Upload,
  Download,
  PieChart,
  Target,
  Calendar,
  DollarSign,
  Shield,
  Activity,
  Car,
  Home,
  Heart,
  Briefcase,
  MessageSquare,
  ClipboardList
} from 'lucide-react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: BarChart3,
    description: 'Overview and key metrics'
  },
  {
    name: 'Policies',
    href: '/policies',
    icon: Shield,
    description: 'Policy management and tracking'
  },
  {
    name: 'Claims',
    href: '/claims',
    icon: FileText,
    description: 'Claims processing and management'
  },
  {
    name: 'Clients',
    href: '/clients',
    icon: Building2,
    description: 'Client and business management'
  },
  {
    name: 'Auto Insurance',
    href: '/auto',
    icon: Car,
    description: 'Automotive insurance products'
  },
  {
    name: 'Property Insurance',
    href: '/property',
    icon: Home,
    description: 'Property and casualty insurance'
  },
  {
    name: 'Health Insurance',
    href: '/health',
    icon: Heart,
    description: 'Health and medical insurance'
  },
  {
    name: 'Business Insurance',
    href: '/business',
    icon: Briefcase,
    description: 'Commercial and business insurance'
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: PieChart,
    description: 'Insurance reports and analytics'
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: MessageSquare,
    description: 'Communication and notifications'
  },
  {
    name: 'Applications',
    href: '/applications',
    icon: ClipboardList,
    description: 'Policy applications and quotes'
  },
  {
    name: 'Users',
    href: '/users',
    icon: Users,
    description: 'User management and permissions'
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
    description: 'System configuration'
  }
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-1">
      {navigation.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
