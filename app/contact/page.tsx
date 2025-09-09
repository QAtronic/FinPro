'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your project? Get a free consultation and personalized marketing strategy
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-dark-800">
        <div className="container-max max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Send Request</h2>
              
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Request Sent!</h3>
                  <p className="text-green-300 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="button-gradient"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-dark-700 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-dark-700 text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-dark-700 text-white"
                        placeholder="Company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-dark-700 text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-dark-700 text-white"
                    >
                      <option value="">Select service</option>
                      <option value="seo">SEO & PPC</option>
                      <option value="automation">Marketing Automation</option>
                      <option value="cro">Conversion Optimization</option>
                      <option value="analytics">Analytics & Reporting</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-dark-700 text-white resize-none"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full button-gradient disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">hello@vertexlab.com</p>
                      <p className="text-gray-300">support@vertexlab.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Office</h3>
                      <p className="text-gray-300">123 Marketing Street</p>
                      <p className="text-gray-300">New York, NY 10001</p>
                      <p className="text-gray-300">United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Working Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 p-6 rounded-2xl border border-primary-500/20">
                <h3 className="text-xl font-bold mb-4 text-white">Why Choose VertexLab?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>10+ years of experience in digital marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>Data-driven approach with proven results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>AI-powered tools and automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>Transparent reporting and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl opacity-90">
              Get answers to common questions about our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">How long does it take to see results?</h3>
              <p className="text-white/90">
                SEO results typically appear within 3-6 months, while PPC campaigns can show immediate results. We provide detailed timelines during consultation.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">What's included in the initial consultation?</h3>
              <p className="text-white/90">
                Free 30-minute consultation includes website analysis, competitor research, and personalized strategy recommendations.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">Do you work with small businesses?</h3>
              <p className="text-white/90">
                Yes! We have flexible packages designed for businesses of all sizes, from startups to enterprise companies.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">How do you measure success?</h3>
              <p className="text-white/90">
                We track KPIs like traffic growth, conversion rates, ROI, and provide monthly reports with actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-dark-800">
        <div className="container-max text-center">
          <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 p-8 rounded-2xl border border-primary-500/20">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Get a free consultation and personalized marketing strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator" className="button-gradient">
                Calculate Cost
              </Link>
              <Link href="/audit" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Free Website Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
