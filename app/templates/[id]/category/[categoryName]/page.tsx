'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Heart, Search, Star, Filter, Grid, List, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Sample category data
const categoryData = {
  "outerwear": {
    name: "Outerwear",
    description: "Premium outerwear for all seasons",
    products: [
      { id: 1, name: "Designer Leather Jacket", price: 899.99, image: "https://picsum.photos/400/500?random=1", rating: 4.8, reviews: 234, brand: "LUXE" },
      { id: 2, name: "Wool Overcoat", price: 699.99, image: "https://picsum.photos/400/500?random=2", rating: 4.7, reviews: 189, brand: "LUXE" },
      { id: 3, name: "Denim Jacket", price: 299.99, image: "https://picsum.photos/400/500?random=3", rating: 4.6, reviews: 156, brand: "LUXE" },
      { id: 4, name: "Bomber Jacket", price: 399.99, image: "https://picsum.photos/400/500?random=4", rating: 4.5, reviews: 123, brand: "LUXE" },
    ]
  },
  "dresses": {
    name: "Dresses",
    description: "Elegant dresses for every occasion",
    products: [
      { id: 5, name: "Silk Evening Dress", price: 1299.99, image: "https://picsum.photos/400/500?random=5", rating: 4.9, reviews: 189, brand: "LUXE" },
      { id: 6, name: "Cocktail Dress", price: 599.99, image: "https://picsum.photos/400/500?random=6", rating: 4.8, reviews: 167, brand: "LUXE" },
      { id: 7, name: "Summer Dress", price: 399.99, image: "https://picsum.photos/400/500?random=7", rating: 4.7, reviews: 145, brand: "LUXE" },
      { id: 8, name: "Maxi Dress", price: 499.99, image: "https://picsum.photos/400/500?random=8", rating: 4.6, reviews: 134, brand: "LUXE" },
    ]
  }
}

interface CategoryPageProps {
  params: {
    id: string
    categoryName: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const templateId = parseInt(params.id)
  const categoryName = params.categoryName
  const category = categoryData[categoryName as keyof typeof categoryData]
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('name')
  const [priceRange, setPriceRange] = useState([0, 2000])

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <Link href={`/templates/${templateId}`} className="text-blue-600 hover:text-blue-800">
            ← Back to Store
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href={`/templates/${templateId}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Store</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="px-4 py-2 border rounded-lg w-64"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              
              <button className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Heart className="w-6 h-6" />
                <span>Wishlist</span>
              </button>
              
              <button className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <ShoppingCart className="w-6 h-6" />
                <span>Cart (0)</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Category Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600">{category.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Brand */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Brand</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">LUXE</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Premium</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Elite</span>
                  </label>
                </div>
              </div>

              {/* Size */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button key={size} className="p-2 border rounded text-sm hover:bg-gray-50">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <h4 className="font-medium mb-3">Color</h4>
                <div className="flex space-x-2">
                  {['Black', 'White', 'Navy', 'Red', 'Brown'].map(color => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-400"
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600">
                Showing {category.products.length} products
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border rounded-lg"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
                
                <div className="flex border rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {category.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full object-cover ${viewMode === 'grid' ? 'h-64' : 'h-48'}`}
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{product.brand}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                      <Link href={`/templates/${templateId}/product/${product.id}`}>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
