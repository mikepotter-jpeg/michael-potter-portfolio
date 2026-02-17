'use client'

import { motion } from 'motion/react'
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ContactSectionProps {
  heading?: string
  description?: string
  className?: string
}

export default function ContactSection({
  heading = "Let's connect",
  description = "I'm exploring new opportunities and would love to hear about what you're building.",
  className = "py-section-lg md:py-section-lg"
}: ContactSectionProps) {
  return (
    <section className={className}>
      <div className="w-full max-w-container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <motion.header
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1 mb-6">
              {heading}
            </h2>
            <p className="text-body md:text-body-lg text-text-secondary leading-relaxed max-w-prose mx-auto">
              {description}
            </p>
          </motion.header>
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="mailto:michaelsavagepotter@gmail.com">
                <Mail />
                Email me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/michael-potter/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
                LinkedIn
                <ArrowUpRight />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
