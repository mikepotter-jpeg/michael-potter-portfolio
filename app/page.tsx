'use client'

import { motion } from 'motion/react'
import WorkCard from '@/components/work-card'
import Recommendation from '@/components/recommendation'
import ContactSection from '@/components/contact-section'

import { Link } from '@/components/ui/link'
import { getAllProjects, recommendations } from '@/lib/projects'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { fadeInUp, scrollFadeInUp, STAGGER_DELAY } from '@/lib/animations'

export default function Home() {
  const projects = getAllProjects()

  return (
    <div className="flex flex-col">
      {/* Hero Section - Full width, dramatic */}
      <section className="min-h-dvh-70 flex flex-col items-center justify-center py-section-lg md:py-section-xl relative">
        <Container>
          <h1 className="text-heading-1 md:text-heading-display max-w-4xl text-text-primary">
            {['Hi, I\u2019m Michael,', 'a product designer', 'in Sydney.'].map((phrase, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {phrase}
              </motion.span>
            ))}
          </h1>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} className="text-text-tertiary/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Snippet - Distinct section */}
      <section className="bg-background-secondary py-section-lg md:py-section-lg">
        <Container>
          <div className="max-w-4xl space-y-6">
            <h2 className="sr-only">About</h2>
            <motion.p
              className="text-heading-4 md:text-heading-3 text-text-primary"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: STAGGER_DELAY.normal }}
            >
              Most of my work has been on products where getting it wrong has real costs — government compliance, account management, consumer subscriptions. I work best embedded with teams, close to the code and the customer.
            </motion.p>
            <motion.div
              className="pt-6"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: STAGGER_DELAY.normal * 3 }}
            >
              <Link href="/about">
                Learn more about me
                <ArrowRight size={16} className="group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Work Section */}
      <section id="work-section" className="py-section-lg md:py-section-lg">
        <Container>
          {/* Section Header */}
          <motion.header
            className="mb-12 md:mb-16"
            {...scrollFadeInUp}
          >
            <span className="text-[0.875rem] leading-none font-normal tracking-wide uppercase text-text-primary">Selected Work</span>
            <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1 mt-3">
              What I&apos;ve built
            </h2>
            <p className="text-body text-text-secondary mt-4 max-w-prose">
              Product design at scale — from government compliance to consumer subscriptions.
            </p>
          </motion.header>

          {/* Project Cards */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                }}
              >
                <WorkCard
                  slug={project.slug}
                  title={project.title}
                  description={project.description}
                  categories={project.categories}
                  coverImage={project.coverImage}
                  client={project.client}
                  years={project.years}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Recommendations Section */}
      <section className="bg-background-secondary py-section-lg md:py-section-lg">
        <Container>
          {/* Section Header */}
          <motion.header
            className="mb-12 md:mb-16"
            {...scrollFadeInUp}
          >
            <span className="text-[0.875rem] leading-none font-normal tracking-wide uppercase text-text-primary">Testimonials</span>
            <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1 mt-3">
              Kind words
            </h2>
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
        </Container>
      </section>

      {/* Contact CTA */}
      <ContactSection className="py-section-lg md:py-section-xl" />
    </div>
  )
}
