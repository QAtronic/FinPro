// Unique product data for different store types
export const uniqueProducts = {
  // Luxury Fashion Products
  luxuryFashion: [
    { id: 1, name: "Couture Evening Gown", price: 12999.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop", rating: 4.9, reviews: 89, category: "Evening Wear", brand: "LUXE", description: "Hand-crafted silk gown with Swarovski crystals" },
    { id: 2, name: "Designer Leather Handbag", price: 8999.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop", rating: 4.8, reviews: 156, category: "Accessories", brand: "LUXE", description: "Italian leather with gold hardware" },
    { id: 3, name: "Cashmere Overcoat", price: 15999.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop", rating: 4.9, reviews: 234, category: "Outerwear", brand: "LUXE", description: "100% cashmere from Scottish mills" },
    { id: 4, name: "Diamond Necklace", price: 49999.99, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop", rating: 5.0, reviews: 67, category: "Jewelry", brand: "LUXE", description: "18k white gold with 2ct diamond" },
    { id: 5, name: "Silk Scarf Collection", price: 1299.99, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop", rating: 4.7, reviews: 189, category: "Accessories", brand: "LUXE", description: "Hand-painted silk from Paris" },
    { id: 6, name: "Luxury Watch", price: 24999.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop", rating: 4.9, reviews: 123, category: "Watches", brand: "LUXE", description: "Swiss movement with platinum case" }
  ],

  // Tech Store Products
  techStore: [
    { id: 1, name: "MacBook Pro M3 Max", price: 3999.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=500&fit=crop", rating: 4.9, reviews: 456, category: "Laptops", brand: "Apple", description: "16-inch with M3 Max chip and 32GB RAM" },
    { id: 2, name: "iPhone 15 Pro Max", price: 1199.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=500&fit=crop", rating: 4.8, reviews: 1234, category: "Smartphones", brand: "Apple", description: "Titanium design with A17 Pro chip" },
    { id: 3, name: "Sony WH-1000XM5", price: 399.99, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=500&fit=crop", rating: 4.7, reviews: 567, category: "Audio", brand: "Sony", description: "Industry-leading noise cancellation" },
    { id: 4, name: "iPad Pro 12.9", price: 1099.99, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop", rating: 4.8, reviews: 345, category: "Tablets", brand: "Apple", description: "M2 chip with Liquid Retina XDR display" },
    { id: 5, name: "Apple Watch Ultra 2", price: 799.99, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=500&fit=crop", rating: 4.6, reviews: 278, category: "Wearables", brand: "Apple", description: "Titanium case with Action Button" },
    { id: 6, name: "Magic Keyboard Pro", price: 299.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=500&fit=crop", rating: 4.5, reviews: 189, category: "Accessories", brand: "Apple", description: "Backlit keys with Touch ID" }
  ],

  // Beauty Store Products
  beautyStore: [
    { id: 1, name: "La Mer The Moisturizing Cream", price: 189.99, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=500&fit=crop", rating: 4.8, reviews: 234, category: "Skincare", brand: "La Mer", description: "Luxury moisturizer with Miracle Broth" },
    { id: 2, name: "Chanel No. 5 Perfume", price: 149.99, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop", rating: 4.9, reviews: 345, category: "Fragrance", brand: "Chanel", description: "Iconic floral bouquet fragrance" },
    { id: 3, name: "Dior Rouge Lipstick", price: 45.99, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop", rating: 4.7, reviews: 189, category: "Makeup", brand: "Dior", description: "Long-wearing satin finish lipstick" },
    { id: 4, name: "Olaplex Hair Treatment", price: 28.99, image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop", rating: 4.6, reviews: 156, category: "Hair Care", brand: "Olaplex", description: "Professional bond building treatment" },
    { id: 5, name: "Charlotte Tilbury Palette", price: 75.99, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop", rating: 4.8, reviews: 278, category: "Makeup", brand: "Charlotte Tilbury", description: "12-shade eyeshadow palette" },
    { id: 6, name: "Drunk Elephant Serum", price: 78.99, image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=500&fit=crop", rating: 4.5, reviews: 167, category: "Skincare", brand: "Drunk Elephant", description: "Vitamin C brightening serum" }
  ],

  // Gaming Store Products
  gamingStore: [
    { id: 1, name: "RTX 4090 Gaming PC", price: 2999.99, image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=500&fit=crop", rating: 4.9, reviews: 89, category: "Gaming PCs", brand: "Alienware", description: "RTX 4090 with Intel i9-13900K" },
    { id: 2, name: "PlayStation 5 Pro", price: 699.99, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=500&fit=crop", rating: 4.8, reviews: 456, category: "Consoles", brand: "Sony", description: "4K gaming with ray tracing" },
    { id: 3, name: "Razer DeathAdder V3", price: 79.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=500&fit=crop", rating: 4.7, reviews: 234, category: "Gaming Mice", brand: "Razer", description: "30,000 DPI optical sensor" },
    { id: 4, name: "SteelSeries Apex Pro", price: 199.99, image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=500&fit=crop", rating: 4.6, reviews: 189, category: "Gaming Keyboards", brand: "SteelSeries", description: "Adjustable actuation switches" },
    { id: 5, name: "HyperX Cloud Alpha", price: 99.99, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=500&fit=crop", rating: 4.8, reviews: 345, category: "Gaming Headsets", brand: "HyperX", description: "7.1 surround sound gaming headset" },
    { id: 6, name: "ASUS ROG Monitor", price: 899.99, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=500&fit=crop", rating: 4.7, reviews: 123, category: "Gaming Monitors", brand: "ASUS", description: "27-inch 4K 144Hz gaming monitor" }
  ],

  // Medical Store Products
  medicalStore: [
    { id: 1, name: "Digital Stethoscope", price: 299.99, image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=500&fit=crop", rating: 4.8, reviews: 89, category: "Diagnostic Equipment", brand: "3M Littmann", description: "Electronic stethoscope with app connectivity" },
    { id: 2, name: "Blood Pressure Monitor", price: 89.99, image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=500&fit=crop", rating: 4.6, reviews: 156, category: "Monitoring Devices", brand: "Omron", description: "Automatic upper arm monitor" },
    { id: 3, name: "Pulse Oximeter", price: 45.99, image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop", rating: 4.7, reviews: 234, category: "Monitoring Devices", brand: "Nonin", description: "Fingertip pulse oximeter" },
    { id: 4, name: "Thermometer Kit", price: 29.99, image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=500&fit=crop", rating: 4.5, reviews: 189, category: "Diagnostic Equipment", brand: "Braun", description: "Digital thermometer with case" },
    { id: 5, name: "First Aid Kit", price: 79.99, image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=500&fit=crop", rating: 4.8, reviews: 278, category: "Emergency Supplies", brand: "Johnson & Johnson", description: "Professional 200-piece first aid kit" },
    { id: 6, name: "Surgical Gloves", price: 19.99, image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop", rating: 4.4, reviews: 167, category: "Medical Supplies", brand: "Medline", description: "Powder-free nitrile gloves (100 count)" }
  ],

  // Sports Store Products
  sportsStore: [
    { id: 1, name: "Nike Air Max 270", price: 149.99, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop", rating: 4.7, reviews: 456, category: "Running Shoes", brand: "Nike", description: "Max Air unit for all-day comfort" },
    { id: 2, name: "Adidas Ultraboost 22", price: 189.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop", rating: 4.8, reviews: 234, category: "Running Shoes", brand: "Adidas", description: "Boost midsole for energy return" },
    { id: 3, name: "Yoga Mat Premium", price: 79.99, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop", rating: 4.6, reviews: 189, category: "Yoga Equipment", brand: "Lululemon", description: "Non-slip premium yoga mat" },
    { id: 4, name: "Dumbbell Set", price: 199.99, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop", rating: 4.5, reviews: 123, category: "Weight Training", brand: "Bowflex", description: "Adjustable dumbbells 5-52.5 lbs" },
    { id: 5, name: "Protein Powder", price: 49.99, image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=500&fit=crop", rating: 4.7, reviews: 345, category: "Nutrition", brand: "Optimum Nutrition", description: "Whey protein isolate 5 lbs" },
    { id: 6, name: "Fitness Tracker", price: 199.99, image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=500&fit=crop", rating: 4.6, reviews: 278, category: "Fitness Tech", brand: "Fitbit", description: "Advanced fitness tracking with GPS" }
  ],

  // Vintage Store Products
  vintageStore: [
    { id: 1, name: "Vintage Leather Jacket", price: 299.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop", rating: 4.8, reviews: 89, category: "Vintage Clothing", brand: "Vintage", description: "1970s genuine leather motorcycle jacket" },
    { id: 2, name: "Antique Brass Compass", price: 89.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop", rating: 4.6, reviews: 156, category: "Antiques", brand: "Vintage", description: "1920s nautical brass compass" },
    { id: 3, name: "Retro Vinyl Record", price: 24.99, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop", rating: 4.7, reviews: 234, category: "Vintage Music", brand: "Vintage", description: "Original 1960s Beatles album" },
    { id: 4, name: "Vintage Camera", price: 199.99, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=500&fit=crop", rating: 4.5, reviews: 189, category: "Vintage Cameras", brand: "Vintage", description: "1950s Leica rangefinder camera" },
    { id: 5, name: "Antique Jewelry Box", price: 149.99, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop", rating: 4.8, reviews: 278, category: "Vintage Furniture", brand: "Vintage", description: "Victorian era mahogany jewelry box" },
    { id: 6, name: "Retro Typewriter", price: 399.99, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=500&fit=crop", rating: 4.6, reviews: 167, category: "Vintage Office", brand: "Vintage", description: "1950s Royal typewriter in working condition" }
  ]
}

export default uniqueProducts
