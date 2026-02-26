'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Benefits } from '@/components/Benefits'
import { Testimonials } from '@/components/Testimonials'
import { LeadForm } from '@/components/LeadForm'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <Footer />
      <Analytics />
    </div>
  )
}