'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, Grid, List, Eye, ShoppingCart, Star, Palette, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { fixedTemplateData } from './[id]/fixed-templates'
import { designSystems } from './[id]/design-systems'
import { templateImages } from './unique-images'

// Template data structure
interface Template {
  id: number
  name: string
  category: string
  colorScheme: string
  description: string
  features: string[]
  price: number
  rating: number
  image: string
  tags: string[]
  isPopular: boolean
  isNew: boolean
  categories?: Array<{ name: string; count: number; image: string }>
}

// Professional TemplateMonster-style templates
const generateTemplates = (): Template[] => {
  // Convert fixedTemplateData to Template format for the first 6 templates
  const professionalTemplates: Template[] = []
  
  for (let i = 1; i <= 6; i++) {
    const template = fixedTemplateData[i as keyof typeof fixedTemplateData]
    if (template) {
      professionalTemplates.push({
        id: template.id,
        name: template.name,
        category: template.category,
        colorScheme: template.colorScheme,
        description: template.description,
        features: template.features ? template.features.map(f => f.title) : ["Mobile Responsive", "SEO Optimized", "Payment Gateway", "Reviews", "Wishlist", "Analytics"],
        price: template.price,
        rating: template.rating,
        image: template.heroImage,
        tags: [template.style, template.category.split(' ')[0], "Professional"],
        isPopular: template.isPopular,
        isNew: template.isNew,
        categories: template.categories
      })
    }
  }

  // Generate remaining templates
  const categories = [
    'Fashion & Apparel', 'Electronics', 'Home & Garden', 'Beauty & Health', 
    'Sports & Fitness', 'Books & Media', 'Food & Beverage', 'Automotive',
    'Jewelry & Accessories', 'Toys & Games', 'Pet Supplies', 'Office Supplies'
  ]
  
  const colorSchemes = [
    'Blue & White', 'Red & Black', 'Green & Gold', 'Purple & Silver',
    'Orange & Navy', 'Pink & Gray', 'Teal & White', 'Yellow & Black',
    'Indigo & Cream', 'Coral & White', 'Emerald & Gold', 'Rose & Silver'
  ]
  
  const features = [
    'Mobile Responsive', 'SEO Optimized', 'Payment Gateway', 'Inventory Management',
    'Customer Reviews', 'Wishlist', 'Multi-language', 'Social Media Integration',
    'Analytics Dashboard', 'Email Marketing', 'Live Chat', 'Product Search',
    'Quick Checkout', 'Product Comparison', 'Related Products', 'Newsletter Signup'
  ]
  
  const tags = [
    'Modern', 'Minimalist', 'Bold', 'Elegant', 'Creative', 'Professional',
    'Vibrant', 'Clean', 'Sophisticated', 'Trendy', 'Classic', 'Contemporary'
  ]

  const storeNames = [
    "Elite", "Premium", "Pro", "Luxury", "Modern", "Classic", "Trendy", "Boutique", 
    "Express", "Plus", "Max", "Ultra", "Prime", "Select", "Royal", "Grand"
  ]

  const templates: Template[] = [...professionalTemplates]
  

  // Category mapping for subcategories
  const categoryMap: { [key: string]: string[] } = {
    "Fashion & Apparel": ["Clothing", "Accessories", "Shoes", "Bags", "Jewelry", "Watches"],
    "Electronics": ["Smartphones", "Laptops", "Audio", "Tablets", "Wearables", "Accessories"],
    "Beauty & Health": ["Skincare", "Makeup", "Hair Care", "Fragrance", "Tools", "Bath & Body"],
    "Home & Garden": ["Tools", "Pots", "Furniture", "Seeds", "Irrigation", "Decor"],
    "Books & Media": ["Fiction", "Business", "Cooking", "Children", "Art", "History"],
    "Food & Beverage": ["Wine", "Cheese", "Coffee", "Chocolate", "Oils", "Spices"],
    "Sports & Fitness": ["Equipment", "Clothing", "Shoes", "Accessories", "Nutrition", "Supplements"],
    "Automotive": ["Parts", "Tools", "Accessories", "Maintenance", "Electronics", "Interior"],
    "Pet Supplies": ["Food", "Toys", "Beds", "Grooming", "Health", "Accessories"],
    "Toys & Games": ["Action Figures", "Board Games", "Puzzles", "Educational", "Outdoor", "Electronics"],
    "Jewelry & Accessories": ["Rings", "Necklaces", "Earrings", "Bracelets", "Watches", "Bags"],
    "Office Supplies": ["Stationery", "Electronics", "Furniture", "Storage", "Presentation", "Organization"]
  }

  for (let i = 7; i <= 100; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const storeName = storeNames[Math.floor(Math.random() * storeNames.length)]
    const templateFeatures = features.sort(() => 0.5 - Math.random()).slice(0, 6)
    const templateTags = tags.sort(() => 0.5 - Math.random()).slice(0, 3)
    
    // Get design system for this template
    const designSystem = designSystems.find(ds => ds.id === i) || designSystems[0]
    const colorScheme = `${designSystem.colorScheme.primary.replace('bg-', '').charAt(0).toUpperCase() + designSystem.colorScheme.primary.replace('bg-', '').slice(1)} & ${designSystem.colorScheme.secondary.replace('bg-', '').charAt(0).toUpperCase() + designSystem.colorScheme.secondary.replace('bg-', '').slice(1)}`
    
    // Generate subcategories for this template
    const subcategories = categoryMap[category] || ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"]
    const templateCategories = subcategories.map((cat, index) => ({
      name: cat,
      count: Math.floor(Math.random() * 50) + 20,
      image: templateImages[i + 1] || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop'
    }))
    
    templates.push({
      id: i,
      name: `${storeName} ${category.split(' ')[0]}`,
      category,
      colorScheme,
      description: `Professional ${category.toLowerCase()} store with ${designSystem.style} design. Features ${designSystem.layout.heroStyle} hero layout and ${designSystem.layout.productGrid} product grid.`,
      features: templateFeatures,
      price: Math.floor(Math.random() * 500) + 99,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
      image: templateImages[i + 1] || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      tags: [...templateTags, designSystem.style, designSystem.layout.heroStyle],
      isPopular: Math.random() > 0.7,
      isNew: Math.random() > 0.8,
      categories: templateCategories
    })
  }
  
  return templates
}

const templates = generateTemplates()

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedColorScheme, setSelectedColorScheme] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('name')

  const categories = ['all', ...Array.from(new Set(templates.map(t => t.category)))]
  const colorSchemes = ['all', ...Array.from(new Set(templates.map(t => t.colorScheme)))]

  const filteredTemplates = useMemo(() => {
    let filtered = templates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
      const matchesColorScheme = selectedColorScheme === 'all' || template.colorScheme === selectedColorScheme
      
      return matchesSearch && matchesCategory && matchesColorScheme
    })

    // Sort templates
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'popular':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedColorScheme, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* Header */}
      <section className="section-padding bg-dark-800">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">E-Commerce Templates</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from 100+ professionally designed e-commerce store templates. 
              Each template is fully customizable and optimized for conversions.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-dark-700 p-6 rounded-2xl mb-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-dark-600 border-dark-500 text-white"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 bg-dark-600 border-dark-500 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Color Scheme Filter */}
              <Select value={selectedColorScheme} onValueChange={setSelectedColorScheme}>
                <SelectTrigger className="w-full lg:w-48 bg-dark-600 border-dark-500 text-white">
                  <SelectValue placeholder="Color Scheme" />
                </SelectTrigger>
                <SelectContent>
                  {colorSchemes.map(scheme => (
                    <SelectItem key={scheme} value={scheme}>
                      {scheme === 'all' ? 'All Colors' : scheme}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 bg-dark-600 border-dark-500 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between">
              <div className="text-gray-300">
                Showing {filteredTemplates.length} of {templates.length} templates
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="bg-dark-600 hover:bg-dark-500 border-dark-500"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="bg-dark-600 hover:bg-dark-500 border-dark-500"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="section-padding">
        <div className="container-max">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTemplates.map((template) => (
                <TemplateListCard key={template.id} template={template} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// Template Card Component for Grid View
function TemplateCard({ template }: { template: Template }) {
  return (
    <div className="bg-dark-700 rounded-2xl overflow-hidden card-hover group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={template.image}
          alt={template.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {template.isNew && (
            <Badge className="bg-green-500 text-white">New</Badge>
          )}
          {template.isPopular && (
            <Badge className="bg-orange-500 text-white">Popular</Badge>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <Link href={`/templates/${template.id}`}>
            <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              <Eye className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
            {template.name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{template.rating}</span>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {template.description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <Palette className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">{template.colorScheme}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {template.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-gray-600 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            ${template.price}
          </div>
          <Link href={`/templates/${template.id}`}>
            <Button className="button-gradient">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Select
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Template List Card Component for List View
function TemplateListCard({ template }: { template: Template }) {
  return (
    <div className="bg-dark-700 rounded-2xl p-6 card-hover group">
      <div className="flex gap-6">
        {/* Image */}
        <div className="relative flex-shrink-0">
          <img
            src={template.image}
            alt={template.name}
            className="w-32 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2 flex gap-1">
            {template.isNew && (
              <Badge className="bg-green-500 text-white text-xs">New</Badge>
            )}
            {template.isPopular && (
              <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {template.name}
            </h3>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{template.rating}</span>
            </div>
          </div>

          <p className="text-gray-300 mb-3">
            {template.description}
          </p>

          <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              <span>{template.category}</span>
            </div>
            <div className="flex items-center gap-1">
              <Palette className="w-4 h-4" />
              <span>{template.colorScheme}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {template.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-gray-600 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              ${template.price}
            </div>
            <div className="flex gap-2">
              <Link href={`/templates/${template.id}`}>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </Link>
              <Link href={`/templates/${template.id}`}>
                <Button className="button-gradient">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Select Template
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
