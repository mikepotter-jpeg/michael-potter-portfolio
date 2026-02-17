'use client'

import { motion } from 'motion/react'
import WorkCard from '@/components/work-card'
import Recommendation from '@/components/recommendation'
import ContactSection from '@/components/contact-section'
import { Link } from '@/components/ui/link'
import { getAllProjects, recommendations } from '@/lib/projects'
import { ArrowRight } from 'lucide-react'
import { fadeInUp, ANIMATION_DURATION, STAGGER_DELAY } from '@/lib/animations'

export default function Home() {
  const projects = getAllProjects()

  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width, dramatic */}
      <section className="min-h-dvh-70 flex items-center justify-center py-section-lg md:py-section-xl">
        <div className="w-full max-w-container mx-auto px-4 sm:px-6">
          <motion.h1
            className="text-heading-2 md:text-heading-1 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Hi, I&apos;m Michael, a product designer in Sydney.
          </motion.h1>
        </div>
      </section>

      {/* About Snippet - Distinct section */}
      <section className="bg-background-secondary py-section-lg md:py-section-lg">
        <div className="w-full max-w-container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl space-y-6">
            <h2 className="sr-only">About</h2>
            <motion.p
              className="text-heading-4 md:text-heading-3 text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: STAGGER_DELAY.normal, ease: 'easeOut' }}
            >
              I specialise in enterprise product design, with experience in account systems,
              permissions and identity workflows where clarity matters.
            </motion.p>
            <motion.p
              className="text-body-lg md:text-body-xl text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: STAGGER_DELAY.normal * 2, ease: 'easeOut' }}
            >
              I&apos;ve led design for government, energy, and retail — serving thousands of customers and businesses.
              I use research to inform decisions and partner with engineering to deliver.
            </motion.p>
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: STAGGER_DELAY.normal * 3, ease: 'easeOut' }}
            >
              <Link href="/about">
                Learn more about me
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work-section" className="py-section-lg md:py-section-lg">
        <div className="w-full max-w-container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.header
            className="flex flex-col gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1">
              Some of my work
            </h2>
            <p className="text-body max-w-prose">
              Selected projects spanning product strategy and systems design.
            </p>
          </motion.header>

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
        <div className="w-full max-w-container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.header
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1">
              Kind words
            </h2>
            <p className="text-body mt-6 max-w-prose">
              From colleagues I&apos;ve had the pleasure of working with over the years.
            </p>
          </motion.header>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <Recommendation
                key={index}
                quote={rec.quote}
                name={rec.name}
                role={rec.role}
                linkedinUrl={rec.linkedinUrl}
                index={index}
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
