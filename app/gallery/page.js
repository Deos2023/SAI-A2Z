// app/gallery/page.js
import GalleryGrid from '@/components/GalleryGrid'
import SectionTitle from '@/components/SectionTitle'

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Gallery"
            subtitle="Take a look at some of our successfully executed events. Each event tells a unique story of celebration and perfection."
            centered
          />
          <GalleryGrid />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Events Planned" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Weddings Executed" },
              { number: "100+", label: "Corporate Events" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}