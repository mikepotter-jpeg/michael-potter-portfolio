import Link from 'next/link'
import WorkCard from '@/components/work-card'
import Recommendation from '@/components/recommendation'
import { getAllProjects, recommendations } from '@/lib/projects'

export default function Home() {
  const projects = getAllProjects()

  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width, dramatic */}
      <section className="min-h-[70vh] flex items-center justify-center py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl animate-fade-in-up">
            Hi, I&apos;m Michael, a product designer in Sydney.
          </h1>
        </div>
      </section>

      {/* About Snippet - Distinct section */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="w-full max-w-7xl mx-auto px-5">
          <div className="max-w-4xl space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl leading-[1.4] tracking-tight text-text-primary">
              I specialise in enterprise product design, with experience in account systems, 
              permissions, and identity workflows where clarity matters.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl leading-[1.5] tracking-tight text-text-secondary">
              I&apos;ve led design for government, energy, and retail serving thousands of customers and businesses. 
              I use research to inform decisions and partner with engineering to deliver.
            </p>
            <div className="pt-6">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-3 text-lg"
              >
                Learn more about me
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-20 md:py-28">
        <div className="w-full max-w-7xl mx-auto px-5">
          {/* Section Header */}
          <div className="flex flex-col gap-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Some of my work
            </h2>
            <p className="text-body max-w-xl">
              End-to-end product design for government, energy, and retail—serving thousands of users.
            </p>
          </div>

          {/* Project Cards */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <WorkCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                categories={project.categories}
                coverImage={project.coverImage}
                client={project.client}
                years={project.years}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="w-full max-w-7xl mx-auto px-5">
          {/* Section Header */}
          <header className="mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Kind words
            </h2>
            <p className="text-body mt-6 max-w-2xl">
              From colleagues I&apos;ve had the pleasure of working with over the years.
            </p>
          </header>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <Recommendation
                key={index}
                quote={rec.quote}
                name={rec.name}
                role={rec.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Bold and simple */}
      <section className="py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            Let&apos;s connect
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
            I&apos;m exploring new opportunities and would love to hear about what you&apos;re building.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:michaelsavagepotter@gmail.com" 
              className="no-underline inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-background-primary rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email me
            </a>
            <a 
              href="https://linkedin.com/in/michaelpotter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-underline inline-flex items-center gap-2 px-8 py-4 border-2 border-text-primary text-text-primary rounded-full text-lg font-medium hover:bg-text-primary hover:text-background-primary transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
