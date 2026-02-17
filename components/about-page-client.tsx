'use client'

import { motion } from 'motion/react'

export default function AboutPageClient() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - reduced bottom padding so it doesn't stack with content section */}
      <motion.section
        className="pt-section-lg md:pt-section-xl pb-section-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="w-full max-w-container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-heading-2 md:text-heading-1">
              About me
            </h1>
          </div>
        </div>
      </motion.section>

      {/* About Content - no top padding; gap is from hero's pb-section-sm */}
      <motion.section
        className="pt-0 pb-section-lg md:pb-section-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full max-w-container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl prose-custom">
            <p className="text-lead">
              I started in industrial design: furniture, lighting, joinery. That work taught me to observe how people actually use what you build, and that discipline defines everything I do now.
            </p>

            <p>
              I shifted into digital products and found the same principles apply: understand your users, eliminate unnecessary complexity, make the system obvious. Over the past decade I&apos;ve designed enterprise platforms across government, energy and retail.
            </p>

            <p>
              These systems serve thousands of users who need reliability and precision from day one.
            </p>

            <p>
              Most of my recent work has been in government digital services. At the Department of Agriculture, I led experience design for the Export Service platform serving over 2,000 regulated businesses. I was design lead in a 16-person delivery team, working across authentication, account management and regulatory compliance. Balancing strict security requirements with usable, coherent interfaces.
            </p>

            <p>
              I&apos;m focused on accessibility, design systems and buildability. I work best when distilling high ambition into what&apos;s feasible, embedded with developers and stakeholders, actively shaping the product rather than handing off deliverables.
            </p>

            <p>
              Outside work: fermentation (sourdough, kefir and pickles), swimming, walking Mango in Sydney.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
