import Link from 'next/link'
import { ArrowRight, Shield, Car, Home, Heart, Briefcase, Plane, Zap, Calculator, Users, TrendingUp, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
                SecureGuard
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                  Insurance Platform
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Comprehensive insurance solutions designed to protect what matters most. 
                Get personalized coverage with 24/7 support and instant claims processing.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <Link href="/policies" className="group bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
                  <span className="flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/calculator" className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Premium
                  </span>
                </Link>
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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-green-600">+12%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">2.4M</h3>
              <p className="text-gray-600">Total Policies</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-semibold text-green-600">-5%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">18.2K</h3>
              <p className="text-gray-600">Active Claims</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <span className="text-sm font-semibold text-green-600">+2%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">98.5%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-semibold text-green-600">+18%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">$2.8B</h3>
              <p className="text-gray-600">Revenue Growth</p>
            </div>
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
            {/* Auto Insurance */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-2xl font-bold text-gray-800">From $89/month</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Auto Insurance
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive coverage for your vehicle</p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Collision Coverage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Liability Protection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Roadside Assistance</span>
                </li>
              </ul>
              
              <Link href="/auto" className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 inline-block text-center">
                Get Quote
              </Link>
            </div>

            {/* Home Insurance */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-8 h-8 text-indigo-600" />
                </div>
                <span className="text-2xl font-bold text-gray-800">From $45/month</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Home Insurance
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Protect your home and belongings</p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Property Damage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Personal Liability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Natural Disasters</span>
                </li>
              </ul>
              
              <Link href="/property" className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 inline-block text-center">
                Get Quote
              </Link>
            </div>

            {/* Life Insurance */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-cyan-600" />
                </div>
                <span className="text-2xl font-bold text-gray-800">From $25/month</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Life Insurance
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Secure your family's future</p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Term Life</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Whole Life</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Family Protection</span>
                </li>
              </ul>
              
              <Link href="/life" className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 inline-block text-center">
                Get Quote
              </Link>
            </div>

            {/* Business Insurance */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-sky-600" />
                </div>
                <span className="text-2xl font-bold text-gray-800">From $120/month</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Business Insurance
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive business protection</p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">General Liability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Professional Indemnity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Cyber Protection</span>
                </li>
              </ul>
              
              <Link href="/business" className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 inline-block text-center">
                Get Quote
              </Link>
            </div>

            {/* Travel Insurance */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Plane className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-2xl font-bold text-gray-800">From $15/trip</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Travel Insurance
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Travel with confidence worldwide</p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Trip Cancellation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Medical Coverage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Baggage Protection</span>
                </li>
              </ul>
              
              <Link href="/travel" className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 inline-block text-center">
                Get Quote
              </Link>
            </div>

            {/* Health Insurance */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <span className="text-2xl font-bold text-gray-800">From $180/month</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Health Insurance
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive health coverage</p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Medical Expenses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Prescription Drugs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 text-sm">Preventive Care</span>
                </li>
              </ul>
              
              <Link href="/health" className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 inline-block text-center">
                Get Quote
              </Link>
            </div>
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
            <Link href="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
              Get Free Quote
            </Link>
            <Link href="/calculator" className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Calculate Premium
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
