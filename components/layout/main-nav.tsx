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
  Activity
} from 'lucide-react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: BarChart3,
    description: 'Overview and key metrics'
  },
  {
    name: 'Planning',
    href: '/planning',
    icon: Target,
    description: 'Budget and forecast management'
  },
  {
    name: 'Entities',
    href: '/entities',
    icon: Building2,
    description: 'Legal entities and subsidiaries'
  },
  {
    name: 'Chart of Accounts',
    href: '/accounts',
    icon: Calculator,
    description: 'Account structure and hierarchy'
  },
  {
    name: 'Data Import',
    href: '/import',
    icon: Upload,
    description: 'Import GL and transaction data'
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: FileText,
    description: 'Financial reports and analysis'
  },
  {
    name: 'Scenarios',
    href: '/scenarios',
    icon: TrendingUp,
    description: 'What-if analysis and modeling'
  },
  {
    name: 'FX Rates',
    href: '/fx-rates',
    icon: DollarSign,
    description: 'Foreign exchange rate management'
  },
  {
    name: 'Drivers',
    href: '/drivers',
    icon: Activity,
    description: 'Business drivers and assumptions'
  },
  {
    name: 'Approvals',
    href: '/approvals',
    icon: Shield,
    description: 'Workflow and approval process'
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
