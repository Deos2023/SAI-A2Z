// app/contact/page.js
"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-600" />,
      title: "Visit Us",
      details: [
        "8/2/16-A, Arabinda Sarani",
        "East Kamalapur, Dumdum",
        "Kolkata, West Bengal 700028",
        "(Landmark: Kamalapur School)",
      ],
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600" />,
      title: "Call Us",
      details: ["9770966605", "9830204459"],
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: "Email Us",
      details: ["saia2zeventplanner@gmail.com"],
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 8:00 PM",
        "Sunday: 10:00 AM - 6:00 PM",
      ],
    },
  ];

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
                      <h3 className="text-lg font-semibold text-gray-900">
                        {info.title}
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
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
                className="bg-white p-6 rounded-xl shadow-lg mt-6 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-burgundy-600"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-cinzel font-bold text-gray-900">
                    Our Location
                  </h3>
                </div>

                <div className="aspect-video rounded-lg overflow-hidden shadow-md border border-gray-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.241212167909!2d88.4224324759964!3d22.646146979438395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e1d81b15f0f%3A0x7e4b4b4b4b4b4b4b!2sSAI-A2Z%20Event%20Planner!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SAI-A2Z Event Planner Location in Kolkata"
                    className="hover:opacity-90 transition-opacity duration-300"
                  ></iframe>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold">SAI-A2Z Event Planner</p>
                    <p>Dumdum, Kolkata, West Bengal</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/3AnuUUa7JeSZNw2R7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-burgundy-600 text-white rounded-lg font-semibold hover:bg-burgundy-700 transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8z" />
                    </svg>
                    Get Directions
                  </a>
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
  );
};

export default ContactPage;
