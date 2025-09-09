import Link from 'next/link'
import { ArrowRight, Code, Palette, Smartphone, Shield, Zap, Users, Headphones } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* Header */}
      <section className="section-padding bg-dark-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete e-commerce development solutions tailored to your business needs. 
              From template selection to custom development, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-Commerce Templates */}
            <div className="bg-dark-700 p-8 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">E-Commerce Templates</h3>
              <p className="text-gray-300 mb-6">
                Choose from 100+ professionally designed templates for different industries. 
                Each template is fully customizable and optimized for conversions.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li>• 12 different categories</li>
                <li>• Multiple color schemes</li>
                <li>• Mobile responsive design</li>
                <li>• SEO optimized</li>
              </ul>
              <Link href="/templates" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center gap-2">
                Browse Templates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Custom Development */}
            <div className="bg-dark-700 p-8 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Custom Development</h3>
              <p className="text-gray-300 mb-6">
                Fully customized e-commerce solutions built from scratch to meet your specific business requirements.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li>• Tailored functionality</li>
                <li>• Advanced integrations</li>
                <li>• Scalable architecture</li>
                <li>• Performance optimized</li>
              </ul>
              <Link href="/contact" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center gap-2">
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* UI/UX Design */}
            <div className="bg-dark-700 p-8 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
              <p className="text-gray-300 mb-6">
                Beautiful, user-friendly designs that convert visitors into customers. 
                We focus on creating exceptional user experiences.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li>• User research & analysis</li>
                <li>• Wireframing & prototyping</li>
                <li>• Visual design</li>
                <li>• Usability testing</li>
              </ul>
              <Link href="/contact" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Apps */}
            <div className="bg-dark-700 p-8 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mobile Applications</h3>
              <p className="text-gray-300 mb-6">
                Native and cross-platform mobile applications for iOS and Android. 
                Extend your e-commerce reach to mobile users.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li>• iOS & Android apps</li>
                <li>• Cross-platform solutions</li>
                <li>• Push notifications</li>
                <li>• Offline functionality</li>
              </ul>
              <Link href="/contact" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Security & Performance */}
            <div className="bg-dark-700 p-8 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Security & Performance</h3>
              <p className="text-gray-300 mb-6">
                Enterprise-grade security and performance optimization to keep your store 
                fast, secure, and reliable.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li>• SSL certificates</li>
                <li>• Performance optimization</li>
                <li>• Security audits</li>
                <li>• Backup solutions</li>
              </ul>
              <Link href="/contact" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Support & Maintenance */}
            <div className="bg-dark-700 p-8 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Support & Maintenance</h3>
              <p className="text-gray-300 mb-6">
                24/7 technical support and regular maintenance to keep your store 
                running smoothly and up-to-date.
              </p>
              <ul className="text-gray-400 mb-6 space-y-2">
                <li>• 24/7 technical support</li>
                <li>• Regular updates</li>
                <li>• Performance monitoring</li>
                <li>• Bug fixes & patches</li>
              </ul>
              <Link href="/contact" className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven development process to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Discovery</h3>
              <p className="text-gray-300">
                We analyze your business requirements and goals to create the perfect solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Design</h3>
              <p className="text-gray-300">
                Our designers create beautiful, user-friendly interfaces that convert visitors into customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Development</h3>
              <p className="text-gray-300">
                Our developers build your store using the latest technologies and best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Launch</h3>
              <p className="text-gray-300">
                We deploy your store and provide ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss your project and create the perfect e-commerce solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/templates" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Browse Templates
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}