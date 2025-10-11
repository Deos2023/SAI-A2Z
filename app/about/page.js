// app/about/page.js
"use client"
import { motion } from 'framer-motion'
import SectionTitle from '@/components/SectionTitle'
import { Heart, Users, Target, Award, Star, MapPin, Phone, Clock } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-10 h-10 text-burgundy-600" />,
      title: "Passion-Driven",
      description: "We pour our heart into every event, ensuring each detail reflects your vision and our commitment to excellence.",
      color: "from-red-50 to-pink-50",
      borderColor: "border-red-200"
    },
    {
      icon: <Users className="w-10 h-10 text-burgundy-600" />,
      title: "Collaborative Approach",
      description: "We work as an extension of your team, understanding your needs to create truly personalized experiences.",
      color: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Target className="w-10 h-10 text-burgundy-600" />,
      title: "Excellence in Execution",
      description: "From concept to completion, we maintain the highest standards of quality and professionalism.",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Award className="w-10 h-10 text-burgundy-600" />,
      title: "Innovative Solutions",
      description: "We constantly innovate with fresh ideas and trends to make your event unique and memorable.",
      color: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200"
    }
  ]

  const stats = [
    { number: "10+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "500+", label: "Events Planned", icon: <Star className="w-6 h-6" /> },
    { number: "1000+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Venue Partners", icon: <MapPin className="w-6 h-6" /> }
  ]

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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-gray-900 mb-6">
              About <span className="text-burgundy-700">SAI-A2Z</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              With over a decade of excellence in event planning, we&apos;ve been crafting unforgettable moments 
              and turning visions into reality for clients across Kolkata.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-cinzel font-bold text-gray-900 mb-6">
                  Your Trusted Event Planning Partner
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Founded with a vision to transform ordinary events into extraordinary experiences, 
                    <strong> SAI-A2Z Event Planner</strong> has been serving clients in Kolkata and surrounding areas 
                    for over 10 years with unparalleled dedication and expertise.
                  </p>
                  <p>
                    Our team of experienced professionals understands that every event tells a unique story. 
                    Whether it&apos;s an intimate family gathering or a grand corporate function, 
                    we approach each project with innovative ideas and meticulous attention to detail.
                  </p>
                  <p>
                    Based in <strong>Dumdum, Kolkata</strong>, we have built strong relationships with the city&apos;s best vendors 
                    and premium venues, ensuring we deliver exceptional quality and value for every celebration.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100"
                  >
                    <div className="flex justify-center mb-2 text-burgundy-600">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-cinzel font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Content Card */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative z-10">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-cinzel font-bold text-burgundy-800 mb-2">
                    Why Choose SAI-A2Z?
                  </h4>
                  <p className="text-gray-600">Experience the difference of working with professionals</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { text: "Complete end-to-end event management solutions", emoji: "🎯" },
                    { text: "Customized planning for every budget and style", emoji: "💎" },
                    { text: "Experienced and creative professional team", emoji: "👨‍💼" },
                    { text: "Strong network of trusted vendors across Kolkata", emoji: "🤝" },
                    { text: "24/7 dedicated customer support", emoji: "📞" },
                    { text: "Stress-free and seamless planning experience", emoji: "✨" },
                    { text: "Quality assurance and timely execution", emoji: "⏱️" },
                    { text: "Innovative themes and decor concepts", emoji: "🎨" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-burgundy-50 transition-colors duration-300"
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="text-gray-700 font-medium flex-1">{item.text}</span>
                      <div className="w-2 h-2 bg-burgundy-600 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500 rounded-2xl rotate-12 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-burgundy-600 rounded-2xl -rotate-12 opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Values"
            subtitle="The fundamental principles that guide every decision we make and every event we plan."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-gradient-to-br ${value.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border ${value.borderColor} overflow-hidden`}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600 to-burgundy-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-white rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-500">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-cinzel font-bold text-gray-900 mb-4 text-center">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-burgundy-600 to-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-burgundy-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-burgundy-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-burgundy-600" />
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To transform your vision into reality by delivering exceptional event planning services 
                that exceed expectations. We strive to create memorable experiences through innovative 
                solutions, attention to detail, and unwavering commitment to quality.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-gold-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-2xl font-cinzel font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be Kolkata&apos;s most trusted and innovative event planning partner, recognized for 
                our creativity, reliability, and ability to bring dreams to life. We envision a 
                future where every celebration we touch becomes an unforgettable masterpiece.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-burgundy-800 to-burgundy-700">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-6"
          >
            Ready to Create Something Amazing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Let&apos;s discuss your event vision and bring it to life with our expertise and passion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="tel:9770966605" 
              className="px-8 py-4 bg-white text-burgundy-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call: 9770966605
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-burgundy-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage