'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, Zap, AlertTriangle, CheckCircle, Clock, TrendingUp, BarChart3, Eye, Smartphone, Globe, Download } from 'lucide-react'

interface AuditResult {
  score: number
  issues: {
    critical: number
    warning: number
    info: number
  }
  recommendations: string[]
  metrics: {
    speed: number
    seo: number
    mobile: number
    accessibility: number
  }
}

export default function AuditPage() {
  const [url, setUrl] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null)
  const [step, setStep] = useState(1)

  const handleScan = async () => {
    if (!url) return
    
    setIsScanning(true)
    setStep(2)
    
    // Simulate scanning
    setTimeout(() => {
      setStep(3)
      setTimeout(() => {
        setStep(4)
        setAuditResult({
          score: 72,
          issues: {
            critical: 3,
            warning: 8,
            info: 12
          },
          recommendations: [
            'Optimize image loading speed',
            'Add meta tags for better SEO',
            'Improve mobile version of the site',
            'Configure SSL certificate',
            'Optimize heading structure'
          ],
          metrics: {
            speed: 65,
            seo: 78,
            mobile: 82,
            accessibility: 71
          }
        })
        setIsScanning(false)
      }, 2000)
    }, 3000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500/20'
    if (score >= 70) return 'bg-yellow-500/20'
    return 'bg-red-500/20'
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
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Website <span className="gradient-text">Marketing Scanner</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a free express audit of your website: analyze speed, SEO errors, and UX issues
          </p>
        </div>
      </section>

      {/* Scanner */}
      <section className="section-padding bg-dark-800">
        <div className="container-max max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Scanner Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Website Analysis</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="w-full p-4 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-dark-700 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <button
                    onClick={handleScan}
                    disabled={!url || isScanning}
                    className="w-full button-gradient disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Search className="w-5 h-5" />
                    {isScanning ? 'Scanning...' : 'Start Free Audit'}
                  </button>
                </div>
              </div>

              {isScanning && (
                <div className="bg-dark-700 p-6 rounded-2xl border border-dark-600">
                  <h3 className="text-xl font-bold mb-4 text-white">Scanning Progress</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= 1 ? 'bg-primary-500' : 'bg-dark-600'
                      }`}>
                        {step > 1 ? <CheckCircle className="w-5 h-5 text-white" /> : <Clock className="w-5 h-5 text-gray-400" />}
                      </div>
                      <span className={step >= 1 ? 'text-white' : 'text-gray-400'}>
                        Connecting to website
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= 2 ? 'bg-primary-500' : 'bg-dark-600'
                      }`}>
                        {step > 2 ? <CheckCircle className="w-5 h-5 text-white" /> : <Clock className="w-5 h-5 text-gray-400" />}
                      </div>
                      <span className={step >= 2 ? 'text-white' : 'text-gray-400'}>
                        Analyzing page structure
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= 3 ? 'bg-primary-500' : 'bg-dark-600'
                      }`}>
                        {step > 3 ? <CheckCircle className="w-5 h-5 text-white" /> : <Clock className="w-5 h-5 text-gray-400" />}
                      </div>
                      <span className={step >= 3 ? 'text-white' : 'text-gray-400'}>
                        Checking performance metrics
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= 4 ? 'bg-primary-500' : 'bg-dark-600'
                      }`}>
                        {step > 4 ? <CheckCircle className="w-5 h-5 text-white" /> : <Clock className="w-5 h-5 text-gray-400" />}
                      </div>
                      <span className={step >= 4 ? 'text-white' : 'text-gray-400'}>
                        Generating report
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Results */}
            <div className="space-y-6">
              {auditResult ? (
                <>
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-8 rounded-2xl text-white">
                    <h2 className="text-2xl font-bold mb-4">Overall Score</h2>
                    <div className="text-6xl font-bold mb-2">
                      {auditResult.score}
                    </div>
                    <div className="text-lg opacity-90">out of 100</div>
                  </div>

                  <div className="bg-dark-700 p-6 rounded-2xl border border-dark-600">
                    <h3 className="text-xl font-bold mb-4 text-white">Performance Metrics</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-yellow-400" />
                          <span className="text-gray-300">Speed</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full ${getScoreBg(auditResult.metrics.speed)}`}>
                          <span className={`font-semibold ${getScoreColor(auditResult.metrics.speed)}`}>
                            {auditResult.metrics.speed}/100
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Eye className="w-5 h-5 text-blue-400" />
                          <span className="text-gray-300">SEO</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full ${getScoreBg(auditResult.metrics.seo)}`}>
                          <span className={`font-semibold ${getScoreColor(auditResult.metrics.seo)}`}>
                            {auditResult.metrics.seo}/100
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Smartphone className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Mobile</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full ${getScoreBg(auditResult.metrics.mobile)}`}>
                          <span className={`font-semibold ${getScoreColor(auditResult.metrics.mobile)}`}>
                            {auditResult.metrics.mobile}/100
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-purple-400" />
                          <span className="text-gray-300">Accessibility</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full ${getScoreBg(auditResult.metrics.accessibility)}`}>
                          <span className={`font-semibold ${getScoreColor(auditResult.metrics.accessibility)}`}>
                            {auditResult.metrics.accessibility}/100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-700 p-6 rounded-2xl border border-dark-600">
                    <h3 className="text-xl font-bold mb-4 text-white">Issues Found</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                          <span className="text-red-300">Critical</span>
                        </div>
                        <span className="text-red-400 font-semibold">{auditResult.issues.critical}</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                          <span className="text-yellow-300">Warning</span>
                        </div>
                        <span className="text-yellow-400 font-semibold">{auditResult.issues.warning}</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-blue-400" />
                          <span className="text-blue-300">Info</span>
                        </div>
                        <span className="text-blue-400 font-semibold">{auditResult.issues.info}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-accent-500/10 to-primary-500/10 p-6 rounded-2xl border border-accent-500/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                      <TrendingUp className="w-5 h-5 text-accent-400" />
                      Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {auditResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="w-full button-gradient inline-flex items-center justify-center gap-2">
                    Get Detailed Analysis
                    <Download className="w-5 h-5" />
                  </Link>
                </>
              ) : (
                <div className="bg-gradient-to-br from-dark-700 to-dark-600 p-8 rounded-2xl border-2 border-dashed border-dark-500">
                  <div className="text-center">
                    <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-400 mb-2">
                      Enter Website URL
                    </h3>
                    <p className="text-gray-500">
                      Enter your website URL to get a free marketing audit
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
              What We Analyze
            </h2>
            <p className="text-xl opacity-90">
              Comprehensive website analysis for better marketing results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Speed Analysis</h3>
              <p className="opacity-90">
                Check loading speed and performance optimization opportunities
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Audit</h3>
              <p className="opacity-90">
                Identify SEO issues and optimization opportunities
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Experience</h3>
              <p className="opacity-90">
                Analyze mobile responsiveness and user experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
