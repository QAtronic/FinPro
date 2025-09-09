'use client'

import { useState } from 'react'
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
  PieChart,
  Shield,
  Car,
  Home,
  Heart,
  Briefcase,
  Plane,
  Zap
} from 'lucide-react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    {
      title: 'Total Policies',
      value: '12',
      change: '+2.5%',
      changeType: 'positive',
      icon: Shield,
      color: 'blue'
    },
    {
      title: 'Active Claims',
      value: '3',
      change: '-1.2%',
      changeType: 'negative',
      icon: Activity,
      color: 'green'
    },
    {
      title: 'Monthly Premium',
      value: '$1,247',
      change: '+5.1%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'Customer Satisfaction',
      value: '98.5%',
      change: '+0.8%',
      changeType: 'positive',
    icon: Users,
      color: 'orange'
    }
  ]

  const recentPolicies = [
    {
      id: 1,
      type: 'Auto Insurance',
      policyNumber: 'AUTO-2024-001',
      status: 'Active',
      premium: '$89.00',
      nextPayment: '2024-02-15',
      icon: '🚗'
    },
    {
      id: 2,
      type: 'Home Insurance',
      policyNumber: 'HOME-2024-002',
      status: 'Active',
      premium: '$45.00',
      nextPayment: '2024-02-20',
      icon: '🏠'
    },
    {
      id: 3,
      type: 'Life Insurance',
      policyNumber: 'LIFE-2024-003',
      status: 'Pending',
      premium: '$25.00',
      nextPayment: '2024-02-25',
      icon: '❤️'
    }
  ]

  const recentClaims = [
    {
      id: 1,
      type: 'Auto Claim',
      amount: '$2,500',
      status: 'Approved',
      date: '2024-01-15',
      description: 'Collision damage repair'
    },
    {
      id: 2,
      type: 'Home Claim',
      amount: '$1,200',
      status: 'In Progress',
      date: '2024-01-10',
      description: 'Water damage restoration'
    },
    {
      id: 3,
      type: 'Auto Claim',
      amount: '$850',
      status: 'Pending',
      date: '2024-01-05',
      description: 'Windshield replacement'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm tracking-widest uppercase font-medium">
                📊 Dashboard
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Welcome to Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                Insurance Dashboard
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Manage your policies, track claims, and monitor your insurance portfolio all in one place.
            </p>
                  </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('policies')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'policies'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Policies
            </button>
            <button
              onClick={() => setActiveTab('claims')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'claims'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Claims
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {activeTab === 'overview' && (
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                      </div>
                      <span className={`text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.title}</p>
                  </div>
                ))}
              </div>

              {/* Charts Placeholder */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Policy Distribution</h3>
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Chart visualization coming soon</p>
                    </div>
                  </div>
        </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Claims Trend</h3>
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Chart visualization coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policies' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Policies</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Manage and monitor all your insurance policies
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPolicies.map((policy) => (
                  <div key={policy.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{policy.icon}</span>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{policy.type}</h3>
                          <p className="text-sm text-gray-500">{policy.policyNumber}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        policy.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {policy.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Premium:</span>
                        <span className="font-semibold text-gray-800">{policy.premium}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Payment:</span>
                        <span className="font-semibold text-gray-800">{policy.nextPayment}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                </div>
                ))}
              </div>
                </div>
          )}

          {activeTab === 'claims' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Claims</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Track your insurance claims and their status
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Claim Type</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Amount</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Status</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentClaims.map((claim) => (
                          <tr key={claim.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div>
                                <div className="text-sm font-medium text-gray-800">{claim.type}</div>
                                <div className="text-sm text-gray-500">{claim.description}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-gray-800">{claim.amount}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                claim.status === 'Approved' 
                                  ? 'bg-green-100 text-green-800' 
                                  : claim.status === 'In Progress'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {claim.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">{claim.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      </div>
  )
}