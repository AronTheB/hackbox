'use client'


import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#b5956a' }}>
      <HeroSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
      <Analytics />
    </main>
  )
}
