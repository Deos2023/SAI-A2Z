// components/SectionTitle.js
"use client"
import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${centered ? 'text-center' : ''} mb-12`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold gold-text mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  )
}

export default SectionTitle