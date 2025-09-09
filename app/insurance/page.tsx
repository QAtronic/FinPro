'use client'

import { useState } from 'react'
import { 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Star,
  Heart,
  Car,
  Home,
  Briefcase,
  Plane,
  Zap,
  PieChart,
  LineChart,
  Activity,
  FileText,
  Play
} from 'lucide-react'

export default function InsurancePlatform() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const insuranceTypes = [
    {
      id: 1,
      name: 'Auto Insurance',
      icon: Car,
      description: 'Comprehensive coverage for your vehicle',
      price: 'From $89/month',
      features: ['Collision Coverage', 'Liability Protection', 'Roadside Assistance'],
      color: 'blue'
    },
    {
      id: 2,
      name: 'Home Insurance',
      icon: Home,
      description: 'Protect your home and belongings',
      price: 'From $45/month',
      features: ['Property Damage', 'Personal Liability', 'Natural Disasters'],
      color: 'indigo'
    },
    {
      id: 3,
      name: 'Life Insurance',
      icon: Heart,
      description: 'Secure your family\'s future',
      price: 'From $25/month',
      features: ['Term Life', 'Whole Life', 'Family Protection'],
      color: 'cyan'
    },
    {
      id: 4,
      name: 'Business Insurance',
      icon: Briefcase,
      description: 'Comprehensive business protection',
      price: 'From $120/month',
      features: ['General Liability', 'Professional Indemnity', 'Cyber Protection'],
      color: 'sky'
    },
    {
      id: 5,
      name: 'Travel Insurance',
      icon: Plane,
      description: 'Travel with confidence worldwide',
      price: 'From $15/trip',
      features: ['Trip Cancellation', 'Medical Coverage', 'Baggage Protection'],
      color: 'blue'
    },
    {
      id: 6,
      name: 'Health Insurance',
      icon: Zap,
      description: 'Comprehensive health coverage',
      price: 'From $180/month',
      features: ['Medical Expenses', 'Prescription Drugs', 'Preventive Care'],
      color: 'indigo'
    }
  ]

  const stats = [
    { label: 'Total Policies', value: '2.4M', change: '+12%', icon: FileText, color: 'blue' },
    { label: 'Active Claims', value: '18.2K', change: '-5%', icon: Activity, color: 'green' },
    { label: 'Customer Satisfaction', value: '98.5%', change: '+2%', icon: Star, color: 'yellow' },
    { label: 'Revenue Growth', value: '$2.8B', change: '+18%', icon: TrendingUp, color: 'purple' }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Business Owner',
      text: 'SecureGuard has been protecting my business for over 5 years. Their customer service is exceptional and claims are processed quickly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Family Man',
      text: 'The peace of mind that comes with comprehensive coverage is priceless. SecureGuard makes insurance simple and affordable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Homeowner',
      text: 'When my home was damaged in a storm, SecureGuard was there immediately. The claims process was smooth and stress-free.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">SecureGuard</h1>
                <p className="text-sm text-gray-600">Insurance Protection</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex space-x-8">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`transition-colors ${activeTab === 'dashboard' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('policies')}
                className={`transition-colors ${activeTab === 'policies' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Policies
              </button>
              <button 
                onClick={() => setActiveTab('claims')}
                className={`transition-colors ${activeTab === 'claims' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Claims
              </button>
              <button 
                onClick={() => setActiveTab('analytics')}
                className={`transition-colors ${activeTab === 'analytics' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Analytics
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="mb-6">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm tracking-widest uppercase font-medium">
                  🛡️ Trusted Protection
                </span>
              </div>
              
              <h1 className="text-6xl font-bold mb-8 leading-tight">
                Secure Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                  Future Today
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Comprehensive insurance solutions designed to protect what matters most. 
                Get personalized coverage with 24/7 support and instant claims processing.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <button className="group bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
                  <span className="flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-blue-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Instant Claims</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">A+ Rating</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white text-xl font-semibold">Policy Overview</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80 text-sm">Auto Insurance</span>
                      <span className="text-green-400 text-sm font-semibold">Active</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-white text-lg font-bold mt-2">$89/month</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80 text-sm">Home Insurance</span>
                      <span className="text-green-400 text-sm font-semibold">Active</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-400 h-2 rounded-full w-2/3"></div>
                    </div>
                    <p className="text-white text-lg font-bold mt-2">$45/month</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80 text-sm">Life Insurance</span>
                      <span className="text-yellow-400 text-sm font-semibold">Pending</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-1/2"></div>
                    </div>
                    <p className="text-white text-lg font-bold mt-2">$25/month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted by Millions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join over 2.4 million customers who trust SecureGuard for their insurance needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Coverage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of insurance products designed to protect every aspect of your life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance) => (
              <div key={insurance.id} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-${insurance.color}-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <insurance.icon className={`w-8 h-8 text-${insurance.color}-600`} />
                  </div>
                  <span className="text-2xl font-bold text-gray-800">{insurance.price}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {insurance.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{insurance.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {insurance.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Advanced Analytics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-time insights and comprehensive reporting for better decision making
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Chart 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Policy Distribution</h3>
                <PieChart className="w-6 h-6 text-blue-600" />
              </div>
              <div className="h-64 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full border-8 border-blue-200"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-blue-600 border-r-transparent transform -rotate-90" style={{clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)'}}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-indigo-600 border-r-transparent border-b-transparent transform -rotate-90" style={{clipPath: 'polygon(50% 50%, 100% 50%, 100% 0%, 50% 0%)'}}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-cyan-600 border-r-transparent border-b-transparent border-l-transparent transform -rotate-90" style={{clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-800">2.4M</p>
                      <p className="text-sm text-gray-600">Total Policies</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Auto (45%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Home (30%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Life (25%)</span>
                </div>
              </div>
            </div>
            
            {/* Chart 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Claims Trend</h3>
                <LineChart className="w-6 h-6 text-blue-600" />
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[65, 72, 58, 81, 69, 75, 88, 92, 85, 78, 82, 95].map((height, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t w-8 transition-all duration-500 hover:from-blue-700 hover:to-indigo-500"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">{index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Monthly Claims Volume (in thousands)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Protected?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a personalized quote in minutes and start protecting what matters most to you
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Contact Agent
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SecureGuard</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Comprehensive insurance solutions for individuals and businesses. 
                Protecting what matters most since 1985.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Insurance Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Auto Insurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Home Insurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Life Insurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Business Insurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Travel Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">File a Claim</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Policy Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">24/7 Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+1 (800) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">support@secureguard.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">123 Insurance Ave, City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SecureGuard Insurance. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
