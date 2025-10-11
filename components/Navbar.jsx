// components/Navbar.js
"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => pathname === path

  // Determine text color based on conditions
  const getTextColor = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white'
    }
    return 'text-gray-300'
  }

  const getHoverColor = () => {
    return 'hover:text-accent-gold'
  }

  const getActiveColor = () => {
    return 'text-accent-gold'
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-burgundy-800/95 backdrop-blur-md shadow-lg border-b border-accent-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className={`text-2xl md:text-3xl font-cinzel font-bold transition-colors duration-300 ${
              isHomePage && !isScrolled ? 'text-white' : 'text-accent-gold'
            }`}>
              SAI A2Z
            </span>
            <span className={`text-xs md:text-sm font-sans tracking-widest transition-colors duration-300 ${
              isHomePage && !isScrolled ? 'text-accent-gold' : 'text-gray-300'
            }`}>
              EVENT PLANNER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-sans font-medium transition-colors relative group ${
                  isActive(link.path)
                    ? getActiveColor()
                    : `${getTextColor()} ${getHoverColor()}`
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent-gold transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/get-quote"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Get Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors duration-300 ${
              isHomePage && !isScrolled ? 'text-white' : 'text-accent-gold'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-burgundy-800 border-t border-accent-gold/20"
            >
              <div className="flex flex-col space-y-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-sans font-medium px-4 py-2 transition-colors ${
                      isActive(link.path)
                        ? 'text-accent-gold bg-burgundy-700'
                        : 'text-gray-300 hover:text-accent-gold hover:bg-burgundy-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-4">
                  <Link
                    href="/get-quote"
                    className="btn-primary flex items-center justify-center space-x-2 w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={18} />
                    <span>Get Quote</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar