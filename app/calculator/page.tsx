'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calculator, Brain, TrendingUp, DollarSign, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

interface ServiceOption {
  id: string
  name: string
  description: string
  basePrice: number
  features: string[]
}

interface BusinessSize {
  id: string
  name: string
  multiplier: number
  description: string
}

const serviceOptions: ServiceOption[] = [
  {
    id: 'seo',
    name: 'SEO',
    description: 'Search Engine Optimization',
    basePrice: 2500,
    features: ['Technical audit', 'Content optimization', 'Backlink building', 'Position monitoring']
  },
  {
    id: 'ppc',
    name: 'PPC',
    description: 'Pay-Per-Click Advertising',
    basePrice: 1500,
    features: ['Campaign setup', 'Ad creation', 'Bid optimization', 'Analytics']
  },
  {
    id: 'email',
    name: 'Email Marketing',
    description: 'Email Marketing Campaigns',
    basePrice: 1200,
    features: ['Newsletter setup', 'List segmentation', 'A/B testing', 'Automation']
  },
  {
    id: 'automation',
    name: 'Marketing Automation',
    description: 'AI-Powered Automation',
    basePrice: 4000,
    features: ['AI chatbots', 'Personalization', 'Integrations', 'Analytics']
  },
  {
    id: 'cro',
    name: 'CRO',
    description: 'Conversion Rate Optimization',
    basePrice: 3000,
    features: ['A/B testing', 'UX audit', 'Behavior analysis', 'Form optimization']
  },
  {
    id: 'analytics',
    name: 'Analytics',
    description: 'Analytics & Reporting',
    basePrice: 2000,
    features: ['GA4 setup', 'Dashboards', 'Reports', 'Integrations']
  }
]

const businessSizes: BusinessSize[] = [
  {
    id: 'startup',
    name: 'Startup',
    multiplier: 0.7,
    description: 'Up to 10 employees'
  },
  {
    id: 'small',
    name: 'Small Business',
    multiplier: 1.0,
    description: '10-50 employees'
  },
  {
    id: 'medium',
    name: 'Medium Business',
    multiplier: 1.5,
    description: '50-200 employees'
  },
  {
    id: 'large',
    name: 'Enterprise',
    multiplier: 2.5,
    description: '200+ employees'
  }
]

export default function CalculatorPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBusinessSize, setSelectedBusinessSize] = useState<string>('')
  const [budget, setBudget] = useState<string>('')
  const [industry, setIndustry] = useState<string>('')
  const [showResults, setShowResults] = useState(false)

  const calculateTotal = () => {
    if (!selectedBusinessSize || selectedServices.length === 0) return 0

    const businessSize = businessSizes.find(bs => bs.id === selectedBusinessSize)
    if (!businessSize) return 0

    const baseTotal = selectedServices.reduce((total, serviceId) => {
      const service = serviceOptions.find(s => s.id === serviceId)
      return total + (service?.basePrice || 0)
    }, 0)

    return Math.round(baseTotal * businessSize.multiplier)
  }

  const getRecommendations = () => {
    const recommendations = []
    
    if (selectedServices.includes('seo') && !selectedServices.includes('ppc')) {
      recommendations.push('We recommend adding PPC for quick traffic generation')
    }
    
    if (selectedServices.includes('ppc') && !selectedServices.includes('analytics')) {
      recommendations.push('Add analytics to track advertising effectiveness')
    }
    
    if (selectedServices.includes('email') && !selectedServices.includes('automation')) {
      recommendations.push('Automation will help increase email campaign effectiveness')
    }
    
    if (selectedServices.length >= 3 && !selectedServices.includes('cro')) {
      recommendations.push('CRO will help maximize conversion from existing traffic')
    }

    return recommendations
  }

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const handleCalculate = () => {
    if (selectedServices.length > 0 && selectedBusinessSize) {
      setShowResults(true)
    }
  }

  const total = calculateTotal()
  const recommendations = getRecommendations()

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* Header */}
      <div className="bg-dark-800 shadow-sm border-b border-dark-700">
        <div className="container-max py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding">
        <div className="container-max text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI <span className="gradient-text">Cost Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a personalized cost estimate and strategic recommendations for your marketing services
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-dark-800">
        <div className="container-max max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Calculator Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Select Services</h2>
                <div className="space-y-4">
                  {serviceOptions.map((service) => (
                    <div
                      key={service.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedServices.includes(service.id)
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-dark-600 hover:border-dark-500 bg-dark-700'
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-white">{service.name}</h3>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary-400">
                            from ${service.basePrice.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">per month</div>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Business Size</h2>
                <div className="grid grid-cols-2 gap-4">
                  {businessSizes.map((size) => (
                    <div
                      key={size.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedBusinessSize === size.id
                          ? 'border-primary-500 bg-primary-500/10'
                          : 'border-dark-600 hover:border-dark-500 bg-dark-700'
                      }`}
                      onClick={() => setSelectedBusinessSize(size.id)}
                    >
                      <h3 className="font-semibold mb-1 text-white">{size.name}</h3>
                      <p className="text-sm text-gray-400">{size.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Additional Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Business Industry
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full p-3 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-dark-700 text-white"
                    >
                      <option value="">Select industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">SaaS</option>
                      <option value="b2b">B2B Services</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Marketing Budget (per month)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full p-3 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-dark-700 text-white"
                    >
                      <option value="">Select budget</option>
                      <option value="small">Up to $5,000</option>
                      <option value="medium">$5,000 - $20,000</option>
                      <option value="large">$20,000 - $50,000</option>
                      <option value="enterprise">More than $50,000</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                disabled={selectedServices.length === 0 || !selectedBusinessSize}
                className="w-full button-gradient disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sparkles className="w-5 h-5" />
                Calculate Cost
              </button>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {showResults ? (
                <>
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-8 rounded-2xl text-white">
                    <h2 className="text-2xl font-bold mb-4">Cost Estimate</h2>
                    <div className="text-4xl font-bold mb-2">
                      ${total.toLocaleString()}
                    </div>
                    <div className="text-lg opacity-90">per month</div>
                  </div>

                  <div className="bg-dark-700 p-6 rounded-2xl border border-dark-600">
                    <h3 className="text-xl font-bold mb-4 text-white">Selected Services:</h3>
                    <div className="space-y-3">
                      {selectedServices.map(serviceId => {
                        const service = serviceOptions.find(s => s.id === serviceId)
                        return (
                          <div key={serviceId} className="flex items-center justify-between p-3 bg-dark-600 rounded-lg">
                            <span className="font-medium text-white">{service?.name}</span>
                            <span className="text-primary-400 font-semibold">
                              from ${service?.basePrice.toLocaleString()}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {recommendations.length > 0 && (
                    <div className="bg-gradient-to-br from-accent-500/10 to-primary-500/10 p-6 rounded-2xl border border-accent-500/20">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                        <TrendingUp className="w-5 h-5 text-accent-400" />
                        AI Recommendations
                      </h3>
                      <ul className="space-y-2">
                        {recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20">
                    <h3 className="text-xl font-bold mb-4 text-green-400">What's Next?</h3>
                    <ul className="space-y-3 text-green-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Get detailed consultation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Develop personalized strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Start work within a week</span>
                      </li>
                    </ul>
                  </div>

                  <Link href="/contact" className="w-full button-gradient inline-flex items-center justify-center gap-2">
                    Get Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </>
              ) : (
                <div className="bg-gradient-to-br from-dark-700 to-dark-600 p-8 rounded-2xl border-2 border-dashed border-dark-500">
                  <div className="text-center">
                    <Calculator className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-400 mb-2">
                      Select Services
                    </h3>
                    <p className="text-gray-500">
                      Choose the services you need and business size to get a cost estimate
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Our Calculator is Special?
            </h2>
            <p className="text-xl opacity-90">
              We use AI for accurate calculations and personalized recommendations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="opacity-90">
                We analyze your business and recommend optimal strategies
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accurate Calculations</h3>
              <p className="opacity-90">
                We consider business size, industry, and market specifics
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">ROI-Focused</h3>
              <p className="opacity-90">
                We focus on maximum return on investment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
