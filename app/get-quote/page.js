// app/get-quote/page.js
import QuoteForm from '@/components/QuoteForm'
import SectionTitle from '@/components/SectionTitle'

export default function GetQuotePage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <SectionTitle
            title="Get Your Quote"
            subtitle="Fill out the form below and we'll send you a detailed quote via WhatsApp. Quick, easy, and convenient!"
            centered
          />
          <QuoteForm />
          
          {/* Additional Contact Options */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our event planners</p>
              <a href="tel:9770966605" className="btn-primary text-sm">
                Call Now
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick chat for instant responses</p>
              <a 
                href="https://wa.me/919770966605" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
              >
                Message Now
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">📧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send detailed requirements</p>
              <a 
                href="mailto:saia2zeventplanner@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}