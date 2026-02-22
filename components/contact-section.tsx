'use client'

import { motion } from 'motion/react'
import { Mail, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { scrollFadeInUp } from '@/lib/animations'

interface ContactSectionProps {
  heading?: string
  description?: string
  className?: string
}

export default function ContactSection({
  heading = "Let\u2019s talk",
  description = "Open to new opportunities. If you think we\u2019d work well together, I\u2019d love to hear from you.",
  className = "py-section-lg md:py-section-lg"
}: ContactSectionProps) {
  return (
    <section className={`${className}`}>
      <Container>
        <motion.div
          className="text-center bg-background-secondary rounded-card-lg px-6 py-16 md:px-12 md:py-20 border border-border-light"
          {...scrollFadeInUp}
        >
          <header className="mb-10">
            <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1 mb-6 text-text-primary">
              {heading}
            </h2>
            <p className="text-body md:text-body-lg text-text-secondary leading-relaxed max-w-prose mx-auto">
              {description}
            </p>
          </header>
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a href="mailto:michaelsavagepotter@gmail.com" className="w-full sm:w-auto no-underline">
              <Button iconLeft={<Mail />} className="w-full">
                Email me
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/michael-potter/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto no-underline">
              <Button variant="outline" iconRight={<ArrowUpRight />} className="w-full">
                LinkedIn
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
