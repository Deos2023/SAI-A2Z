// app/contact/page.js
"use client"
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import SectionTitle from '@/components/SectionTitle'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: "Visit Us",
      details: [
        "8/2/16-A, Arabinda Sarani",
        "East Kamalapur, Dumdum",
        "Kolkata, West Bengal 700028",
        "(Landmark: Kamalapur School)"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: "Call Us",
      details: [
        "9770966605",
        "9830204459"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: "Email Us",
      details: [
        "saia2zeventplanner@gmail.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 8:00 PM",
        "Sunday: 10:00 AM - 6:00 PM"
      ]
    }
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <SectionTitle
            title="Get In Touch"
            subtitle="We'd love to hear from you. Get in touch with us for any event planning queries or to discuss your requirements."
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      {info.icon}
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg mt-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600 text-center p-4">
                    Google Maps Embed - 
                    <a 
                      href="https://maps.app.goo.gl/3AnuUU" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline ml-1"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage