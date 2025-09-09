// Unique images for each template (100 different images)
export const templateImages: { [key: number]: string } = {
  // Fashion & Apparel (1-10)
  1: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop', // Luxury fashion
  2: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=400&fit=crop', // Evening wear
  3: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=400&fit=crop', // Leather jacket
  4: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=400&fit=crop', // Cashmere
  5: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=400&fit=crop', // Denim
  6: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop', // Handbag
  7: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop', // Watch
  8: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop', // Shoes
  9: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop', // Jewelry
  10: 'https://images.unsplash.com/photo-1506629905607-1b4a0b5b5b5b?w=600&h=400&fit=crop', // Sunglasses
  
  // Electronics (11-20)
  11: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop', // Tech workspace
  12: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop', // iPhone
  13: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop', // MacBook
  14: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=400&fit=crop', // Headphones
  15: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop', // iPad
  16: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=400&fit=crop', // Smartwatch
  17: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop', // Keyboard
  18: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop', // Monitor
  19: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop', // Gaming PC
  20: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop', // Console
  
  // Beauty & Health (21-30)
  21: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop', // Makeup
  22: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=400&fit=crop', // Skincare
  23: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop', // Hair care
  24: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop', // Perfume
  25: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop', // Brushes
  26: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop', // Spa
  27: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop', // Medical
  28: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop', // Health
  29: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop', // Wellness
  30: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop', // Vitamins
  
  // Home & Garden (31-40)
  31: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop', // Garden
  32: 'https://images.unsplash.com/photo-1416491905792-dd37f4d3b9a0?w=600&h=400&fit=crop', // Plants
  33: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=400&fit=crop', // Tools
  34: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop', // Furniture
  35: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop', // Decor
  36: 'https://images.unsplash.com/photo-1416491905792-dd37f4d3b9a0?w=600&h=400&fit=crop', // Seeds
  37: 'https://images.unsplash.com/photo-1416491905792-dd37f4d3b9a0?w=600&h=400&fit=crop', // Pots
  38: 'https://images.unsplash.com/photo-1574690250361-1ea86f8c1b51?w=600&h=400&fit=crop', // Irrigation
  39: 'https://images.unsplash.com/photo-1452784444945-3f422708fe5e?w=600&h=400&fit=crop', // Outdoor
  40: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=600&h=400&fit=crop', // Landscaping
  
  // Books & Media (41-50)
  41: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop', // Books
  42: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', // Library
  43: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop', // Reading
  44: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=600&h=400&fit=crop', // Fiction
  45: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop', // Business
  46: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop', // Cookbook
  47: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', // Children
  48: 'https://images.unsplash.com/photo-1549834125-82d3c48159fe?w=600&h=400&fit=crop', // Art
  49: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop', // History
  50: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop', // Magazine
  
  // Food & Beverage (51-60)
  51: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop', // Wine
  52: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&h=400&fit=crop', // Cheese
  53: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop', // Coffee
  54: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&h=400&fit=crop', // Chocolate
  55: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=400&fit=crop', // Olive oil
  56: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop', // Spices
  57: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop', // Gourmet
  58: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop', // Restaurant
  59: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop', // Bakery
  60: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop', // Organic
  
  // Sports & Fitness (61-70)
  61: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop', // Gym
  62: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop', // Running
  63: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop', // Sports
  64: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop', // Yoga
  65: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=400&fit=crop', // Fitness
  66: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=400&fit=crop', // Nutrition
  67: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=400&fit=crop', // Wearables
  68: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop', // Equipment
  69: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', // Outdoor
  70: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop', // Training
  
  // Automotive (71-80)
  71: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', // Car
  72: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop', // Parts
  73: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&h=400&fit=crop', // Tools
  74: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop', // Accessories
  75: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop', // Maintenance
  76: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', // Electronics
  77: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop', // Interior
  78: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', // Exterior
  79: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop', // Performance
  80: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop', // Tires
  
  // Pet Supplies (81-90)
  81: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop', // Pet
  82: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop', // Dog
  83: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=600&h=400&fit=crop', // Cat
  84: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=400&fit=crop', // Food
  85: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop', // Toys
  86: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop', // Beds
  87: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=600&h=400&fit=crop', // Grooming
  88: 'https://images.unsplash.com/photo-1594736797933-d0d8a6e2e3d7?w=600&h=400&fit=crop', // Health
  89: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop', // Accessories
  90: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=400&fit=crop', // Training
  
  // Toys & Games (91-100)
  91: 'https://images.unsplash.com/photo-1558060370-7e0b95fe9cdc?w=600&h=400&fit=crop', // Toys
  92: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop', // Games
  93: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop', // Action figures
  94: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop', // Board games
  95: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop', // Puzzles
  96: 'https://images.unsplash.com/photo-1558060370-7e0b95fe9cdc?w=600&h=400&fit=crop', // Educational
  97: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop', // Outdoor
  98: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop', // Electronics
  99: 'https://images.unsplash.com/photo-1565301289451-2b4c6a71c9fe?w=600&h=400&fit=crop', // Collectibles
  100: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop' // Party
}