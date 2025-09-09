'use client'

import { Star, Award, Truck, Shield, RotateCcw, Sparkles, Zap, Crown, Gem, Users, TrendingUp, Clock } from 'lucide-react'

// Unique section components for different templates
export const UniqueSections = {
  // Luxury Fashion - Elegant features section
  luxuryFashion: ({ template }: { template: any }) => (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Why Choose LUXE</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the pinnacle of luxury fashion with our exclusive collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Crown, title: "Exclusive Designers", desc: "Curated from world-renowned fashion houses" },
            { icon: Gem, title: "Premium Materials", desc: "Only the finest fabrics and craftsmanship" },
            { icon: Truck, title: "White Glove Delivery", desc: "Personal delivery with premium packaging" },
            { icon: Shield, title: "Lifetime Care", desc: "Complimentary alterations and maintenance" }
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),

  // Tech Store - Modern features with icons
  techStore: ({ template }: { template: any }) => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Excellence</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology with unbeatable service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Zap, title: "Latest Technology", desc: "Always up-to-date with the newest innovations", color: "blue" },
            { icon: Truck, title: "Fast Shipping", desc: "Same-day delivery available in major cities", color: "green" },
            { icon: Shield, title: "Extended Warranty", desc: "2-year comprehensive warranty on all products", color: "purple" }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),

  // Beauty Store - Soft features with gradients
  beautyStore: ({ template }: { template: any }) => (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Beauty Promise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your beauty journey starts with our premium products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Sparkles, title: "Natural Ingredients", desc: "Pure, organic ingredients for healthy skin" },
            { icon: Award, title: "Expert Approved", desc: "Recommended by beauty professionals worldwide" },
            { icon: Truck, title: "Free Shipping", desc: "Complimentary delivery on orders over $75" },
            { icon: RotateCcw, title: "Satisfaction Guarantee", desc: "100% money-back guarantee on all products" }
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),

  // Gaming Store - Neon features with dark theme
  gamingStore: ({ template }: { template: any }) => (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-mono">GAMING POWER</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Level up your gaming experience with premium hardware
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Zap, title: "HIGH PERFORMANCE", desc: "Top-tier gaming hardware for maximum FPS", color: "cyan" },
            { icon: Clock, title: "LOW LATENCY", desc: "Ultra-fast response times for competitive gaming", color: "purple" },
            { icon: Crown, title: "PREMIUM QUALITY", desc: "Professional-grade components built to last", color: "pink" }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-${feature.color}-500 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-mono">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),

  // Vintage Store - Retro features with warm colors
  vintageStore: ({ template }: { template: any }) => (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-amber-900 mb-4">Vintage Heritage</h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Authentic vintage pieces with timeless appeal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "Authentic Vintage", desc: "Genuine pieces from the golden era" },
            { icon: Users, title: "Expert Curation", desc: "Carefully selected by vintage specialists" },
            { icon: Truck, title: "Careful Shipping", desc: "Specialized packaging for delicate items" },
            { icon: Shield, title: "Authenticity Guarantee", desc: "Certificate of authenticity with every purchase" }
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-amber-100" />
              </div>
              <h3 className="text-xl font-serif text-amber-900 mb-3">{feature.title}</h3>
              <p className="text-amber-700 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),

  // Testimonials section for luxury fashion
  luxuryTestimonials: ({ template }: { template: any }) => (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust LUXE
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Johnson", text: "The quality is absolutely exceptional. Every piece feels like a work of art.", rating: 5 },
            { name: "Michael Chen", text: "Outstanding service and the most beautiful collection I've ever seen.", rating: 5 },
            { name: "Emma Williams", text: "LUXE has become my go-to for all special occasions. Simply perfect.", rating: 5 }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <p className="text-yellow-500 font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),

  // Newsletter section for beauty store
  beautyNewsletter: ({ template }: { template: any }) => (
    <section className="py-20 bg-gradient-to-r from-rose-400 to-pink-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-white mb-4">Stay Beautiful</h2>
        <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
          Get exclusive beauty tips and early access to new products
        </p>
        
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-l-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-rose-500 px-8 py-4 rounded-r-full font-semibold hover:bg-rose-50 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default UniqueSections
