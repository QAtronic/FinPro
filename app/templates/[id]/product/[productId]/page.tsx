'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Heart, Star, Plus, Minus, Share2, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import template data (same as in main template page)
const templateData = {
  1: {
    id: 1,
    name: "LUXE Fashion",
    category: "Fashion & Apparel",
    colorScheme: "Black & Gold",
    style: "luxury",
    products: [
      { id: 1, name: "Designer Leather Jacket", price: 899.99, image: "https://picsum.photos/400/500?random=1", rating: 4.8, reviews: 234, category: "Outerwear", brand: "LUXE", description: "Premium leather jacket crafted from the finest Italian leather. Features a classic biker style with modern touches.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Brown", "Tan"] },
      { id: 2, name: "Silk Evening Dress", price: 1299.99, image: "https://picsum.photos/400/500?random=2", rating: 4.9, reviews: 189, category: "Dresses", brand: "LUXE", description: "Elegant silk evening dress perfect for special occasions. Hand-sewn with attention to detail.", sizes: ["XS", "S", "M", "L"], colors: ["Black", "Navy", "Burgundy"] },
    ]
  },
  2: {
    id: 2,
    name: "TechStore Pro",
    category: "Electronics",
    colorScheme: "Blue & Silver",
    style: "modern",
    products: [
      { id: 1, name: "iPhone 15 Pro Max", price: 1199.99, image: "https://picsum.photos/400/500?random=7", rating: 4.9, reviews: 456, category: "Smartphones", brand: "Apple", description: "Latest iPhone with advanced camera system and A17 Pro chip. Available in multiple storage options.", storage: ["128GB", "256GB", "512GB", "1TB"], colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"] },
    ]
  }
}

interface ProductPageProps {
  params: {
    id: string
    productId: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const templateId = parseInt(params.id)
  const productId = parseInt(params.productId)
  const template = templateData[templateId as keyof typeof templateData]
  const product = template?.products.find(p => p.id === productId)
  
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedStorage, setSelectedStorage] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!template || !product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link href={`/templates/${templateId}`} className="text-blue-600 hover:text-blue-800">
            ← Back to Store
          </Link>
        </div>
      </div>
    )
  }

  const getColorClasses = (colorScheme: string) => {
    const colorMap: { [key: string]: { primary: string, secondary: string, accent: string } } = {
      "Black & Gold": { primary: "bg-black", secondary: "bg-yellow-500", accent: "bg-gray-100" },
      "Blue & Silver": { primary: "bg-blue-600", secondary: "bg-gray-400", accent: "bg-blue-50" },
      "Rose Gold & White": { primary: "bg-rose-400", secondary: "bg-white", accent: "bg-rose-50" },
    }
    return colorMap[colorScheme] || colorMap["Black & Gold"]
  }

  const colors = getColorClasses(template.colorScheme)
  const productImages = [product.image, `https://picsum.photos/400/500?random=${product.id}1`, `https://picsum.photos/400/500?random=${product.id}2`]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`${colors.primary} text-white shadow-lg`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href={`/templates/${templateId}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Store</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
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

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={productImages[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{product.brand}</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="text-4xl font-bold text-gray-900">${product.price}</div>

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Size</h3>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Color</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg ${
                        selectedColor === color
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selection */}
            {product.storage && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Storage</h3>
                <div className="flex space-x-2">
                  {product.storage.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2 border rounded-lg ${
                        selectedStorage === storage
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border rounded-lg hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-semibold px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border rounded-lg hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button className={`w-full py-4 text-lg ${colors.primary} hover:opacity-90`}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              
              <Button variant="outline" className="w-full py-4 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-sm text-gray-600">On orders over $100</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold">2-Year Warranty</div>
                  <div className="text-sm text-gray-600">Full manufacturer warranty</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <RotateCcw className="w-6 h-6 text-purple-600" />
                <div>
                  <div className="font-semibold">30-Day Returns</div>
                  <div className="text-sm text-gray-600">Hassle-free returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
