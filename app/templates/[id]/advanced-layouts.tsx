'use client'

import { ReactNode } from 'react'
import { Star, Heart, ShoppingCart, Search, Menu, User, ArrowRight, Play, Award, Truck, Shield, RotateCcw, Sparkles, Zap, Crown, Gem, Users, TrendingUp, Clock, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ChevronRight, Filter, Grid, List } from 'lucide-react'

// Advanced professional layouts for different industries
export const AdvancedLayouts = {
  // Luxury Fashion - High-end boutique design
  luxuryFashion: ({ children, template }: { children: ReactNode, template: any }) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-yellow-900">
      {/* Premium Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-yellow-500/20">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-3xl font-serif text-yellow-500 font-bold tracking-wider">LUXE</div>
              <div className="hidden lg:flex space-x-8">
                {['Haute Couture', 'Prêt-à-Porter', 'Accessories', 'Jewelry', 'Atelier'].map(item => (
                  <a key={item} className="text-white/90 hover:text-yellow-500 transition-all duration-300 font-light text-sm tracking-wider uppercase">{item}</a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4">
                <Search className="w-5 h-5 text-white/70 hover:text-yellow-500 transition-colors cursor-pointer" />
                <Heart className="w-5 h-5 text-white/70 hover:text-yellow-500 transition-colors cursor-pointer" />
                <ShoppingCart className="w-5 h-5 text-white/70 hover:text-yellow-500 transition-colors cursor-pointer" />
              </div>
              <button className="bg-yellow-500 text-black px-6 py-2 text-sm font-medium tracking-wider uppercase hover:bg-yellow-400 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={template.heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-8 text-white">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="text-yellow-500 text-sm tracking-widest uppercase font-light">Exclusive Collection</span>
            </div>
            <h1 className="text-7xl font-serif font-light mb-8 leading-tight">
              {template.bannerText}
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-2xl font-light leading-relaxed">
              {template.bannerSubtext}
            </p>
            <div className="flex space-x-6">
              <button className="bg-yellow-500 text-black px-10 py-4 text-sm font-medium tracking-wider uppercase hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                Explore Collection
              </button>
              <button className="border border-white/30 text-white px-10 py-4 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-20 w-64 h-80 bg-white/5 backdrop-blur-sm rounded-lg p-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
          <img src={template.products[0]?.image} alt="Product" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-white font-light mb-2">{template.products[0]?.name}</h3>
          <p className="text-yellow-500 text-lg font-medium">${template.products[0]?.price}</p>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Crown, title: "Exclusive Designers", desc: "Curated from world-renowned fashion houses", color: "yellow" },
              { icon: Gem, title: "Premium Materials", desc: "Only the finest fabrics and craftsmanship", color: "yellow" },
              { icon: Truck, title: "White Glove Service", desc: "Personal delivery with premium packaging", color: "yellow" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/30 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-yellow-500" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {children}
    </div>
  ),

  // Tech Store - Modern tech showcase
  techStore: ({ children, template }: { children: ReactNode, template: any }) => (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Tech Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">TechStore Pro</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for products..." 
                  className="w-96 px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
                <Search className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
              </div>
              <div className="flex items-center space-x-6">
                <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                  <User className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Hero Grid */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Hero */}
            <div className="lg:col-span-2 relative group">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={template.heroImage} alt="Hero" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h1 className="text-5xl font-bold mb-4">{template.bannerText}</h1>
                  <p className="text-lg mb-6 max-w-md">{template.bannerSubtext}</p>
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Side Products */}
            <div className="space-y-6">
              {template.products.slice(0, 3).map((product: any, index: number) => (
                <div key={product.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="flex space-x-4">
                    <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-blue-600 font-bold text-lg">${product.price}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TechStore Pro</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology with unbeatable service and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Latest Technology", desc: "Always up-to-date with the newest innovations", color: "blue" },
              { icon: Truck, title: "Fast Shipping", desc: "Same-day delivery available in major cities", color: "green" },
              { icon: Shield, title: "Extended Warranty", desc: "2-year comprehensive warranty on all products", color: "purple" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-10 h-10 text-${feature.color}-600`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {children}
    </div>
  ),

  // Beauty Store - Elegant beauty design
  beautyStore: ({ children, template }: { children: ReactNode, template: any }) => (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Elegant Header */}
      <header className="relative">
        <div className="bg-white/90 backdrop-blur-xl">
          <div className="container mx-auto px-8 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">B</span>
                </div>
                <span className="text-3xl font-serif text-rose-600 font-bold">BeautyGlow</span>
              </div>
              
              <nav className="hidden lg:flex space-x-10">
                {['Skincare', 'Makeup', 'Hair Care', 'Fragrance', 'Tools'].map(item => (
                  <a key={item} className="text-gray-700 hover:text-rose-600 transition-colors font-medium text-lg">{item}</a>
                ))}
              </nav>
              
              <div className="flex items-center space-x-6">
                <Search className="w-6 h-6 text-gray-600 hover:text-rose-600 transition-colors cursor-pointer" />
                <Heart className="w-6 h-6 text-gray-600 hover:text-rose-600 transition-colors cursor-pointer" />
                <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-rose-600 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 transform scale-y-[-1]">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" className="text-white"/>
          </svg>
        </div>
      </header>

      {/* Soft Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="text-rose-500 text-sm tracking-widest uppercase font-medium">Premium Beauty</span>
              </div>
              <h1 className="text-6xl font-serif text-gray-800 mb-8 leading-tight">
                {template.bannerText}
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {template.bannerSubtext}
              </p>
              <div className="flex space-x-6">
                <button className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-10 py-4 rounded-full font-medium hover:from-rose-500 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
                  Discover Beauty
                </button>
                <button className="border-2 border-rose-400 text-rose-600 px-10 py-4 rounded-full font-medium hover:bg-rose-400 hover:text-white transition-all shadow-lg">
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

      {/* Beauty Features */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Beauty Promise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your beauty journey starts with our premium products and expert guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Natural Ingredients", desc: "Pure, organic ingredients for healthy skin" },
              { icon: Award, title: "Expert Approved", desc: "Recommended by beauty professionals worldwide" },
              { icon: Truck, title: "Free Shipping", desc: "Complimentary delivery on orders over $75" },
              { icon: RotateCcw, title: "Satisfaction Guarantee", desc: "100% money-back guarantee on all products" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {children}
    </div>
  )
}

export default AdvancedLayouts
