// components/Testimonials.js
export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      event: "Wedding Reception",
      text: "SAI A2Z made our wedding day absolutely magical! The staff was incredibly professional and the venue was stunning.",
      rating: 5
    },
    {
      name: "Rajiv Mehta",
      event: "Corporate Event",
      text: "Perfect venue for our annual corporate gathering. The facilities were top-notch and the service exceptional.",
      rating: 5
    },
    {
      name: "Anita Das",
      event: "Birthday Celebration",
      text: "We celebrated my father's 60th birthday here. The team went above and beyond to make it special. Highly recommended!",
      rating: 5
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-gold-500 text-xl">⭐</span>
            ))}
          </div>
          <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
          <div className="border-t pt-4">
            <p className="font-semibold text-burgundy-800">{testimonial.name}</p>
            <p className="text-gray-600 text-sm">{testimonial.event}</p>
          </div>
        </div>
      ))}
    </div>
  )
}