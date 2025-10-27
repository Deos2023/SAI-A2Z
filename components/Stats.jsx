// components/StatsSection.js
"use client"
import { useEffect, useRef, useState } from "react"

const StatItem = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <div
      ref={ref}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold gold-text mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-gray-300 font-sans">
        {label}
      </div>
    </div>
  )
}

const StatsSection = () => {
  return (
    <section className="section-padding bg-burgundy-900/80 backdrop-blur-sm">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold gold-text mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Years of excellence in creating unforgettable events for our valued clients
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatItem end={5} label="Years of Service" suffix="+" />
          <StatItem end={500} label="Events Hosted" suffix="+" />
          <StatItem end={1000} label="Happy Clients" suffix="+" />
          <StatItem end={98} label="Success Rate" suffix="%" />
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-burgundy-800/50 rounded-xl border border-accent-gold/20">
            <div className="text-lg font-semibold gold-text mb-1">24/7</div>
            <div className="text-sm text-gray-300">Support</div>
          </div>
          <div className="text-center p-4 bg-burgundy-800/50 rounded-xl border border-accent-gold/20">
            <div className="text-lg font-semibold gold-text mb-1">50+</div>
            <div className="text-sm text-gray-300">Vendor Partners</div>
          </div>
          <div className="text-center p-4 bg-burgundy-800/50 rounded-xl border border-accent-gold/20">
            <div className="text-lg font-semibold gold-text mb-1">5★</div>
            <div className="text-sm text-gray-300">Rated Service</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection