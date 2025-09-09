'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Heart, Search, Menu, User, Star, Plus, Minus, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronRight, Filter, Grid, List, Award, Truck, Shield, RotateCcw, Clock, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Enhanced template data with category-specific designs
const enhancedTemplateData = {
  1: {
    id: 1,
    name: "LUXE Fashion",
    category: "Fashion & Apparel",
    colorScheme: "Black & Gold",
    style: "luxury",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    bannerText: "Luxury Fashion Collection",
    bannerSubtext: "Discover our exclusive designer pieces crafted with the finest materials",
    products: [
      { id: 1, name: "Designer Leather Jacket", price: 899.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop", rating: 4.8, reviews: 234, category: "Outerwear", brand: "LUXE" },
      { id: 2, name: "Silk Evening Dress", price: 1299.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop", rating: 4.9, reviews: 189, category: "Dresses", brand: "LUXE" },
      { id: 3, name: "Cashmere Sweater", price: 599.99, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop", rating: 4.7, reviews: 156, category: "Knitwear", brand: "LUXE" },
      { id: 4, name: "Premium Denim Jeans", price: 399.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop", rating: 4.6, reviews: 203, category: "Denim", brand: "LUXE" },
      { id: 5, name: "Designer Handbag", price: 799.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop", rating: 4.8, reviews: 167, category: "Accessories", brand: "LUXE" },
      { id: 6, name: "Luxury Watch", price: 2499.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop", rating: 4.9, reviews: 89, category: "Accessories", brand: "LUXE" },
    ],
    features: [
      { icon: Award, title: "Premium Quality", description: "Only the finest materials" },
      { icon: Truck, title: "Free Shipping", description: "On orders over $500" },
      { icon: Shield, title: "Lifetime Warranty", description: "On all luxury items" },
      { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" }
    ],
    testimonials: [
      { name: "Sarah Johnson", text: "Absolutely stunning pieces! The quality is unmatched.", rating: 5 },
      { name: "Michael Chen", text: "Best luxury fashion store I've ever shopped at.", rating: 5 },
      { name: "Emma Davis", text: "The customer service is exceptional.", rating: 5 }
    ]
  },
  2: {
    id: 2,
    name: "TechStore Pro",
    category: "Electronics",
    colorScheme: "Blue & Silver",
    style: "modern",
    heroImage: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop",
    bannerText: "Latest Technology",
    bannerSubtext: "Discover cutting-edge electronics and gadgets for the modern lifestyle",
    products: [
      { id: 1, name: "iPhone 15 Pro Max", price: 1199.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=500&fit=crop", rating: 4.9, reviews: 456, category: "Smartphones", brand: "Apple" },
      { id: 2, name: "MacBook Pro M3", price: 2499.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=500&fit=crop", rating: 4.8, reviews: 234, category: "Laptops", brand: "Apple" },
      { id: 3, name: "AirPods Pro", price: 249.99, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=500&fit=crop", rating: 4.7, reviews: 567, category: "Audio", brand: "Apple" },
      { id: 4, name: "iPad Air", price: 599.99, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop", rating: 4.6, reviews: 345, category: "Tablets", brand: "Apple" },
      { id: 5, name: "Apple Watch Series 9", price: 399.99, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=500&fit=crop", rating: 4.8, reviews: 278, category: "Wearables", brand: "Apple" },
      { id: 6, name: "Magic Keyboard", price: 149.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=500&fit=crop", rating: 4.5, reviews: 189, category: "Accessories", brand: "Apple" },
    ],
    features: [
      { icon: Award, title: "Latest Tech", description: "Cutting-edge technology" },
      { icon: Truck, title: "Fast Delivery", description: "Same-day shipping available" },
      { icon: Shield, title: "2-Year Warranty", description: "Full manufacturer warranty" },
      { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" }
    ],
    testimonials: [
      { name: "Alex Rodriguez", text: "Amazing selection of the latest tech!", rating: 5 },
      { name: "Lisa Wang", text: "Fast shipping and great customer service.", rating: 5 },
      { name: "David Kim", text: "Best prices on premium electronics.", rating: 5 }
    ]
  },
  3: {
    id: 3,
    name: "BeautyGlow",
    category: "Beauty & Health",
    colorScheme: "Rose Gold & White",
    style: "elegant",
    heroImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop",
    bannerText: "Beauty & Wellness",
    bannerSubtext: "Discover premium beauty products for radiant skin and healthy hair",
    products: [
      { id: 1, name: "Anti-Aging Serum", price: 89.99, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=500&fit=crop", rating: 4.8, reviews: 234, category: "Skincare", brand: "BeautyGlow" },
      { id: 2, name: "Luxury Makeup Set", price: 149.99, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop", rating: 4.7, reviews: 189, category: "Makeup", brand: "BeautyGlow" },
      { id: 3, name: "Hair Care Kit", price: 79.99, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop", rating: 4.6, reviews: 156, category: "Hair Care", brand: "BeautyGlow" },
      { id: 4, name: "Premium Perfume", price: 199.99, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop", rating: 4.9, reviews: 345, category: "Fragrance", brand: "BeautyGlow" },
      { id: 5, name: "Vitamin C Cream", price: 59.99, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=500&fit=crop", rating: 4.5, reviews: 278, category: "Skincare", brand: "BeautyGlow" },
      { id: 6, name: "Luxury Brush Set", price: 129.99, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop", rating: 4.8, reviews: 167, category: "Tools", brand: "BeautyGlow" },
    ],
    features: [
      { icon: Award, title: "Premium Quality", description: "Natural ingredients only" },
      { icon: Truck, title: "Free Shipping", description: "On orders over $75" },
      { icon: Shield, title: "Satisfaction Guarantee", description: "100% money back" },
      { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" }
    ],
    testimonials: [
      { name: "Jessica Martinez", text: "My skin has never looked better!", rating: 5 },
      { name: "Amanda Taylor", text: "Love the natural ingredients.", rating: 5 },
      { name: "Rachel Green", text: "Amazing results in just weeks.", rating: 5 }
    ]
  }
}

interface EnhancedTemplatePreviewProps {
  params: {
    id: string
  }
}

export default function EnhancedTemplatePreview({ params }: EnhancedTemplatePreviewProps) {
  const templateId = parseInt(params.id)
  const template = enhancedTemplateData[templateId as keyof typeof enhancedTemplateData]
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

  const getColorClasses = (colorScheme: string) => {
    const colorMap: { [key: string]: { primary: string, secondary: string, accent: string, text: string } } = {
      "Black & Gold": { primary: "bg-black", secondary: "bg-yellow-500", accent: "bg-gray-100", text: "text-yellow-500" },
      "Blue & Silver": { primary: "bg-blue-600", secondary: "bg-gray-400", accent: "bg-blue-50", text: "text-blue-600" },
      "Rose Gold & White": { primary: "bg-rose-400", secondary: "bg-white", accent: "bg-rose-50", text: "text-rose-400" },
    }
    return colorMap[colorScheme] || colorMap["Black & Gold"]
  }

  const colors = getColorClasses(template.colorScheme)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`${colors.primary} text-white shadow-lg`}>
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
      <section className="relative h-96 overflow-hidden">
        <img
          src={template.heroImage}
          alt={template.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{template.bannerText}</h1>
            <p className="text-xl mb-8 max-w-2xl">{template.bannerSubtext}</p>
            <Button className={`${colors.primary} hover:opacity-90 text-white px-8 py-3 text-lg`}>
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
            {template.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${colors.primary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {template.products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                    <button className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 transition-colors mb-2">
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() => addToCart(product.id)}
                    className={`w-full py-2 px-4 rounded-lg font-semibold text-white ${colors.primary} hover:opacity-90 transition-opacity`}
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
            {template.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
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
      <footer className="bg-gray-800 text-white py-12">
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
          <span className="text-lg font-bold text-gray-800">$599</span>
          <Link href="/templates">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Select Template
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
