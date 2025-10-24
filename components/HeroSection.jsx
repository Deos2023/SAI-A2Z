// components/HeroSection.js
"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import galleryData from '@/data/gallery.json'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState({})

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryData.images.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  // Preload gallery images to eliminate flicker and ensure seamless transitions
  useEffect(() => {
    if (typeof window === 'undefined') return
    galleryData.images.forEach((img) => {
      const image = new window.Image()
      image.src = img.src
      if (image.complete) {
        setLoadedImages(prev => ({ ...prev, [img.id]: true }))
      } else {
        image.onload = () => {
          setLoadedImages(prev => ({ ...prev, [img.id]: true }))
        }
        image.onerror = () => {
          // Avoid indefinite skeleton if image fails
          setLoadedImages(prev => ({ ...prev, [img.id]: true }))
        }
      }
    })
  }, [])

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }))
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryData.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryData.images.length - 1 : prevIndex - 1
    )
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            {/* Loading Skeleton */}
            {!loadedImages[galleryData.images[currentImageIndex]?.id] && (
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy-800 to-burgundy-900 animate-pulse"></div>
            )}

            {/* Background Image */}
            <img
              src={galleryData.images[currentImageIndex]?.src}
              alt={galleryData.images[currentImageIndex]?.alt}
              loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
              fetchpriority={currentImageIndex === 0 ? 'high' : 'low'}
              decoding="async"
              className={`w-full h-full object-cover transition-opacity duration-1000 ${loadedImages[galleryData.images[currentImageIndex]?.id] ? 'opacity-100' : 'opacity-0'
                }`}
              onLoad={() => handleImageLoad(galleryData.images[currentImageIndex]?.id)}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/80 via-burgundy-800/60 to-burgundy-900/80"></div>

            {/* Additional Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold rounded-full mix-blend-soft-light filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute top-40 right-10 w-96 h-96 bg-burgundy-500 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
              <div className="absolute bottom-20 left-20 w-80 h-80 bg-burgundy-600 rounded-full mix-blend-soft-light filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 lg:left-8 z-20 w-12 h-12 bg-burgundy-800/80 hover:bg-burgundy-700/90 backdrop-blur-sm text-accent-gold rounded-full flex items-center justify-center border border-accent-gold/30 hover:scale-110 transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 lg:right-8 z-20 w-12 h-12 bg-burgundy-800/80 hover:bg-burgundy-700/90 backdrop-blur-sm text-accent-gold rounded-full flex items-center justify-center border border-accent-gold/30 hover:scale-110 transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {galleryData.images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? 'bg-accent-gold scale-125'
                : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-baseline space-x-4 md:space-x-6 whitespace-nowrap ml-10">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-cinzel font-bold gold-text leading-tight drop-shadow-2xl">
                  SAI A2Z
                </h1>
                <h2 className="text-lg md:text-3xl lg:text-4xl font-cinzel font-semibold gold-text drop-shadow-2xl">
                  EVENT PLANNER
                </h2>
              </div>
            </motion.div>

            {/* Current Event Type Badge */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-3 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-accent-gold/30"
            >
              <span className="text-sm font-semibold gold-text uppercase tracking-wide">
                {galleryData.images[currentImageIndex]?.category}
              </span>
              <span className="text-white text-sm">•</span>
              <span className="text-sm text-gray-300">
                {galleryData.images[currentImageIndex]?.title}
              </span>
            </motion.div>

            {/* Rating Badge */}
            <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-accent-gold/30">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold gold-text">Rated 5.0 by 200+ Clients</span>
            </div>

            <motion.p
              key={`desc-${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-2xl"
            >
              Complete event planning solutions in Kolkata. From intimate gatherings to grand celebrations,
              we bring your vision to life with perfection and elegance.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/get-quote" className="btn-primary transform hover:scale-105 transition-transform duration-300">
                Get Free Quote
              </Link>
              <a
                href="tel:9770966605"
                className="btn-secondary flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { number: "500+", label: "Events Planned" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "10+", label: "Years Experience" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gold-text mb-2 drop-shadow-2xl">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm drop-shadow-2xl">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-gold rounded-full flex justify-center backdrop-blur-sm bg-black/20"
        >
          <div className="w-1 h-3 bg-accent-gold rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection