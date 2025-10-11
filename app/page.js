// app/page.js
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/Stats";
import SectionTitle from "@/components/SectionTitle";
import FacilitiesPreview from "@/components/FacilitiesPreview";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="About SAI-A2Z Event Planner"
                subtitle="Your Complete Event Planning Solution in Kolkata"
                align="left"
              />
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  SAI-A2Z is a premium event planning service in Kolkata
                  offering end-to-end solutions for weddings, receptions,
                  birthdays, and corporate events.
                </p>
                <p>
                  With access to over 4500 sq. ft. of luxurious banquet spaces,
                  complete with air conditioning, modern amenities, and our
                  professional event management team, we ensure every
                  celebration becomes a cherished memory that lasts a lifetime.
                </p>
                <p className="font-semibold text-burgundy-700">
                  From venue selection to execution - we handle everything from
                  A to Z!
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/about" className="btn-primary">
                  Learn More About Us
                </a>
                <a href="/services" className="btn-outline">
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Replace with your actual image */}
              <div className="aspect-video rounded-lg shadow-xl overflow-hidden relative">
                <Image
                  src="/imagges/wedding.jpg"
                  alt="SAI-A2Z Event Planning - Beautiful event setup"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Achievement Badges */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-2xl font-bold text-burgundy-700">500+</div>
                <div className="text-sm text-gray-600">
                  Events Successfully Planned
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gold-500 rounded-lg shadow-lg p-4 border">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-white">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Comprehensive Event Services"
            subtitle="From intimate gatherings to grand celebrations - we provide complete event planning solutions tailored to your vision and budget."
            centered
          />
          <ServicesGrid limit={6} />
          <div className="text-center mt-12">
            <a href="/services" className="btn-outline">
              View All Services & Packages
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-burgundy-50">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose SAI-A2Z?"
            subtitle="We go beyond just venue booking to deliver exceptional event experiences"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: "🎯",
                title: "End-to-End Planning",
                description:
                  "Complete event management from concept to execution",
              },
              {
                icon: "💰",
                title: "Budget Management",
                description:
                  "Transparent pricing and optimal resource utilization",
              },
              {
                icon: "🕒",
                title: "Time Efficiency",
                description: "Seamless coordination saving you time and effort",
              },
              {
                icon: "⭐",
                title: "Quality Assurance",
                description: "Premium vendors and quality service guaranteed",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-cinzel font-semibold text-burgundy-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Partner Venues & Facilities"
            subtitle="We work with Kolkata's finest banquet halls and venues equipped with modern amenities"
            centered
          />
          <FacilitiesPreview />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-burgundy-800">
        <div className="container-custom">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Don't just take our word for it - hear from our happy clients"
            centered
            light
          />
          <Testimonials />
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Simple Event Planning Process"
            subtitle="Four easy steps to your perfect event"
            centered
          />
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Understand your vision & requirements",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Customized plan with budget allocation",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Professional coordination & management",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Perfect event & happy memories",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-burgundy-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-cinzel font-semibold text-burgundy-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a free consultation with our event experts. Let SAI-A2Z handle
            all the details while you enjoy the journey to your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:9770966605" className="btn-primary-lg group">
              <span className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                Call Now: 9770966605
              </span>
            </a>
            <a
              href="https://wa.me/919770966605"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-lg group"
            >
              <span className="flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5" />
                Get Free Quote
              </span>
            </a>
          </div>
          <div className="mt-8 text-gray-300">
            <p>
              📍 Serving Kolkata & Surrounding Areas | ⏰ Open: 24/7 for
              Enquiries
            </p>
          </div>
        </div>
      </section>
      {/* <FloatingButtons/> */}
    </>
  );
}

// Icon components (same as before)
function PhoneIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485" />
    </svg>
  );
}
