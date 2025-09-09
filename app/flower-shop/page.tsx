'use client'

import { useState } from 'react'
import { 
  ShoppingCart, 
  Heart, 
  Search, 
  Menu, 
  User, 
  Star, 
  Plus, 
  Minus, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ChevronRight, 
  Filter, 
  Grid, 
  List,
  Award,
  Truck,
  Shield,
  RotateCcw,
  Clock,
  Users,
  TrendingUp,
  Flower,
  Leaf,
  Gift,
  Calendar,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Crown,
  Zap
} from 'lucide-react'

export default function FlowerShop() {
  const [cartItems, setCartItems] = useState<number[]>([])
  const [wishlist, setWishlist] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const flowerCategories = [
    { id: 'all', name: 'All Flowers', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&h=200&fit=crop' },
    { id: 'roses', name: 'Roses', image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=200&fit=crop' },
    { id: 'tulips', name: 'Tulips', image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=300&h=200&fit=crop' },
    { id: 'lilies', name: 'Lilies', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop' },
    { id: 'orchids', name: 'Orchids', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop' },
    { id: 'sunflowers', name: 'Sunflowers', image: 'https://images.unsplash.com/photo-1597848212624-e17eb04d4443?w=300&h=200&fit=crop' },
    { id: 'bouquets', name: 'Bouquets', image: 'https://images.unsplash.com/photo-1563241527-3004b7be99c0?w=300&h=200&fit=crop' },
    { id: 'arrangements', name: 'Arrangements', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop' }
  ]

  const flowerProducts = [
    {
      id: 1,
      name: 'Red Rose Bouquet',
      category: 'roses',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=500&fit=crop',
      description: 'Beautiful red roses arranged in an elegant bouquet',
      inStock: true,
      isNew: true,
      isPopular: true
    },
    {
      id: 2,
      name: 'Spring Tulip Mix',
      category: 'tulips',
      price: 65.99,
      originalPrice: 85.99,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=500&fit=crop',
      description: 'Colorful mix of spring tulips in various shades',
      inStock: true,
      isNew: false,
      isPopular: true
    },
    {
      id: 3,
      name: 'White Lily Elegance',
      category: 'lilies',
      price: 75.99,
      originalPrice: 95.99,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      description: 'Pure white lilies for special occasions',
      inStock: true,
      isNew: false,
      isPopular: false
    },
    {
      id: 4,
      name: 'Exotic Orchid Collection',
      category: 'orchids',
      price: 125.99,
      originalPrice: 155.99,
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop',
      description: 'Rare and exotic orchids from around the world',
      inStock: true,
      isNew: true,
      isPopular: true
    },
    {
      id: 5,
      name: 'Sunny Sunflower Bundle',
      category: 'sunflowers',
      price: 45.99,
      originalPrice: 65.99,
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1597848212624-e17eb04d4443?w=400&h=500&fit=crop',
      description: 'Bright and cheerful sunflowers to brighten any day',
      inStock: true,
      isNew: false,
      isPopular: false
    },
    {
      id: 6,
      name: 'Romantic Rose & Baby Breath',
      category: 'bouquets',
      price: 95.99,
      originalPrice: 125.99,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be99c0?w=400&h=500&fit=crop',
      description: 'Romantic combination of roses and baby breath',
      inStock: true,
      isNew: false,
      isPopular: true
    },
    {
      id: 7,
      name: 'Luxury Mixed Arrangement',
      category: 'arrangements',
      price: 155.99,
      originalPrice: 195.99,
      rating: 4.9,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop',
      description: 'Premium mixed flower arrangement for special events',
      inStock: true,
      isNew: true,
      isPopular: true
    },
    {
      id: 8,
      name: 'Pink Peony Paradise',
      category: 'roses',
      price: 85.99,
      originalPrice: 110.99,
      rating: 4.7,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=500&fit=crop',
      description: 'Delicate pink peonies in full bloom',
      inStock: true,
      isNew: false,
      isPopular: false
    }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? flowerProducts 
    : flowerProducts.filter(product => product.category === selectedCategory)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York',
      rating: 5,
      text: 'Absolutely stunning flowers! The delivery was prompt and the arrangement was even more beautiful than I expected.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Los Angeles',
      rating: 5,
      text: 'Perfect for my anniversary! The roses were fresh and lasted for weeks. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Emily Davis',
      location: 'Chicago',
      rating: 5,
      text: 'The customer service is exceptional and the flowers are always fresh. My go-to flower shop!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Flower className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">BloomDelight</h1>
                <p className="text-sm text-gray-600">Premium Flower Delivery</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Home</a>
              <a href="#flowers" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Flowers</a>
              <a href="#arrangements" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Arrangements</a>
              <a href="#delivery" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Delivery</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">About</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-600 hover:text-pink-600 transition-colors cursor-pointer" />
                <Heart className="w-5 h-5 text-gray-600 hover:text-pink-600 transition-colors cursor-pointer" />
                <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-pink-600 transition-colors cursor-pointer" />
              </div>
              <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2 rounded-full font-medium hover:from-pink-600 hover:to-rose-700 transition-all transform hover:scale-105">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background with Multiple Flower Images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100"></div>
          
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1563241527-3004b7be99c0?w=1920&h=1080&fit=crop" 
            alt="Flower Background" 
            className="w-full h-full object-cover opacity-90"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          
          {/* Floating Flower Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-pulse">
            <img src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=200&h=200&fit=crop" alt="Rose" className="w-full h-full object-cover rounded-full" />
          </div>
          
          <div className="absolute top-40 right-32 w-24 h-24 opacity-30 animate-bounce">
            <img src="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=200&h=200&fit=crop" alt="Tulip" className="w-full h-full object-cover rounded-full" />
          </div>
          
          <div className="absolute bottom-32 left-1/4 w-28 h-28 opacity-25 animate-pulse">
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop" alt="Lily" className="w-full h-full object-cover rounded-full" />
          </div>
          
          <div className="absolute top-1/3 right-10 w-20 h-20 opacity-20 animate-bounce">
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop" alt="Orchid" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-full text-sm tracking-widest uppercase font-medium shadow-lg">
                  🌸 Premium Flower Delivery
                </span>
              </div>
              
              <h1 className="text-7xl font-bold mb-8 leading-tight">
                Beautiful
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400">
                  Flowers
                </span>
                <span className="block text-5xl font-light mt-2">
                  Delivered Fresh
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                From romantic roses to elegant orchids, we deliver the freshest flowers 
                to make every moment special. Same-day delivery available with love and care.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <button className="group bg-gradient-to-r from-pink-500 to-rose-600 text-white px-10 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-700 transition-all transform hover:scale-105 shadow-2xl">
                  <span className="flex items-center justify-center">
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    <Gift className="w-5 h-5 mr-2" />
                    View Catalog
                  </span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Same Day Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Fresh Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Expert Florists</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Featured Products */}
            <div className="relative">
              {/* Main Featured Product */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Featured
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=500&fit=crop" 
                  alt="Featured Flower" 
                  className="w-full h-64 object-cover rounded-2xl mb-6 shadow-lg"
                />
                
                <h3 className="text-white text-2xl font-bold mb-2">Red Rose Bouquet</h3>
                <p className="text-white/80 mb-4">Premium red roses arranged with love</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-white/80 text-sm ml-2">(127 reviews)</span>
                  </div>
                  <span className="text-green-400 text-sm font-semibold">In Stock</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white text-3xl font-bold">$89.99</span>
                    <span className="text-white/60 line-through ml-2">$119.99</span>
                  </div>
                  <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-700 transition-all transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
              
              {/* Floating Mini Products */}
              <div className="absolute -bottom-8 -left-8 w-32 h-40 bg-white/15 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 hover:rotate-0 transition-all duration-500 shadow-xl">
                <img src="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=150&h=150&fit=crop" alt="Tulip" className="w-full h-20 object-cover rounded-lg mb-2" />
                <h4 className="text-white text-sm font-semibold">Spring Tulips</h4>
                <p className="text-pink-300 text-xs">$65.99</p>
              </div>
              
              <div className="absolute -top-8 -right-8 w-28 h-36 bg-white/15 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-all duration-500 shadow-xl">
                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop" alt="Lily" className="w-full h-18 object-cover rounded-lg mb-2" />
                <h4 className="text-white text-sm font-semibold">White Lilies</h4>
                <p className="text-pink-300 text-xs">$75.99</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent"></div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose BloomDelight?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering the freshest, most beautiful flowers with exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Flower, title: "Fresh Daily", desc: "Hand-picked flowers delivered fresh every day", color: "pink" },
              { icon: Truck, title: "Same Day Delivery", desc: "Fast and reliable delivery service", color: "green" },
              { icon: Shield, title: "Quality Guarantee", desc: "100% satisfaction guarantee on all orders", color: "blue" },
              { icon: Award, title: "Expert Florists", desc: "Professional arrangements by skilled florists", color: "purple" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-10 h-10 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Flower Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our wide variety of beautiful flowers and arrangements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {flowerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'ring-4 ring-pink-500 scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-semibold text-sm">{category.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="flowers" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Flowers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-selected premium flowers for every occasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">New</span>
                    )}
                    {product.isPopular && (
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Popular</span>
                    )}
                  </div>
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                  {product.originalPrice && (
                    <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-800">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      )}
                    </div>
                    <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-rose-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info Section */}
      <section id="delivery" className="py-20 bg-gradient-to-r from-green-100 to-pink-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Fast & Reliable Delivery</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We deliver fresh flowers to your doorstep with care and precision. 
                Choose from same-day delivery or schedule in advance.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Same Day Delivery", desc: "Order by 2 PM for same-day delivery" },
                  { icon: MapPin, title: "Wide Coverage", desc: "We deliver to over 100 cities nationwide" },
                  { icon: Shield, title: "Safe Delivery", desc: "Carefully packaged to ensure freshness" },
                  { icon: Gift, title: "Gift Wrapping", desc: "Beautiful gift wrapping available" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563241527-3004b7be99c0?w=600&h=400&fit=crop" 
                alt="Delivery" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Free Delivery</h4>
                    <p className="text-sm text-gray-600">On orders over $75</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay in Bloom</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, flower care tips, and seasonal collections
          </p>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-l-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="bg-white text-pink-600 px-8 py-4 rounded-r-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                  <Flower className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">BloomDelight</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium flower delivery service bringing beauty and joy to your special moments.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-pink-400 transition-colors cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-pink-400 transition-colors cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 transition-colors cursor-pointer" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-pink-400 transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors">Home</a></li>
                <li><a href="#flowers" className="text-gray-400 hover:text-pink-400 transition-colors">Flowers</a></li>
                <li><a href="#arrangements" className="text-gray-400 hover:text-pink-400 transition-colors">Arrangements</a></li>
                <li><a href="#delivery" className="text-gray-400 hover:text-pink-400 transition-colors">Delivery</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Track Order</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-400">hello@bloomdelight.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-400">123 Flower St, Garden City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 BloomDelight. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
