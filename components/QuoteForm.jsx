// components/QuoteForm.js
"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    venue: '',
    requirements: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `🏢 *SAI A2Z Event Planner - Quote Request*

👤 *Contact Information:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}

🎉 *Event Details:*
• Event Type: ${formData.eventType}
• Event Date: ${formData.eventDate}
• Guest Count: ${formData.guestCount}
• Budget: ${formData.budget}
• Venue Preference: ${formData.venue || 'Not specified'}

📋 *Special Requirements:*
${formData.requirements || 'None'}

Please provide me with a detailed quote for the above requirements. Thank you!`

    const url = `https://wa.me/919770966605?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-burgundy-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-accent-gold/20"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
          <MessageCircle className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-2xl font-cinzel font-bold gold-text mb-2">
          Get Instant Quote via WhatsApp
        </h2>
        <p className="text-gray-300">
          Fill out the form below and we'll send you a detailed quote directly to your WhatsApp
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-burgundy-700/50 border border-accent-gold/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white placeholder-gray-400 transition-all duration-200"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-burgundy-700/50 border border-accent-gold/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white placeholder-gray-400 transition-all duration-200"
            placeholder="Your WhatsApp number"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-200 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-burgundy-700/50 border border-accent-gold/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white placeholder-gray-400 transition-all duration-200"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Event Type *
          </label>
          <select
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-burgundy-700/50 border border-accent-gold/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white transition-all duration-200"
          >
            <option value="" className="text-gray-400">Select event type</option>
            <option value="wedding" className="text-gray-800">Wedding</option>
            <option value="corporate" className="text-gray-800">Corporate Event</option>
            <option value="birthday" className="text-gray-800">Birthday Party</option>
            <option value="anniversary" className="text-gray-800">Anniversary</option>
            <option value="engagement" className="text-gray-800">Engagement</option>
            <option value="baby-shower" className="text-gray-800">Baby Shower</option>
            <option value="other" className="text-gray-800">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Event Date *
          </label>
          <input
            type="date"
            name="eventDate"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-burgundy-700/50 border border-accent-gold/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Expected Guest Count *
          </label>
          <select
            name="guestCount"
            required
            value={formData.guestCount}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-burgundy-700/50 border border-accent-gold/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white transition-all duration-200"
          >
            <option value="" className="text-gray-400">Select guest count</option>
            <option value="1-50" className="text-gray-800">1-50 Guests</option>
            <option value="51-100" className="text-gray-800">51-100 Guests</option>
            <option value="101-200" className="text-gray-800">101-200 Guests</option>
            <option value="201-500" className="text-gray-800">201-500 Guests</option>
            <option value="500+" className="text-gray-800">500+ Guests</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Budget Range *
          </label>
          <select
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-burgundy-700/50 border border-accent-gold/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white transition-all duration-200"
          >
            <option value="" className="text-gray-400">Select budget range</option>
            <option value="under-50000" className="text-gray-800">Under ₹50,000</option>
            <option value="50000-100000" className="text-gray-800">₹50,000 - ₹1,00,000</option>
            <option value="100000-300000" className="text-gray-800">₹1,00,000 - ₹3,00,000</option>
            <option value="300000-500000" className="text-gray-800">₹3,00,000 - ₹5,00,000</option>
            <option value="500000+" className="text-gray-800">₹5,00,000+</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-200 mb-2">
          Venue Preference
        </label>
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-burgundy-700/50 border border-accent-gold/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white placeholder-gray-400 transition-all duration-200"
          placeholder="Do you have a venue in mind?"
        />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-200 mb-2">
          Special Requirements
        </label>
        <textarea
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 bg-burgundy-700/50 border border-accent-gold/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-white placeholder-gray-400 transition-all duration-200"
          placeholder="Any specific requirements, themes, or services needed..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
      >
        <MessageCircle size={20} />
        <span>Get Quote on WhatsApp</span>
      </button>

      <p className="text-center text-sm text-gray-400 mt-4">
        We typically respond within 15 minutes during business hours
      </p>
    </motion.form>
  )
}

export default QuoteForm