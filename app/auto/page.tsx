'use client'

import { useState } from 'react'
import { Car, Shield, CheckCircle, Star, Calculator, Phone, Mail, MapPin } from 'lucide-react'

export default function AutoInsurancePage() {
  const [selectedPlan, setSelectedPlan] = useState('basic')

  const plans = [
    {
      id: 'basic',
      name: 'Basic Coverage',
      price: '$89',
      period: '/month',
      features: [
        'Liability Coverage',
        'Property Damage',
        'Bodily Injury Protection',
        '24/7 Roadside Assistance'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard Coverage',
      price: '$129',
      period: '/month',
      features: [
        'Everything in Basic',
        'Collision Coverage',
        'Comprehensive Coverage',
        'Uninsured Motorist',
        'Rental Car Coverage'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Coverage',
      price: '$189',
      period: '/month',
      features: [
        'Everything in Standard',
        'Gap Insurance',
        'New Car Replacement',
        'Accident Forgiveness',
        'Personal Injury Protection'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Great coverage and excellent customer service. Claims were processed quickly and efficiently.',
      location: 'New York, NY'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Affordable rates and comprehensive coverage. Highly recommend SecureGuard for auto insurance.',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Emily Davis',
      rating: 5,
      text: 'The claims process was smooth and stress-free. Great value for money.',
      location: 'Chicago, IL'
    }
  ]

    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm tracking-widest uppercase font-medium">
                🚗 Auto Insurance
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Protect Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                Vehicle & Family
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Comprehensive auto insurance coverage designed to protect you, your vehicle, and your loved ones. 
              Get personalized quotes in minutes with our easy online process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
                <span className="flex items-center justify-center">
                  Get Quote Now
                  <Calculator className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all backdrop-blur-sm">
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
              Select the perfect auto insurance plan that fits your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-blue-500 transform scale-105' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-blue-600" />
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
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
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

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose SecureGuard?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive protection with exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
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
            Get your personalized auto insurance quote in just a few minutes
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
      </div>
  )
}