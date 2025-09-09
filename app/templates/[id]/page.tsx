'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Heart, Search, Menu, User, Star, Plus, Minus, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronRight, Filter, Grid, List, Award, Truck, Shield, RotateCcw, Clock, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fixedTemplateData } from './fixed-templates'
import TemplateWrapper from './template-wrapper'
import { designSystems } from './design-systems'
import { UniqueLayouts } from './unique-layouts'
import { UniqueProductCards } from './unique-components'
import { UniqueSections } from './unique-sections'
import { AdvancedLayouts } from './advanced-layouts'
import { uniqueProducts } from './unique-products'

interface TemplatePreviewProps {
  params: {
    id: string
  }
}

export default function TemplatePreview({ params }: TemplatePreviewProps) {
  const templateId = parseInt(params.id)
  const template = fixedTemplateData[templateId as keyof typeof fixedTemplateData]
  const [cartItems, setCartItems] = useState<number[]>([])
  const [wishlist, setWishlist] = useState<number[]>([])

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Template Not Found</h1>
          <Link href="/templates" className="text-blue-600 hover:text-blue-800">
            ← Back to Templates
          </Link>
        </div>
      </div>
    )
  }

  const addToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId])
  }

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const designSystem = designSystems.find(ds => ds.id === templateId) || designSystems[0]
  
  const getColorClasses = () => {
    return {
      primary: designSystem.colorScheme.primary,
      secondary: designSystem.colorScheme.secondary,
      accent: designSystem.colorScheme.accent,
      text: designSystem.colorScheme.text,
      background: designSystem.colorScheme.background,
      surface: designSystem.colorScheme.surface
    }
  }

  const colors = getColorClasses()

  // Select unique layout based on template ID
  const getUniqueLayout = () => {
    switch (templateId) {
      case 1:
        return 'luxuryFashion'
      case 2:
        return 'techStore'
      case 3:
        return 'beautyStore'
      case 4:
        return 'gamingStore'
      case 5:
        return 'vintageStore'
      case 6:
        return 'medicalStore'
      case 7:
        return 'sportsStore'
      case 8:
        return 'luxuryFashion'
      case 9:
        return 'techStore'
      case 10:
        return 'beautyStore'
      default:
        // For templates 11-100, cycle through layouts
        const layouts = ['luxuryFashion', 'techStore', 'beautyStore', 'gamingStore', 'vintageStore', 'medicalStore', 'sportsStore']
        return layouts[(templateId - 1) % layouts.length]
    }
  }

  const getUniqueProductCard = () => {
    switch (templateId) {
      case 1:
        return 'luxuryFashion'
      case 2:
        return 'techStore'
      case 3:
        return 'beautyStore'
      case 4:
        return 'gamingStore'
      case 5:
        return 'vintageStore'
      case 6:
        return 'luxuryFashion'
      case 7:
        return 'techStore'
      case 8:
        return 'beautyStore'
      case 9:
        return 'gamingStore'
      case 10:
        return 'vintageStore'
      default:
        // For templates 11-100, cycle through card types
        const cardTypes = ['luxuryFashion', 'techStore', 'beautyStore', 'gamingStore', 'vintageStore']
        return cardTypes[(templateId - 1) % cardTypes.length]
    }
  }

  const layoutType = getUniqueLayout()
  const cardType = getUniqueProductCard()
  
  // Use advanced layouts for first 10 templates, then fallback to unique layouts
  const AdvancedLayout = AdvancedLayouts[layoutType as keyof typeof AdvancedLayouts]
  const UniqueLayout = UniqueLayouts[layoutType as keyof typeof UniqueLayouts]
  const UniqueProductCard = UniqueProductCards[cardType as keyof typeof UniqueProductCards]
  
  // Get unique products for this template type
  const templateProducts = uniqueProducts[cardType as keyof typeof uniqueProducts] || template.products

  // Use advanced layouts for first 10 templates
  if (AdvancedLayout && templateId <= 10) {
    return (
      <AdvancedLayout template={template}>
        {/* Categories Section */}
        <section className={`py-16 ${colors.surface}`}>
          <div className="container mx-auto px-4">
            <h2 className={`${designSystem.typography.heading} text-3xl font-bold text-center mb-12 ${colors.text}`}>Shop by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {template.categories.map((category: any, index: number) => (
                <Link 
                  key={index}
                  href={`/templates/${templateId}/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group"
                >
                  <div className={`${colors.surface} ${designSystem.borderRadius.lg} ${designSystem.shadows.md} overflow-hidden ${designSystem.animations.hover} ${designSystem.animations.transition} card`}>
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className={`w-full h-32 object-cover group-hover:scale-105 ${designSystem.animations.transition}`}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                    </div>
                    
                    <div className="p-4 text-center">
                      <h3 className={`${designSystem.typography.subheading} font-semibold ${colors.text} mb-1`}>{category.name}</h3>
                      <p className={`${designSystem.typography.caption} text-sm`}>{category.count} items</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className={`${designSystem.typography.heading} text-3xl font-bold text-center mb-12 ${colors.text}`}>Featured Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {templateProducts.map((product: any) => (
                <UniqueProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                  isInWishlist={wishlist.includes(product.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        {layoutType === 'luxuryFashion' && <UniqueSections.luxuryFashion template={template} />}
        {layoutType === 'techStore' && <UniqueSections.techStore template={template} />}
        {layoutType === 'beautyStore' && <UniqueSections.beautyStore template={template} />}
        {layoutType === 'gamingStore' && <UniqueSections.gamingStore template={template} />}
        {layoutType === 'vintageStore' && <UniqueSections.vintageStore template={template} />}
        {layoutType === 'medicalStore' && <UniqueSections.techStore template={template} />}
        {layoutType === 'sportsStore' && <UniqueSections.gamingStore template={template} />}

        {/* Testimonials */}
        {layoutType === 'luxuryFashion' && <UniqueSections.luxuryTestimonials template={template} />}
        {layoutType === 'beautyStore' && <UniqueSections.beautyNewsletter template={template} />}
      </AdvancedLayout>
    )
  }

  // Fallback to unique layouts for templates 11-100
  if (UniqueLayout) {
    return (
      <UniqueLayout template={template}>
        {/* Categories Section */}
        <section className={`py-16 ${colors.surface}`}>
          <div className="container mx-auto px-4">
            <h2 className={`${designSystem.typography.heading} text-3xl font-bold text-center mb-12 ${colors.text}`}>Shop by Category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {template.categories.map((category: any, index: number) => (
                <Link 
                  key={index}
                  href={`/templates/${templateId}/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group"
                >
                  <div className={`${colors.surface} ${designSystem.borderRadius.lg} ${designSystem.shadows.md} overflow-hidden ${designSystem.animations.hover} ${designSystem.animations.transition} card`}>
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className={`w-full h-32 object-cover group-hover:scale-105 ${designSystem.animations.transition}`}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                    </div>
                    
                    <div className="p-4 text-center">
                      <h3 className={`${designSystem.typography.subheading} font-semibold ${colors.text} mb-1`}>{category.name}</h3>
                      <p className={`${designSystem.typography.caption} text-sm`}>{category.count} items</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className={`${designSystem.typography.heading} text-3xl font-bold text-center mb-12 ${colors.text}`}>Featured Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {templateProducts.map((product: any) => (
                <UniqueProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                  isInWishlist={wishlist.includes(product.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        {layoutType === 'luxuryFashion' && <UniqueSections.luxuryFashion template={template} />}
        {layoutType === 'techStore' && <UniqueSections.techStore template={template} />}
        {layoutType === 'beautyStore' && <UniqueSections.beautyStore template={template} />}
        {layoutType === 'gamingStore' && <UniqueSections.gamingStore template={template} />}
        {layoutType === 'vintageStore' && <UniqueSections.vintageStore template={template} />}
        {layoutType === 'medicalStore' && <UniqueSections.techStore template={template} />}
        {layoutType === 'sportsStore' && <UniqueSections.gamingStore template={template} />}

        {/* Testimonials */}
        {layoutType === 'luxuryFashion' && <UniqueSections.luxuryTestimonials template={template} />}
        {layoutType === 'beautyStore' && <UniqueSections.beautyNewsletter template={template} />}
      </UniqueLayout>
    )
  }

  return (
    <TemplateWrapper templateId={templateId}>
      <div className={`min-h-screen ${colors.background}`}>
      {/* Header */}
      <header className={`${colors.primary} text-white shadow-lg header-style`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/templates" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Templates</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="px-4 py-2 rounded-lg text-gray-800 w-64"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              
              <button className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Heart className="w-6 h-6" />
                <span>Wishlist ({wishlist.length})</span>
              </button>
              
              <Link href={`/templates/${template.id}/cart`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <ShoppingCart className="w-6 h-6" />
                <span>Cart ({cartItems.length})</span>
              </Link>
              
              <button className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <User className="w-6 h-6" />
                <span>Account</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className={`relative h-96 overflow-hidden hero-style`}>
        <img
          src={template.heroImage || `https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop`}
          alt={template.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className={`${designSystem.typography.heading} text-5xl font-bold mb-4`}>{template.bannerText || template.name}</h1>
            <p className={`${designSystem.typography.body} text-xl mb-8 max-w-2xl`}>{template.bannerSubtext || template.description}</p>
            <Button className={`${colors.primary} hover:opacity-90 text-white px-8 py-3 text-lg ${designSystem.animations.transition}`}>
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className={`${colors.accent} py-4`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8">
            <a href="#" className="font-semibold hover:opacity-80 transition-opacity">Home</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Products</a>
            <Link href={`/templates/${template.id}/category/outerwear`} className="hover:opacity-80 transition-opacity">Categories</Link>
            <a href="#" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {template.features ? template.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )) : (
              // Default features for templates without specific features
              <>
                <div className="text-center">
                  <div className={`w-16 h-16 ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                  <p className="text-gray-600">Only the best products</p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">Quick and reliable shipping</p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
                  <p className="text-gray-600">Safe and protected</p>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <RotateCcw className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                  <p className="text-gray-600">30-day return policy</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={`py-16 ${colors.surface}`}>
        <div className="container mx-auto px-4">
          <h2 className={`${designSystem.typography.heading} text-3xl font-bold text-center mb-12 ${colors.text}`}>Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {template.categories.map((category, index) => (
              <Link 
                key={index}
                href={`/templates/${templateId}/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className={`${colors.surface} ${designSystem.borderRadius.lg} ${designSystem.shadows.md} overflow-hidden ${designSystem.animations.hover} ${designSystem.animations.transition}`}>
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className={`w-full h-32 object-cover group-hover:scale-105 ${designSystem.animations.transition}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                  </div>
                  
                  <div className="p-4 text-center">
                    <h3 className={`${designSystem.typography.subheading} font-semibold ${colors.text} mb-1`}>{category.name}</h3>
                    <p className={`${designSystem.typography.caption} text-sm`}>{category.count} items</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`${designSystem.typography.heading} text-3xl font-bold text-center mb-12 ${colors.text}`}>Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {template.products.map((product) => (
              <div key={product.id} className={`${colors.surface} ${designSystem.borderRadius.lg} ${designSystem.shadows.md} overflow-hidden ${designSystem.animations.hover} ${designSystem.animations.transition} card`}>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-2 right-2 p-2 rounded-full ${
                      wishlist.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
                    } hover:opacity-80 transition-opacity`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-2">1</span>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <Link href={`/templates/${template.id}/product/${product.id}`}>
                    <button className={`w-full py-2 px-4 ${designSystem.borderRadius.lg} font-semibold text-white bg-gray-800 hover:bg-gray-700 ${designSystem.animations.transition} mb-2 btn-secondary`}>
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() => addToCart(product.id)}
                    className={`w-full py-2 px-4 ${designSystem.borderRadius.lg} font-semibold text-white ${colors.primary} hover:opacity-90 ${designSystem.animations.transition} btn-primary`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {template.testimonials ? template.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            )) : (
              // Default testimonials
              <>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"Excellent service and quality products!"</p>
                  <p className="font-semibold text-gray-800">- Sarah Johnson</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"Fast delivery and great customer support."</p>
                  <p className="font-semibold text-gray-800">- Michael Chen</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"Highly recommend this store!"</p>
                  <p className="font-semibold text-gray-800">- Emma Davis</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-16 ${colors.primary} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for the latest updates and exclusive offers</p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-800"
              />
              <Button className={`${colors.secondary} text-gray-800 hover:opacity-90 px-6 rounded-l-none`}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${colors.primary} text-white py-12 footer-style`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{template.name}</h3>
              <p className="text-gray-400">
                Your trusted partner for quality products and exceptional service.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {template.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Template Info Overlay */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <h4 className="font-semibold text-gray-800 mb-2">Template Preview</h4>
        <p className="text-sm text-gray-600 mb-2">{template.name}</p>
        <p className="text-sm text-gray-600 mb-2">{template.colorScheme} • {template.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">${template.price}</span>
          <Link href="/templates">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Select Template
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </TemplateWrapper>
  )
}
