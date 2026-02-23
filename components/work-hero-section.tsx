'use client'

import NextLink from 'next/link'
import { motion } from 'motion/react'
import { Container } from '@/components/ui/container'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface WorkHeroSectionProps {
  title: string
  description: string
  client: string
  years: string
  role: string
  stats?: { value: string; label: string }[]
}

export default function WorkHeroSection({
  title,
  description,
  client,
  years,
  role,
  stats,
}: WorkHeroSectionProps) {
  return (
    <motion.section
      id="top"
      className="py-section-md md:py-section-lg bg-background-secondary scroll-mt-20"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <Container>
        <motion.nav
          className="flex items-center gap-3 text-body-sm text-text-tertiary mb-8"
          aria-label="Breadcrumb"
          variants={staggerItem}
        >
          <NextLink href="/#work-section" className="hover:text-text-primary transition-fast">
            My work
          </NextLink>
          <span aria-hidden="true">›</span>
          <span className="text-text-primary">{title}</span>
        </motion.nav>

        <header className="max-w-2xl xl:max-w-[740px] space-y-6">
          <motion.h1
            className="text-heading-2 md:text-heading-1"
            variants={staggerItem}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lead text-text-secondary"
            variants={staggerItem}
          >
            {description}
          </motion.p>

          <motion.dl
            className="flex flex-wrap gap-16 pt-4"
            variants={staggerItem}
          >
            <div>
              <dt className="text-body-sm font-semibold text-text-primary mb-1">Client</dt>
              <dd className="text-body-sm text-text-secondary">{client}</dd>
            </div>
            <div>
              <dt className="text-body-sm font-semibold text-text-primary mb-1">Timeline</dt>
              <dd className="text-body-sm text-text-secondary">{years}</dd>
            </div>
            <div>
              <dt className="text-body-sm font-semibold text-text-primary mb-1">Role</dt>
              <dd className="text-body-sm text-text-secondary">{role}</dd>
            </div>
          </motion.dl>

          {stats && stats.length > 0 && (
            <motion.div
              className="flex flex-wrap items-center gap-0 pt-4 border-t border-border-light"
              variants={staggerItem}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  <div className="py-4 pr-10">
                    <div className="text-heading-3 md:text-heading-2 font-sans font-bold text-text-primary leading-none mb-2">
                      {stat.value}
                    </div>
                    <div className="text-body-sm text-text-tertiary">
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="h-12 w-px bg-border-light mr-10 self-center" aria-hidden="true" />
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </header>
      </Container>
    </motion.section>
  )
}
