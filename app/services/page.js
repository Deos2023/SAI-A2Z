// app/services/page.js
"use client"
import ServicesGrid from '@/components/ServicesGrid'
import SectionTitle from '@/components/SectionTitle'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-burgundy-50 via-white to-gold-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b91c1c' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-gray-900 mb-6">
              Our <span className="text-burgundy-700">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Complete event planning solutions tailored to your unique needs. From intimate gatherings 
              to grand celebrations, we handle every detail with perfection and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:9770966605"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-burgundy-600 text-white rounded-xl font-semibold hover:bg-burgundy-700 transition-colors duration-300 shadow-lg"
              >
                📞 Get Free Consultation
              </motion.a>
              <motion.a
                href="#process"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-burgundy-600 text-burgundy-600 rounded-xl font-semibold hover:bg-burgundy-600 hover:text-white transition-all duration-300"
              >
                Our Process ↓
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Comprehensive Event Services"
            subtitle="We offer end-to-end event planning solutions that cover every aspect of your special occasion. Our expertise ensures seamless execution and unforgettable experiences."
            centered
          />
          <ServicesGrid />
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section id="process" className="section-padding bg-gradient-to-br from-gray-50 to-burgundy-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-burgundy-600 to-gold-500"></div>
        
        <div className="container-custom relative z-10">
          <SectionTitle
            title="Our Proven Process"
            subtitle="We follow a systematic 4-step approach to ensure your event is executed flawlessly from concept to completion."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                step: "01",
                title: "Discovery & Consultation",
                description: "In-depth understanding of your vision, requirements, budget, and expectations",
                icon: "🎯",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02",
                title: "Strategic Planning",
                description: "Detailed event planning, vendor coordination, timeline creation, and budget allocation",
                icon: "📋",
                color: "from-green-500 to-emerald-500"
              },
              {
                step: "03",
                title: "Execution & Management",
                description: "Professional on-ground execution with real-time coordination and quality control",
                icon: "⚡",
                color: "from-orange-500 to-red-500"
              },
              {
                step: "04",
                title: "Post-Event Follow-up",
                description: "Feedback collection, media delivery, and maintaining long-term relationships",
                icon: "🌟",
                color: "from-purple-500 to-pink-500"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Process Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-burgundy-200">
                  {/* Step Number with Gradient */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-white font-bold text-2xl">{process.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-500">
                    {process.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-cinzel font-bold text-gray-900 mb-4 leading-tight">
                    {process.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                {/* Connector Line (except for last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-burgundy-200 to-gold-200 transform -translate-y-1/2 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose SAI-A2Z?"
            subtitle="We stand out from the competition with our commitment to excellence and attention to detail"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🏆",
                title: "10+ Years Experience",
                description: "Over a decade of successfully planning and executing events of all scales"
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                description: "No hidden costs with detailed breakdowns and budget optimization"
              },
              {
                icon: "🕒",
                title: "24/7 Support",
                description: "Round-the-clock availability for queries and emergency support"
              },
              {
                icon: "🤝",
                title: "Trusted Partners",
                description: "Network of reliable vendors and service providers"
              },
              {
                icon: "🎨",
                title: "Creative Solutions",
                description: "Innovative ideas and personalized themes for unique events"
              },
              {
                icon: "📊",
                title: "Detailed Planning",
                description: "Comprehensive checklists and contingency plans for flawless execution"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-cinzel font-semibold text-burgundy-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-6"
          >
            Ready to Create Magic?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss your event requirements and create something extraordinary together. 
            Your perfect event is just a conversation away.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="tel:9770966605" 
              className="px-8 py-4 bg-white text-burgundy-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              📞 Call: 9770966605
            </a>
            <a 
              href="https://wa.me/919770966605" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              💬 WhatsApp Now
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-burgundy-700 transition-all duration-300 transform hover:scale-105"
            >
              📧 Email Inquiry
            </a>
          </motion.div>
          
          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-gray-300"
          >
            <p className="flex items-center justify-center gap-2">
              <span>⭐ Free Consultation</span>
              <span>•</span>
              <span>📅 Flexible Scheduling</span>
              <span>•</span>
              <span>💰 Best Price Guarantee</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}