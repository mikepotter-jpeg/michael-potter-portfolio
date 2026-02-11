import { Metadata } from 'next'
import Link from 'next/link'
import ContactSection from '@/components/contact-section'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Me | Michael Potter',
  description: 'Product designer with 5+ years experience building digital products across government, energy, and retail.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-5">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              About me
            </h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 md:py-28">
        <div className="w-full max-w-7xl mx-auto px-5">
          <div className="max-w-4xl prose-custom">
            <p className="text-lead">
              I&apos;m a product designer who started out designing physical things. Furniture, objects, things you hold in your hands. That background in industrial design taught me to pay attention to how people actually use what you put in front of them, and it still carries through in my digital work.
            </p>
            
            <p>
              After studying industrial design, I shifted into digital products and found the same thinking applied: understand the person, reduce complexity, make the thing feel obvious. Over the past decade I&apos;ve designed enterprise platforms across government, energy, and retail. Systems where thousands of people need things to work clearly, first time.
            </p>
            
            <p>
              Most of my recent work has been in government digital services. At the Department of Agriculture, I led experience design for the Export Service, a platform used by over 2,000 regulated businesses. I was the design lead in a 16-person delivery team, working across authentication, account management, and regulatory compliance. A lot of that work was about balancing serious security requirements with the need for things to actually make sense to the people using them.
            </p>
            
            <p>
              I care about accessibility, design systems, and understanding how something will actually get built. I do my best work when I&apos;m close to developers and stakeholders, not handing off screens but shaping the product together.
            </p>
            
            <p>
              Outside of work, I bake sourdough (cold fermentation, always), collect mid-century furniture, and walk my dog Mango around Sydney.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection 
        heading="Let's work together"
        description="If you are building something meaningful and need a thoughtful design partner, I'd love to hear from you."
        className="pt-20 md:pt-28 pb-12"
      />

      {/* Back Link */}
      <section className="pt-16 pb-20">
        <div className="w-full max-w-7xl mx-auto px-5">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to home
          </Link>
        </div>
      </section>
    </div>
  )
}
