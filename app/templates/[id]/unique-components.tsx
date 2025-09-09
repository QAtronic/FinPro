'use client'

import { ReactNode } from 'react'
import { Star, Heart, ShoppingCart, ArrowRight, Play, Award, Truck, Shield, RotateCcw, Sparkles, Zap, Crown, Gem } from 'lucide-react'

// Unique product card components for different templates
export const UniqueProductCards = {
  // Luxury Fashion - Elegant cards with gold accents
  luxuryFashion: ({ product, onAddToCart, onToggleWishlist, isInWishlist }: any) => (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 right-4">
          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all ${
              isInWishlist ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              Quick View
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 uppercase tracking-wider">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">{product.category}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => onAddToCart(product.id)}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ),

  // Tech Store - Modern cards with blue accents
  techStore: ({ product, onAddToCart, onToggleWishlist, isInWishlist }: any) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="absolute top-3 right-3">
          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`p-2 rounded-full transition-all ${
              isInWishlist ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <span className="text-sm text-gray-500">{product.reviews} reviews</span>
        </div>
        
        <button
          onClick={() => onAddToCart(product.id)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  ),

  // Beauty Store - Soft cards with pink accents
  beautyStore: ({ product, onAddToCart, onToggleWishlist, isInWishlist }: any) => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
        <div className="absolute top-4 right-4">
          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`p-3 rounded-full backdrop-blur-sm transition-all ${
              isInWishlist ? 'bg-rose-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-rose-500 hover:text-white'
            }`}
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-rose-500 font-medium">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-serif text-gray-800 mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">{product.reviews} reviews</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-rose-600">${product.price}</span>
          <button
            onClick={() => onAddToCart(product.id)}
            className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-3 rounded-full hover:from-rose-500 hover:to-pink-600 transition-all font-medium flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  ),

  // Gaming Store - Neon cards with dark theme
  gamingStore: ({ product, onAddToCart, onToggleWishlist, isInWishlist }: any) => (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border border-gray-800 hover:border-cyan-500">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="absolute top-3 right-3">
          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`p-2 rounded-full transition-all ${
              isInWishlist ? 'bg-red-500 text-white' : 'bg-gray-800/90 text-gray-400 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-bold">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-cyan-400 font-mono">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-400">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 font-mono">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-cyan-400">${product.price}</span>
          <span className="text-sm text-gray-500">{product.reviews} reviews</span>
        </div>
        
        <button
          onClick={() => onAddToCart(product.id)}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black py-3 rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all font-bold flex items-center justify-center space-x-2"
        >
          <Zap className="w-4 h-4" />
          <span>BUY NOW</span>
        </button>
      </div>
    </div>
  ),

  // Vintage Store - Retro cards with warm colors
  vintageStore: ({ product, onAddToCart, onToggleWishlist, isInWishlist }: any) => (
    <div className="bg-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="absolute top-3 right-3">
          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`p-2 rounded-full transition-all ${
              isInWishlist ? 'bg-red-500 text-white' : 'bg-amber-100 text-amber-800 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-amber-800 text-amber-100 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-amber-700 font-serif">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm text-amber-700">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-serif text-amber-900 mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-amber-800">${product.price}</span>
          <span className="text-sm text-amber-600">{product.reviews} reviews</span>
        </div>
        
        <button
          onClick={() => onAddToCart(product.id)}
          className="w-full bg-amber-800 text-amber-100 py-3 rounded-lg hover:bg-amber-900 transition-colors font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default UniqueProductCards
