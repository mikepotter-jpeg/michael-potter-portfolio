import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, ArrowLeft } from 'lucide-react'

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
              About
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="w-full max-w-7xl mx-auto px-5">
          <div className="max-w-4xl prose-custom">
            <p className="text-lead">
              I am a product and experience designer based in Sydney, with a decade of turning complex problems into simple, usable solutions.
            </p>
            
            <p>
              I started in industrial design, which shaped how I think about design: understand the problem, focus on people, and make things work in the real world. I now apply that same mindset to digital products.
            </p>
            
            <p>
              Over the past five years I have led experience design on a national export platform, partnered with Australian brands to rethink their digital services, and worked closely with engineers and stakeholders to deliver accessible, user centred outcomes.
            </p>
            
            <p>
              I enjoy translating messy business challenges into clear products that serve both organisations and the people who use them.
            </p>
            
            <p>
              If you are building something meaningful and need a thoughtful design partner, let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="w-full max-w-7xl mx-auto px-5">
          <header className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              What I Do
            </h2>
          </header>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div className="prose-custom">
              <h3>Product design</h3>
              <ul>
                <li>User research and discovery</li>
                <li>Interaction design and prototyping</li>
                <li>Design systems</li>
                <li>Usability testing and iteration</li>
              </ul>
            </div>
            
            <div className="prose-custom">
              <h3>Collaboration</h3>
              <ul>
                <li>Working with engineers to align implementation and design</li>
                <li>Facilitating workshops and co-design sessions</li>
                <li>Communicating decisions with clarity and transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-28">
        <div className="w-full max-w-7xl mx-auto px-5">
          <div className="max-w-4xl prose-custom">
            <header className="mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Experience
              </h2>
            </header>
            <p>
              I have worked on cross-discipline teams to solve design problems in high growth and regulated environments. My work spans early stage discovery through to launch and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="bg-background-secondary py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-5 text-center">
          <header className="mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Let&apos;s Talk
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto">
              If you think we might be a good fit, I&apos;d love to hear from you.
            </p>
          </header>
          <div className="flex justify-center">
            <a 
              href="mailto:michaelsavagepotter@gmail.com" 
              className="no-underline inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-background-primary rounded-md text-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={20} />
              Email me
            </a>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-20">
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
