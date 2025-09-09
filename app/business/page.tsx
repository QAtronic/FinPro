'use client'

import { useState } from 'react'
import { Briefcase, Shield, CheckCircle, Star, Calculator, Phone, Mail, MapPin, Users, Building, Laptop } from 'lucide-react'

export default function BusinessInsurancePage() {
  const [selectedPlan, setSelectedPlan] = useState('standard')

  const plans = [
    {
      id: 'basic',
      name: 'Basic Business Protection',
      price: '$120',
      period: '/month',
      features: [
        'General Liability',
        'Property Insurance',
        'Business Interruption',
        'Professional Liability'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard Business Protection',
      price: '$200',
      period: '/month',
      features: [
        'Everything in Basic',
        'Cyber Liability',
        'Employment Practices',
        'Directors & Officers',
        'Workers Compensation'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Business Protection',
      price: '$350',
      period: '/month',
      features: [
        'Everything in Standard',
        'Commercial Auto',
        'Umbrella Coverage',
        'Key Person Insurance',
        'Business Succession'
      ],
      popular: false
    }
  ]

  const businessTypes = [
    {
      icon: Building,
      title: 'Small Business',
      description: 'Comprehensive coverage for small businesses and startups',
      coverage: 'Up to $1M'
    },
    {
      icon: Users,
      title: 'Medium Business',
      description: 'Advanced protection for growing companies',
      coverage: 'Up to $5M'
    },
    {
      icon: Laptop,
      title: 'Tech Companies',
      description: 'Specialized coverage for technology and software companies',
      coverage: 'Up to $10M'
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Tailored protection for professional service providers',
      coverage: 'Up to $2M'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm tracking-widest uppercase font-medium">
                💼 Business Insurance
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Protect Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-200">
                Business & Assets
              </span>
            </h1>
            
            <p className="text-xl text-sky-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Comprehensive business insurance coverage to protect your company, employees, and assets. 
              Get tailored protection for your specific business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-sky-600 px-10 py-4 rounded-full font-semibold hover:bg-sky-50 transition-all transform hover:scale-105 shadow-2xl">
                <span className="flex items-center justify-center">
                  Get Quote Now
                  <Calculator className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-all backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (800) 123-4567
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Coverage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect business insurance plan that fits your company's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-sky-500 transform scale-105' 
                    : 'border-gray-100 hover:border-sky-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white hover:from-sky-700 hover:to-blue-800'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Business Types We Cover</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized coverage for different types of businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                <div className="text-sm font-semibold text-sky-600">{type.coverage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose SecureGuard?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive protection with exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Protection</h3>
              <p className="text-gray-600">Round-the-clock coverage and support whenever you need it</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Claims</h3>
              <p className="text-gray-600">Quick and efficient claims processing with minimal hassle</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">A+ Rating</h3>
              <p className="text-gray-600">Top-rated insurance company with excellent customer satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable Rates</h3>
              <p className="text-gray-600">Competitive pricing with flexible payment options</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Protect Your Business?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Get your personalized business insurance quote in just a few minutes
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-sky-600 px-10 py-4 rounded-full font-semibold hover:bg-sky-50 transition-all transform hover:scale-105 shadow-2xl">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-all">
              Contact Agent
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}