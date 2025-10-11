// components/FacilitiesPreview.js
import SectionTitle from './SectionTitle'

export default function FacilitiesPreview() {
  const facilities = [
    {
      icon: "🏢",
      title: "Premium Venue Partners",
      description: "Access to Kolkata's finest banquet halls and event spaces"
    },
    {
      icon: "🎪",
      title: "Decor & Theme Setup",
      description: "Customized decor solutions matching your event theme"
    },
    {
      icon: "🍽️",
      title: "Catering Services",
      description: "Gourmet catering with diverse menu options"
    },
    {
      icon: "🎵",
      title: "Entertainment",
      description: "DJ, live music, and entertainment arrangements"
    },
    {
      icon: "📸",
      title: "Photography & Videography",
      description: "Professional media coverage to capture your moments"
    },
    {
      icon: "🎁",
      title: "Guest Management",
      description: "Invitations, seating arrangements, and guest coordination"
    }
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {facilities.map((facility, index) => (
        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="text-4xl mb-4">{facility.icon}</div>
          <h3 className="text-xl font-cinzel font-semibold text-burgundy-800 mb-3">
            {facility.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {facility.description}
          </p>
        </div>
      ))}
    </div>
  )
}