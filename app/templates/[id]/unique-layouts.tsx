'use client'

import { ReactNode } from 'react'
import { Star, Heart, ShoppingCart, Search, Menu, User, ArrowRight, Play, Award, Truck, Shield, RotateCcw } from 'lucide-react'

// Unique layout components for different templates
export const UniqueLayouts = {
  // Template 1: Luxury Fashion - Asymmetric Hero with Floating Cards
  luxuryFashion: ({ children, template }: { children: ReactNode, template: any }) => (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900">
      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-yellow-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-serif text-yellow-500 font-bold">LUXE</div>
            <div className="hidden md:flex space-x-8">
              {['Collections', 'Designers', 'Accessories', 'About'].map(item => (
                <a key={item} className="text-white hover:text-yellow-500 transition-colors font-light">{item}</a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-white" />
              <Heart className="w-5 h-5 text-white" />
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </nav>

      {/* Asymmetric Hero */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        <img src={template.heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-6xl font-serif font-light mb-6 leading-tight">
              {template.bannerText}
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
              {template.bannerSubtext}
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-black px-8 py-3 font-medium hover:bg-yellow-400 transition-colors">
                Explore Collection
              </button>
              <button className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors">
                Watch Video
              </button>
            </div>
          </div>
          
          {/* Floating Product Cards */}
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-80 bg-white/10 backdrop-blur-sm rounded-lg p-6 transform rotate-3 hover:rotate-0 transition-transform">
              <img src={template.products[0]?.image} alt="Product" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-white font-medium mb-2">{template.products[0]?.name}</h3>
              <p className="text-yellow-500 text-lg font-bold">${template.products[0]?.price}</p>
            </div>
            <div className="absolute top-10 -right-10 w-64 h-80 bg-white/10 backdrop-blur-sm rounded-lg p-6 transform -rotate-3 hover:rotate-0 transition-transform">
              <img src={template.products[1]?.image} alt="Product" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-white font-medium mb-2">{template.products[1]?.name}</h3>
              <p className="text-yellow-500 text-lg font-bold">${template.products[1]?.price}</p>
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  ),

  // Template 2: Tech Store - Grid-based with Interactive Elements
  techStore: ({ children, template }: { children: ReactNode, template: any }) => (
    <div className="min-h-screen bg-gray-50">
      {/* Tech Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">TechStore</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <User className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Hero Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Hero */}
            <div className="lg:col-span-2 relative group">
              <img src={template.heroImage} alt="Hero" className="w-full h-96 object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl font-bold mb-2">{template.bannerText}</h1>
                <p className="text-lg mb-4">{template.bannerSubtext}</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Side Products */}
            <div className="space-y-4">
              {template.products.slice(0, 3).map((product: any, index: number) => (
                <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex space-x-4">
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.category}</p>
                      <p className="text-blue-600 font-bold">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  ),

  // Template 3: Beauty Store - Curved Design with Soft Colors
  beautyStore: ({ children, template }: { children: ReactNode, template: any }) => (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Curved Header */}
      <header className="relative">
        <div className="bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="text-2xl font-serif text-rose-600 font-bold">BeautyGlow</span>
              </div>
              
              <nav className="hidden md:flex space-x-8">
                {['Skincare', 'Makeup', 'Hair', 'Fragrance', 'Tools'].map(item => (
                  <a key={item} className="text-gray-700 hover:text-rose-600 transition-colors font-medium">{item}</a>
                ))}
              </nav>
              
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-gray-600" />
                <Heart className="w-5 h-5 text-gray-600" />
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 transform scale-y-[-1]">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" className="text-white"/>
          </svg>
        </div>
      </header>

      {/* Soft Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-serif text-gray-800 mb-6 leading-tight">
                {template.bannerText}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {template.bannerSubtext}
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:from-rose-500 hover:to-pink-600 transition-all transform hover:scale-105">
                  Discover Beauty
                </button>
                <button className="border-2 border-rose-400 text-rose-600 px-8 py-4 rounded-full font-medium hover:bg-rose-400 hover:text-white transition-all">
                  Watch Tutorial
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full transform rotate-12"></div>
              <img src={template.heroImage} alt="Hero" className="relative w-full h-96 object-cover rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  ),

  // Gaming Store - Neon cyberpunk design
  gamingStore: ({ children, template }: { children: ReactNode, template: any }) => (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Neon Header */}
      <header className="bg-black border-b-2 border-cyan-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-mono text-cyan-400 font-bold">GAMING ZONE</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['PC', 'Console', 'Accessories', 'Games', 'Streaming'].map(item => (
                <a key={item} className="text-gray-300 hover:text-cyan-400 transition-colors font-mono">{item}</a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-cyan-400" />
              <Heart className="w-5 h-5 text-pink-500" />
              <ShoppingCart className="w-5 h-5 text-purple-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Neon Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-mono text-cyan-400 mb-6 leading-tight">
                {template.bannerText}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {template.bannerSubtext}
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-8 py-4 rounded-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105">
                  LEVEL UP
                </button>
                <button className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-lg font-bold hover:bg-pink-500 hover:text-black transition-all">
                  WATCH TRAILER
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg transform rotate-2"></div>
              <img src={template.heroImage} alt="Hero" className="relative w-full h-96 object-cover rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  ),

  // Medical Store - Clean professional design
  medicalStore: ({ children, template }: { children: ReactNode, template: any }) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Medical Header */}
      <header className="bg-white border-b-2 border-blue-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-semibold text-blue-800">MediCare</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Equipment', 'Supplies', 'Diagnostics', 'Therapy', 'Emergency'].map(item => (
                <a key={item} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">{item}</a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600" />
              <Heart className="w-5 h-5 text-red-500" />
              <ShoppingCart className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Medical Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-semibold text-blue-900 mb-6 leading-tight">
                {template.bannerText}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {template.bannerSubtext}
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all">
                  Browse Products
                </button>
                <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-green-500 hover:text-white transition-all">
                  Emergency Kit
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 rounded-lg"></div>
              <img src={template.heroImage} alt="Hero" className="relative w-full h-96 object-cover rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  ),

  // Sports Store - Dynamic energetic design
  sportsStore: ({ children, template }: { children: ReactNode, template: any }) => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Sports Header */}
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-white">SPORTMAX</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Fitness', 'Outdoor', 'Team Sports', 'Running', 'Gym'].map(item => (
                <a key={item} className="text-white hover:text-yellow-300 transition-colors font-semibold">{item}</a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-white" />
              <Heart className="w-5 h-5 text-white" />
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Sports Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {template.bannerText}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {template.bannerSubtext}
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:from-red-500 hover:to-orange-500 transition-all transform hover:scale-105">
                  SHOP NOW
                </button>
                <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 hover:text-white transition-all">
                  WATCH DEMO
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-200 to-orange-200 rounded-lg transform -rotate-2"></div>
              <img src={template.heroImage} alt="Hero" className="relative w-full h-96 object-cover rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  )
}

export default UniqueLayouts
