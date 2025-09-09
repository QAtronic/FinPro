'use client'

import { useState } from 'react'
import { FileText, Shield, CheckCircle, Star, Calculator, Phone, Mail, MapPin, Eye, Download, Edit } from 'lucide-react'

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState('my-policies')

  const policies = [
    {
      id: 1,
      type: 'Auto Insurance',
      policyNumber: 'AUTO-2024-001',
      status: 'Active',
      premium: '$89.00',
      nextPayment: '2024-02-15',
      coverage: '$500,000',
      icon: '🚗'
    },
    {
      id: 2,
      type: 'Home Insurance',
      policyNumber: 'HOME-2024-002',
      status: 'Active',
      premium: '$45.00',
      nextPayment: '2024-02-20',
      coverage: '$300,000',
      icon: '🏠'
    },
    {
      id: 3,
      type: 'Life Insurance',
      policyNumber: 'LIFE-2024-003',
      status: 'Pending',
      premium: '$25.00',
      nextPayment: '2024-02-25',
      coverage: '$250,000',
      icon: '❤️'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      action: 'Policy Renewal',
      policy: 'Auto Insurance',
      date: '2024-01-15',
      status: 'Completed'
    },
    {
      id: 2,
      action: 'Payment Received',
      policy: 'Home Insurance',
      date: '2024-01-10',
      status: 'Completed'
    },
    {
      id: 3,
      action: 'Claim Filed',
      policy: 'Auto Insurance',
      date: '2024-01-05',
      status: 'In Progress'
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
                📋 Policy Management
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                Insurance Policies
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Manage all your insurance policies in one place. View coverage details, make payments, and track claims.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('my-policies')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'my-policies'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              My Policies
            </button>
            <button
              onClick={() => setActiveTab('recent-activity')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'recent-activity'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Recent Activity
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'documents'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Documents
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {activeTab === 'my-policies' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Active Policies</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Manage and monitor all your insurance policies
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {policies.map((policy) => (
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
                        <span className="text-gray-600">Coverage:</span>
                        <span className="font-semibold text-gray-800">{policy.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Payment:</span>
                        <span className="font-semibold text-gray-800">{policy.nextPayment}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'recent-activity' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Activity</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Track your recent policy activities and updates
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Action</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Policy</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Date</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentActivity.map((activity) => (
                          <tr key={activity.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-800">{activity.action}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{activity.policy}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{activity.date}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                activity.status === 'Completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {activity.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Policy Documents</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Access and download your policy documents
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {policies.map((policy) => (
                    <div key={policy.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-2xl">{policy.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{policy.type}</h3>
                          <p className="text-sm text-gray-500">{policy.policyNumber}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span>Download Policy</span>
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>View Summary</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need Help with Your Policies?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help you with any questions
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Get New Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}