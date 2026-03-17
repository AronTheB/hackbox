'use client'


import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#b5956a' }}>
      <HeroSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
