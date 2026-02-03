import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Me | Michael Potter',
  description: 'Product designer with 5+ years experience building digital products across government, energy, and retail.',
}

export default function AboutPage() {
  const highlights = [
    { label: 'Location', value: 'Sydney, Australia' },
    { label: 'Role', value: 'Product Designer' },
    { label: 'Experience', value: '5+ years' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-5">
        <div className="w-full max-w-content mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-text-tertiary font-medium mb-6">About</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              About me
            </h1>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-background-secondary py-8 px-5 border-y border-border">
        <div className="w-full max-w-content mx-auto">
          <div className="flex flex-wrap gap-8 md:gap-16">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="text-sm text-text-tertiary mb-1">{item.label}</p>
                <p className="text-lg font-medium text-text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="py-20 md:py-28 px-5">
        <div className="w-full max-w-content mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Main bio */}
            <div className="space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed text-text-primary">
                I&apos;m a product designer with 5+ years&apos; experience building digital products 
                across government, energy, and retail.
              </p>
              
              <p className="text-lg leading-relaxed text-text-secondary">
                I started in industrial design, which grounded me in designing for people. 
                Today, I focus on turning complex business challenges into intuitive, user-centred 
                solutions that deliver real outcomes.
              </p>
              
              <p className="text-lg leading-relaxed text-text-secondary">
                I work best in close partnership with developers and stakeholders, shaping ideas 
                into scalable, elegant products that simplify complexity.
              </p>
            </div>

            {/* CTA Card */}
            <div className="lg:pt-4">
              <div className="bg-background-secondary rounded-3xl p-8 md:p-10 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Let&apos;s work together
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  If I sound like a fit for your team, I&apos;d love to hear from you. 
                  I&apos;m currently exploring new opportunities.
                </p>
                <a 
                  href="mailto:michaelsavagepotter@gmail.com" 
                  className="no-underline inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-background-primary rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-20 px-5">
        <div className="w-full max-w-content mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2"
          >
            Back to home
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
