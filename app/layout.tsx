import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SecureGuard Insurance - Comprehensive Protection Solutions',
  description: 'Professional insurance platform offering comprehensive coverage for auto, home, life, business, travel, and health insurance. Get personalized quotes and 24/7 support.',
  keywords: 'insurance, auto insurance, home insurance, life insurance, business insurance, travel insurance, health insurance, coverage, protection',
  authors: [{ name: 'SecureGuard Insurance' }],
  openGraph: {
    title: 'SecureGuard Insurance - Comprehensive Protection Solutions',
    description: 'Professional insurance platform offering comprehensive coverage for all your protection needs',
    url: 'https://secureguard-insurance.com',
    siteName: 'SecureGuard Insurance',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-xl shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-800">SecureGuard</span>
                  <p className="text-xs text-gray-600">Insurance</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/policies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Policies
                </Link>
                <Link href="/auto" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Auto
                </Link>
                <Link href="/property" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/business" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Business
                </Link>
                <Link href="/calculator" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Calculator
                </Link>
                <Link href="/claims" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Claims
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Contact
                </Link>
              </div>

              {/* CTA Button */}
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105">
                Get Quote
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <span className="text-2xl font-bold">SecureGuard</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Comprehensive insurance solutions for individuals and businesses. 
                  Protecting what matters most since 1985.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-6">Insurance Products</h3>
                <ul className="space-y-3">
                  <li><Link href="/auto" className="text-gray-400 hover:text-blue-400 transition-colors">Auto Insurance</Link></li>
                  <li><Link href="/property" className="text-gray-400 hover:text-blue-400 transition-colors">Home Insurance</Link></li>
                  <li><Link href="/life" className="text-gray-400 hover:text-blue-400 transition-colors">Life Insurance</Link></li>
                  <li><Link href="/business" className="text-gray-400 hover:text-blue-400 transition-colors">Business Insurance</Link></li>
                  <li><Link href="/travel" className="text-gray-400 hover:text-blue-400 transition-colors">Travel Insurance</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
                <ul className="space-y-3">
                  <li><Link href="/claims" className="text-gray-400 hover:text-blue-400 transition-colors">File a Claim</Link></li>
                  <li><Link href="/policies" className="text-gray-400 hover:text-blue-400 transition-colors">Policy Management</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">24/7 Support</Link></li>
                  <li><Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
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
      </body>
    </html>
  )
}
