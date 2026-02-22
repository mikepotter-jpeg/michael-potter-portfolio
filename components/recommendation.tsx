'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/components/ui/link'
import { scrollFadeInUp } from '@/lib/animations'

interface RecommendationProps {
  quote: string
  name: string
  role: string
  linkedinUrl?: string
  index?: number
}

export default function Recommendation({ quote, name, role, linkedinUrl, index = 0 }: RecommendationProps) {
  return (
    <motion.div
      className="bg-background-primary rounded-card-lg p-card md:p-card-lg flex flex-col h-full border border-border-light"
      {...scrollFadeInUp}
      transition={{ ...scrollFadeInUp.transition, duration: 0.5, delay: index * 0.1 }}
    >
      {/* Quote mark */}
      <div className="text-5xl text-accent/20 leading-none mb-4 select-none" aria-hidden="true">&ldquo;</div>

      {/* Quote */}
      <div
        className="text-body text-text-secondary leading-relaxed flex-1 [&>p]:mb-4 [&>p:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: quote }}
      />

      {/* Attribution */}
      <div className="mt-8 pt-6 border-t border-border-light">
        <p className="font-semibold text-text-primary text-body">{name}</p>
        <p className="text-text-tertiary text-body-sm mt-1">{role}</p>
        {linkedinUrl && (
          <Link
            href={linkedinUrl}
            size="small"
            external
            className="mt-3"
          >
            Read full recommendation
            <ArrowUpRight size={14} />
          </Link>
        )}
      </div>
    </motion.div>
  )
}
