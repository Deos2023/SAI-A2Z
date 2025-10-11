// components/GalleryGrid.js
"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ExternalLink } from 'lucide-react'
import galleryData from '@/data/gallery.json'

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }))
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            onClick={() => setSelectedImage(image)}
          >
            {/* Image Container */}
            <div className="aspect-[4/3] relative overflow-hidden bg-gray-800">
              {/* Loading Skeleton */}
              {!loadedImages[image.id] && (
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy-800 to-burgundy-900 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-accent-gold border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Actual Image */}
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedImages[image.id] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(image.id)}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-accent-gold text-burgundy-900 rounded-full text-xs font-bold uppercase tracking-wide">
                  {image.category}
                </span>
              </div>
              
              {/* Hover Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white font-cinzel font-bold text-xl mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {image.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-accent-gold text-sm font-semibold">
                    View Details
                  </span>
                  <div className="flex items-center space-x-2">
                    <ZoomIn size={20} className="text-accent-gold" />
                  </div>
                </div>
              </div>
              
              {/* Quick View Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent-gold/30">
                  <ExternalLink size={16} className="text-accent-gold" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-burgundy-800 hover:bg-burgundy-700 text-accent-gold rounded-full flex items-center justify-center shadow-2xl border border-accent-gold/30 hover:scale-110 transition-all duration-300"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="bg-burgundy-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-accent-gold/20 overflow-hidden">
                {/* Image */}
                <div className="relative aspect-video bg-gray-900">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-accent-gold text-burgundy-900 rounded-full text-sm font-bold uppercase tracking-wide mb-2">
                        {selectedImage.category}
                      </span>
                      <h3 className="text-2xl font-cinzel font-bold gold-text">
                        {selectedImage.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">Event Type</div>
                      <div className="text-accent-gold font-semibold capitalize">
                        {selectedImage.category}
                      </div>
                    </div>
                  </div>
                  
                  {selectedImage.description && (
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedImage.description}
                    </p>
                  )}
                  
                  {/* Additional Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-accent-gold/20">
                    {selectedImage.venue && (
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Venue</div>
                        <div className="text-accent-gold font-semibold">{selectedImage.venue}</div>
                      </div>
                    )}
                    {selectedImage.guests && (
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Guests</div>
                        <div className="text-accent-gold font-semibold">{selectedImage.guests}</div>
                      </div>
                    )}
                    {selectedImage.date && (
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Date</div>
                        <div className="text-accent-gold font-semibold">{selectedImage.date}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GalleryGrid