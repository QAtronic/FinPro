import { Award, Truck, Shield, RotateCcw } from 'lucide-react'

// Fixed template data with stable images and proper category-specific content
export const fixedTemplateData = {
  1: {
    id: 1,
    name: "LUXE Fashion",
    category: "Fashion & Apparel",
    colorScheme: "Black & Gold",
    description: "Luxury fashion store with elegant black and gold design",
    price: 599,
    rating: 4.9,
    isPopular: true,
    isNew: false,
    style: "luxury",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    bannerText: "Luxury Fashion Collection",
    bannerSubtext: "Discover our exclusive designer pieces crafted with the finest materials",
    categories: [
      { name: "Outerwear", count: 45, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop" },
      { name: "Dresses", count: 32, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=200&fit=crop" },
      { name: "Knitwear", count: 28, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=200&fit=crop" },
      { name: "Denim", count: 38, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=200&fit=crop" },
      { name: "Accessories", count: 52, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop" },
      { name: "Shoes", count: 41, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop" },
    ],
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
    description: "Modern electronics store with sleek blue and silver design",
    price: 499,
    rating: 4.8,
    isPopular: true,
    isNew: false,
    style: "modern",
    heroImage: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop",
    bannerText: "Latest Technology",
    bannerSubtext: "Discover cutting-edge electronics and gadgets for the modern lifestyle",
    categories: [
      { name: "Smartphones", count: 28, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop" },
      { name: "Laptops", count: 15, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop" },
      { name: "Audio", count: 42, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=200&fit=crop" },
      { name: "Tablets", count: 18, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop" },
      { name: "Wearables", count: 25, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop" },
      { name: "Accessories", count: 67, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop" },
    ],
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
    description: "Premium beauty store with elegant rose gold and white design",
    price: 449,
    rating: 4.7,
    isPopular: true,
    isNew: false,
    style: "elegant",
    heroImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop",
    bannerText: "Beauty & Wellness",
    bannerSubtext: "Discover premium beauty products for radiant skin and healthy hair",
    categories: [
      { name: "Skincare", count: 38, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=200&fit=crop" },
      { name: "Makeup", count: 52, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop" },
      { name: "Hair Care", count: 29, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop" },
      { name: "Fragrance", count: 24, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=200&fit=crop" },
      { name: "Tools", count: 18, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=200&fit=crop" },
      { name: "Bath & Body", count: 31, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" },
    ],
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
  },
  4: {
    id: 4,
    name: "Garden Paradise",
    category: "Home & Garden",
    colorScheme: "Green & Brown",
    description: "Beautiful garden and home decor store with natural green and brown colors",
    price: 399,
    rating: 4.6,
    isPopular: false,
    isNew: true,
    style: "natural",
    heroImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop",
    bannerText: "Garden Paradise",
    bannerSubtext: "Transform your home and garden with our premium outdoor products",
    categories: [
      { name: "Tools", count: 35, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
      { name: "Pots", count: 42, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
      { name: "Furniture", count: 18, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
      { name: "Seeds", count: 67, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
      { name: "Irrigation", count: 24, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
      { name: "Decor", count: 31, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
    ],
    products: [
      { id: 1, name: "Garden Tools Set", price: 89.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop", rating: 4.5, reviews: 123, category: "Tools", brand: "GardenPro" },
      { id: 2, name: "Plant Pots Collection", price: 49.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop", rating: 4.4, reviews: 89, category: "Pots", brand: "GardenPro" },
      { id: 3, name: "Outdoor Furniture", price: 299.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop", rating: 4.7, reviews: 156, category: "Furniture", brand: "GardenPro" },
      { id: 4, name: "Garden Seeds Pack", price: 19.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop", rating: 4.3, reviews: 234, category: "Seeds", brand: "GardenPro" },
      { id: 5, name: "Watering System", price: 79.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop", rating: 4.6, reviews: 167, category: "Irrigation", brand: "GardenPro" },
      { id: 6, name: "Garden Decor", price: 39.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop", rating: 4.5, reviews: 189, category: "Decor", brand: "GardenPro" },
    ],
    features: [
      { icon: Award, title: "Natural Products", description: "Eco-friendly garden solutions" },
      { icon: Truck, title: "Free Delivery", description: "On orders over $100" },
      { icon: Shield, title: "Plant Guarantee", description: "Healthy plants or money back" },
      { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" }
    ],
    testimonials: [
      { name: "John Smith", text: "My garden has never looked better!", rating: 5 },
      { name: "Maria Garcia", text: "Great quality plants and tools.", rating: 5 },
      { name: "Tom Wilson", text: "Excellent customer service.", rating: 5 }
    ]
  },
  5: {
    id: 5,
    name: "BookWorld",
    category: "Books & Media",
    colorScheme: "Brown & Cream",
    description: "Classic bookstore with warm brown and cream colors for book lovers",
    price: 349,
    rating: 4.5,
    isPopular: false,
    isNew: true,
    style: "classic",
    heroImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop",
    bannerText: "BookWorld",
    bannerSubtext: "Discover your next favorite book in our extensive collection",
    categories: [
      { name: "Fiction", count: 156, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
      { name: "Business", count: 89, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
      { name: "Cooking", count: 67, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
      { name: "Children", count: 124, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
      { name: "Art", count: 45, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
      { name: "History", count: 78, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" },
    ],
    products: [
      { id: 1, name: "Bestseller Novel", price: 19.99, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop", rating: 4.8, reviews: 234, category: "Fiction", brand: "BookWorld" },
      { id: 2, name: "Business Book", price: 24.99, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop", rating: 4.6, reviews: 189, category: "Business", brand: "BookWorld" },
      { id: 3, name: "Cookbook", price: 29.99, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop", rating: 4.7, reviews: 156, category: "Cooking", brand: "BookWorld" },
      { id: 4, name: "Children's Book", price: 14.99, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop", rating: 4.9, reviews: 345, category: "Children", brand: "BookWorld" },
      { id: 5, name: "Art Book", price: 39.99, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop", rating: 4.5, reviews: 278, category: "Art", brand: "BookWorld" },
      { id: 6, name: "History Book", price: 22.99, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop", rating: 4.4, reviews: 167, category: "History", brand: "BookWorld" },
    ],
    features: [
      { icon: Award, title: "Curated Selection", description: "Hand-picked quality books" },
      { icon: Truck, title: "Free Shipping", description: "On orders over $50" },
      { icon: Shield, title: "Book Condition", description: "Perfect condition guarantee" },
      { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" }
    ],
    testimonials: [
      { name: "Alice Brown", text: "Amazing book selection!", rating: 5 },
      { name: "Robert Lee", text: "Fast delivery and great prices.", rating: 5 },
      { name: "Susan White", text: "Love the book recommendations.", rating: 5 }
    ]
  },
  6: {
    id: 6,
    name: "Gourmet Delights",
    category: "Food & Beverage",
    colorScheme: "Red & Gold",
    description: "Premium food and beverage store with rich red and gold colors",
    price: 429,
    rating: 4.8,
    isPopular: true,
    isNew: false,
    style: "premium",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop",
    bannerText: "Gourmet Delights",
    bannerSubtext: "Indulge in the finest gourmet foods and premium beverages",
    categories: [
      { name: "Wine", count: 45, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
      { name: "Cheese", count: 32, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
      { name: "Coffee", count: 28, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
      { name: "Chocolate", count: 38, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
      { name: "Oils", count: 24, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
      { name: "Spices", count: 52, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" },
    ],
    products: [
      { id: 1, name: "Premium Wine", price: 89.99, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop", rating: 4.9, reviews: 234, category: "Wine", brand: "Gourmet" },
      { id: 2, name: "Artisan Cheese", price: 34.99, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop", rating: 4.7, reviews: 189, category: "Cheese", brand: "Gourmet" },
      { id: 3, name: "Gourmet Coffee", price: 24.99, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop", rating: 4.8, reviews: 156, category: "Coffee", brand: "Gourmet" },
      { id: 4, name: "Premium Chocolate", price: 19.99, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop", rating: 4.6, reviews: 345, category: "Chocolate", brand: "Gourmet" },
      { id: 5, name: "Olive Oil", price: 29.99, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop", rating: 4.5, reviews: 278, category: "Oils", brand: "Gourmet" },
      { id: 6, name: "Spice Collection", price: 39.99, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop", rating: 4.7, reviews: 167, category: "Spices", brand: "Gourmet" },
    ],
    features: [
      { icon: Award, title: "Premium Quality", description: "Finest gourmet products" },
      { icon: Truck, title: "Fresh Delivery", description: "Same-day fresh delivery" },
      { icon: Shield, title: "Quality Guarantee", description: "Freshness guarantee" },
      { icon: RotateCcw, title: "Easy Returns", description: "30-day return policy" }
    ],
    testimonials: [
      { name: "Chef Marco", text: "Best gourmet ingredients!", rating: 5 },
      { name: "Sarah Johnson", text: "Amazing wine selection.", rating: 5 },
      { name: "Mike Chen", text: "Fresh and delicious products.", rating: 5 }
    ]
  }
}

// Generate remaining templates with stable images
for (let i = 7; i <= 100; i++) {
  const categories = [
    "Fashion & Apparel", "Electronics", "Beauty & Health", "Home & Garden", 
    "Books & Media", "Food & Beverage", "Sports & Fitness", "Automotive",
    "Pet Supplies", "Toys & Games", "Jewelry", "Health & Wellness"
  ]
  
  const colorSchemes = [
    "Black & Gold", "Blue & Silver", "Rose Gold & White", "Green & Brown",
    "Brown & Cream", "Red & Gold", "Orange & Navy", "Purple & Silver",
    "Teal & Coral", "Navy & White", "Burgundy & Gold", "Emerald & Silver"
  ]
  
  const category = categories[i % categories.length]
  const colorScheme = colorSchemes[i % colorSchemes.length]
  
  // Category-specific hero images
  const heroImages = {
    "Fashion & Apparel": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    "Electronics": "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop",
    "Beauty & Health": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop",
    "Home & Garden": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop",
    "Books & Media": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop",
    "Food & Beverage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop",
    "Sports & Fitness": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
    "Automotive": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    "Pet Supplies": "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop",
    "Toys & Games": "https://images.unsplash.com/photo-1558060370-7e0b95fe9cdc?w=1200&h=600&fit=crop",
    "Jewelry": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop",
    "Health & Wellness": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop"
  }
  
  // Category-specific product images
  const productImages = {
    "Fashion & Apparel": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    "Electronics": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=500&fit=crop",
    "Beauty & Health": "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=500&fit=crop",
    "Home & Garden": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop",
    "Books & Media": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
    "Food & Beverage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop",
    "Sports & Fitness": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
    "Automotive": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    "Pet Supplies": "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=500&fit=crop",
    "Toys & Games": "https://images.unsplash.com/photo-1558060370-7e0b95fe9cdc?w=400&h=500&fit=crop",
    "Jewelry": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
    "Health & Wellness": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop"
  }
  
  const heroImage = heroImages[category as keyof typeof heroImages] || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop"
  const productImage = productImages[category as keyof typeof productImages] || "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop"
  
  // Generate categories based on the main category
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
  
  const templateCategories = categoryMap[category] || ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"]
  
  fixedTemplateData[i] = {
    id: i,
    name: `Template ${i}`,
    category: category,
    colorScheme: colorScheme,
    description: `Professional ${category.toLowerCase()} store with ${colorScheme.toLowerCase()} design`,
    price: 299 + (i * 10),
    rating: 4.0 + (i % 10) * 0.1,
    isPopular: i % 3 === 0,
    isNew: i % 4 === 0,
    style: "professional",
    heroImage: heroImage,
    bannerText: `Template ${i}`,
    bannerSubtext: `Professional ${category.toLowerCase()} store`,
    categories: templateCategories.map((cat, index) => ({
      name: cat,
      count: Math.floor(Math.random() * 50) + 20,
      image: productImage
    })),
    products: [
      { id: 1, name: `Product 1`, price: 99.99, image: productImage, rating: 4.5, reviews: 123, category: templateCategories[0], brand: "Brand" },
      { id: 2, name: `Product 2`, price: 149.99, image: productImage, rating: 4.3, reviews: 89, category: templateCategories[1], brand: "Brand" },
      { id: 3, name: `Product 3`, price: 199.99, image: productImage, rating: 4.7, reviews: 156, category: templateCategories[2], brand: "Brand" },
      { id: 4, name: `Product 4`, price: 79.99, image: productImage, rating: 4.2, reviews: 234, category: templateCategories[3], brand: "Brand" },
      { id: 5, name: `Product 5`, price: 129.99, image: productImage, rating: 4.6, reviews: 167, category: templateCategories[4], brand: "Brand" },
      { id: 6, name: `Product 6`, price: 89.99, image: productImage, rating: 4.4, reviews: 189, category: templateCategories[5], brand: "Brand" },
    ]
  }
}
