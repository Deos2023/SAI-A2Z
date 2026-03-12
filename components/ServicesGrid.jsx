// components/ServicesGrid.js
"use client"
import { motion } from 'framer-motion'
import servicesData from '@/data/services.json'
import Link from 'next/link'

const ServicesGrid = ({ limit, showViewAll = false }) => {
  const services = limit ? servicesData.services.slice(0, limit) : servicesData.services

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon Container */}
            <div className="relative p-8 pb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {service.icon}
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-burgundy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-cinzel font-bold text-gray-900 mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-700 group/feature"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-burgundy-100 rounded-full flex items-center justify-center group-hover/feature:bg-burgundy-600 transition-colors duration-300">
                      <svg className="w-3 h-3 text-burgundy-600 group-hover/feature:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-burgundy-600 to-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            {/* Price/CTA Section */}
            <div className="px-8 pb-8 pt-4">
              <div className="flex items-center justify-between">
                {service.price && (
                  <div className="text-left">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="text-xl font-bold text-burgundy-700">{service.price}</div>
                  </div>
                )}
                <Link 
                  href={`/services/catering-services`}
                  className="px-6 py-2 bg-burgundy-600 text-white rounded-lg font-semibold hover:bg-burgundy-700 transition-colors duration-300 transform group-hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button for limited view */}
      {showViewAll && limit && servicesData.services.length > limit && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white rounded-xl font-cinzel font-semibold text-lg hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      )}
    </div>
  )
}

export default ServicesGrid