import WorkCard from '@/components/work-card'
import Recommendation from '@/components/recommendation'
import ContactSection from '@/components/contact-section'
import { Link } from '@/components/ui/link'
import { getAllProjects, recommendations } from '@/lib/projects'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const projects = getAllProjects()

  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width, dramatic */}
      <section className="min-h-[70vh] flex items-center justify-center py-section-lg md:py-section-xl">
        <div className="w-full max-w-container mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-hero font-semibold tracking-tight leading-[1.1] max-w-4xl animate-fade-in-up">
            Hi, I&apos;m Michael, a product designer in Sydney.
          </h1>
        </div>
      </section>

      {/* About Snippet - Distinct section */}
      <section className="bg-background-secondary py-section-lg md:py-section-lg">
        <div className="w-full max-w-container mx-auto px-6">
          <div className="max-w-4xl space-y-6">
            <h2 className="sr-only">About</h2>
            <p className="text-heading-4 md:text-heading-3 text-text-primary">
              I specialise in enterprise product design, with experience in account systems,
              permissions and identity workflows where clarity matters.
            </p>
            <p className="text-body-lg md:text-body-xl text-text-secondary">
              I&apos;ve led design for government, energy, and retail — serving thousands of customers and businesses.
              I use research to inform decisions and partner with engineering to deliver.
            </p>
            <div className="pt-6">
              <Link href="/about">
                Learn more about me
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work-section" className="py-section-lg md:py-section-lg">
        <div className="w-full max-w-container mx-auto px-6">
          {/* Section Header */}
          <header className="flex flex-col gap-6 mb-16">
            <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1">
              Some of my work
            </h2>
            <p className="text-body max-w-prose">
              End-to-end product design for government, energy and retail, serving thousands of users.
            </p>
          </header>

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
      <section className="bg-background-secondary py-section-lg md:py-section-lg">
        <div className="w-full max-w-container mx-auto px-6">
          {/* Section Header */}
          <header className="mb-16">
            <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1">
              Kind words
            </h2>
            <p className="text-body mt-6 max-w-prose">
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
                linkedinUrl={rec.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection className="py-section-lg md:py-section-xl" />
    </div>
  )
}
