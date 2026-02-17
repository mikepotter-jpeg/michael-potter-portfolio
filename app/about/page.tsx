import { Metadata } from 'next'
import AboutPageClient from '@/components/about-page-client'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'About Me | Michael Potter',
  description: 'Product designer with 5+ years experience building digital products across government, energy and retail.',
}

export default function AboutPage() {
  return (
    <>
      <AboutPageClient />
      <ContactSection
        heading="Let's work together"
        description="If you're building something meaningful and need a thoughtful design partner, I'd love to hear from you."
        className="pt-section-lg md:pt-section-lg pb-12 bg-background-primary"
      />
    </>
  )
}
