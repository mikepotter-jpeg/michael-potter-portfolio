'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/ui/container'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function AboutPageClient() {
  return (
    <div className="flex flex-col bg-background-secondary">
      {/* Hero + content as one staggered reveal */}
      <motion.section
        className="pt-section-lg md:pt-section-xl pb-section-lg md:pb-section-lg"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <Container>
          <div className="max-w-4xl prose-custom">
            <motion.div variants={staggerItem}>
              <h1 className="text-heading-2 md:text-heading-1 mb-0">
                About me
              </h1>
            </motion.div>

            <motion.p
              className="text-lead mt-6"
              variants={staggerItem}
            >
              I came up through industrial design — furniture, lighting, joinery. It taught me to watch how people actually use things before deciding what to make. That thinking carried over when I moved into digital products.
            </motion.p>

            <motion.p variants={staggerItem}>
              For the past six years I&apos;ve designed enterprise platforms where the stakes are real — systems that regulated businesses depend on, where a confusing flow doesn&apos;t just frustrate users, it delays cargo at port. At the Department of Agriculture, I led design across a 16-person team for three years. We cut onboarding from weeks to days for 2,000+ exporters and reduced department processing time by over 40%. Before that, I shipped a wine subscription product at Dan Murphy&apos;s end-to-end in eight months — checkout, recurring payments, and an internal curation portal — reaching 500,000+ members on schedule.
            </motion.p>

            <motion.p variants={staggerItem}>
              I work closest to the edge where design meets delivery — pairing with developers on implementation gaps, contributing components back to design systems, advocating for phased releases before they reach scale. Research shapes what gets built: at DAFF, usability findings directly influenced the roadmap each quarter. I&apos;d rather shape something early than inherit a brief late.
            </motion.p>
          </div>
        </Container>
      </motion.section>
    </div>
  )
}
