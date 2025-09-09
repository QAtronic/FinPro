'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Users, DollarSign, Target, ArrowRight, Play, Pause } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  industry: string
  duration: string
  before: {
    traffic: number
    conversion: number
    revenue: number
    leads: number
  }
  after: {
    traffic: number
    conversion: number
    revenue: number
    leads: number
  }
  services: string[]
  description: string
  challenges: string[]
  solutions: string[]
  results: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-1',
    title: 'E-commerce Platform',
    industry: 'E-commerce',
    duration: '6 months',
    before: {
      traffic: 5000,
      conversion: 1.2,
      revenue: 120000,
      leads: 60
    },
    after: {
      traffic: 25000,
      conversion: 3.8,
      revenue: 950000,
      leads: 950
    },
    services: ['SEO', 'PPC', 'CRO', 'Email Marketing'],
    description: 'Comprehensive promotion of an electronics online store with focus on increasing conversion and average order value.',
    challenges: [
      'Low conversion rate (1.2%)',
      'High customer acquisition cost',
      'Poor search engine visibility',
      'No email marketing strategy'
    ],
    solutions: [
      'Technical and content SEO optimization',
      'Retargeting campaign setup',
      'A/B testing of landing pages',
      'Email automation implementation'
    ],
    results: [
      '400% increase in organic traffic',
      '3.2x conversion rate improvement',
      '692% revenue growth',
      '450% ROI in 6 months'
    ]
  },
  {
    id: 'saas-1',
    title: 'SaaS Platform',
    industry: 'SaaS',
    duration: '8 months',
    before: {
      traffic: 8000,
      conversion: 2.1,
      revenue: 168000,
      leads: 168
    },
    after: {
      traffic: 45000,
      conversion: 5.2,
      revenue: 2340000,
      leads: 2340
    },
    services: ['Marketing Automation', 'AI', 'Analytics', 'CRO'],
    description: 'Implementation of AI automation and personalization for a project management SaaS platform.',
    challenges: [
      'High customer churn rate',
      'Long sales cycle',
      'Low personalization',
      'Lack of data-driven approaches'
    ],
    solutions: [
      'AI chatbot implementation',
      'Content personalization',
      'Sales funnel automation',
      'Analytics dashboard setup'
    ],
    results: [
      '463% traffic increase',
      '148% conversion improvement',
      '1293% revenue growth',
      'Reduced churn by 60%'
    ]
  },
  {
    id: 'b2b-1',
    title: 'B2B Services Company',
    industry: 'B2B Services',
    duration: '12 months',
    before: {
      traffic: 3000,
      conversion: 0.8,
      revenue: 24000,
      leads: 24
    },
    after: {
      traffic: 18000,
      conversion: 2.5,
      revenue: 450000,
      leads: 450
    },
    services: ['SEO', 'PPC', 'Content Marketing', 'Analytics'],
    description: 'Lead generation and brand awareness campaign for a B2B consulting company.',
    challenges: [
      'Very low conversion rate (0.8%)',
      'Limited brand awareness',
      'Poor content strategy',
      'No lead nurturing system'
    ],
    solutions: [
      'Comprehensive SEO strategy',
      'Targeted PPC campaigns',
      'Content marketing development',
      'Lead nurturing automation'
    ],
    results: [
      '500% traffic growth',
      '213% conversion improvement',
      '1775% revenue increase',
      '1875% more qualified leads'
    ]
  }
]

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(caseStudies[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePlayAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 3000)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`
    }
    return num.toString()
  }

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Success <span className="gradient-text">Cases</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from our clients. See how we've helped businesses grow with data-driven marketing strategies.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-dark-800">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Case Selection */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Select Case Study</h2>
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedCase.id === caseStudy.id
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-dark-600 hover:border-dark-500 bg-dark-700'
                  }`}
                  onClick={() => setSelectedCase(caseStudy)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg text-white">{caseStudy.title}</h3>
                    <span className="text-sm text-gray-400">{caseStudy.industry}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{caseStudy.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Case Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Info */}
              <div className="bg-dark-700 p-6 rounded-2xl border border-dark-600">
                <h2 className="text-2xl font-bold mb-4 text-white">{selectedCase.title}</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <span className="text-gray-400 text-sm">Industry</span>
                    <p className="text-white font-semibold">{selectedCase.industry}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Duration</span>
                    <p className="text-white font-semibold">{selectedCase.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Services Used</span>
                    <p className="text-white font-semibold">{selectedCase.services.length}</p>
                  </div>
                </div>
                <p className="text-gray-300">{selectedCase.description}</p>
              </div>

              {/* Interactive Results */}
              <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 p-6 rounded-2xl border border-primary-500/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Interactive Results</h3>
                  <button
                    onClick={handlePlayAnimation}
                    disabled={isAnimating}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isAnimating ? 'Playing...' : 'Play Animation'}
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h4 className="text-sm text-gray-400 mb-1">Traffic</h4>
                    <div className="text-2xl font-bold text-white">
                      {isAnimating ? (
                        <span className="animate-pulse">
                          {Math.round(selectedCase.before.traffic + (selectedCase.after.traffic - selectedCase.before.traffic) * 0.8)}
                        </span>
                      ) : (
                        selectedCase.before.traffic.toLocaleString()
                      )}
                    </div>
                    <div className="text-sm text-gray-400">→ {selectedCase.after.traffic.toLocaleString()}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-sm text-gray-400 mb-1">Conversion</h4>
                    <div className="text-2xl font-bold text-white">
                      {isAnimating ? (
                        <span className="animate-pulse">
                          {(selectedCase.before.conversion + (selectedCase.after.conversion - selectedCase.before.conversion) * 0.8).toFixed(1)}%
                        </span>
                      ) : (
                        `${selectedCase.before.conversion}%`
                      )}
                    </div>
                    <div className="text-sm text-gray-400">→ {selectedCase.after.conversion}%</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <h4 className="text-sm text-gray-400 mb-1">Revenue</h4>
                    <div className="text-2xl font-bold text-white">
                      {isAnimating ? (
                        <span className="animate-pulse">
                          {formatNumber(Math.round(selectedCase.before.revenue + (selectedCase.after.revenue - selectedCase.before.revenue) * 0.8))}
                        </span>
                      ) : (
                        formatNumber(selectedCase.before.revenue)
                      )}
                    </div>
                    <div className="text-sm text-gray-400">→ {formatNumber(selectedCase.after.revenue)}</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-sm text-gray-400 mb-1">Leads</h4>
                    <div className="text-2xl font-bold text-white">
                      {isAnimating ? (
                        <span className="animate-pulse">
                          {Math.round(selectedCase.before.leads + (selectedCase.after.leads - selectedCase.before.leads) * 0.8)}
                        </span>
                      ) : (
                        selectedCase.before.leads
                      )}
                    </div>
                    <div className="text-sm text-gray-400">→ {selectedCase.after.leads}</div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark-700 p-6 rounded-2xl border border-dark-600">
                  <h3 className="text-xl font-bold mb-4 text-white">Challenges</h3>
                  <ul className="space-y-2">
                    {selectedCase.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-dark-700 p-6 rounded-2xl border border-dark-600">
                  <h3 className="text-xl font-bold mb-4 text-white">Solutions</h3>
                  <ul className="space-y-2">
                    {selectedCase.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-bold mb-4 text-green-400">Key Results</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCase.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-2 text-green-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link href="/contact" className="button-gradient inline-flex items-center gap-2">
                  Start Your Success Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Success Metrics
            </h2>
            <p className="text-xl opacity-90">
              Proven results across different industries and business sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">450%</div>
              <div className="text-lg opacity-90">Average ROI</div>
            </div>
            
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-lg opacity-90">Revenue Generated</div>
            </div>
            
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
