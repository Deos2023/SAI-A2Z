// components/Footer.js
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="burgundy-bg border-t border-accent-gold/20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-cinzel font-bold gold-text mb-4">SAI A2Z EVENT PLANNER</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your complete event planning solution in Kolkata. From intimate gatherings to grand celebrations, 
              we bring your vision to life with perfection and elegance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="gold-text" />
                <span className="text-gray-300">
                  8/2/16-A, Arabinda Sarani, East Kamalapur, Dumdum, Kolkata
                  <br />
                  (Landmark: Kamalapur School) Kolkata, West Bengal 700028
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="gold-text" />
                <span className="text-gray-300">9830204459 / 9770966605</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="gold-text" />
                <span className="text-gray-300">saia2zeventplanner@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold gold-text mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:gold-text transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-300 hover:gold-text transition-colors">
                Services
              </Link>
              <Link href="/gallery" className="block text-gray-300 hover:gold-text transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:gold-text transition-colors">
                Contact
              </Link>
              <Link href="/get-quote" className="block text-gray-300 hover:gold-text transition-colors">
                Get Quote
              </Link>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold gold-text mb-4">Business Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock size={18} className="gold-text" />
                <span>Monday - Saturday: 9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} className="gold-text" />
                <span>Sunday: 10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-gold/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Developed & Maintained by Digital Exposure Online Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer