// app/layout.js
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/ui/FloatingButton'

export const metadata = {
  title: 'SAI A2Z Event Planner - Professional Event Management in Kolkata',
  description: 'Complete event planning solutions in Kolkata. Wedding planning, corporate events, birthday parties, decorations, catering, and photography services.',
  keywords: 'event planner kolkata, wedding planning, corporate events, birthday parties, event management',
  authors: [{ name: 'SAI A2Z Event Planner' }],
  openGraph: {
    title: 'SAI A2Z Event Planner - Professional Event Management',
    description: 'Complete event planning solutions in Kolkata',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <FloatingButtons/>
        <Footer />
      </body>
    </html>
  )
}