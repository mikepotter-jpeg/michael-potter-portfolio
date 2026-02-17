'use client'

import { motion } from 'motion/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface WorkCardProps {
  slug: string
  title: string
  description: string
  categories?: string[]
  coverImage?: string
  client?: string
  years?: string
  index?: number
}

export default function WorkCard({ slug, title, description, categories = [], coverImage, index = 0 }: WorkCardProps) {
  return (
    <motion.div
      className="group relative bg-background-secondary rounded-card-lg overflow-hidden card-hover border border-border active:scale-[0.99]"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <NextLink
        href={`/work/${slug}`}
        className="absolute inset-0 z-20 no-underline"
        aria-label={`View ${title} project`}
      />
      <div className="flex flex-col lg:flex-row">
        {/* Cover Image */}
        <div className="relative lg:w-1/2 aspect-[4/3] lg:aspect-auto bg-border/10 overflow-hidden">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-medium"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-bold text-border/30">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-card md:p-card-lg lg:p-card-xl flex flex-col justify-center relative z-10">
          <div className="space-y-6">
            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 text-ui bg-background-primary rounded-full text-text-tertiary"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-heading-4 md:text-heading-3 group-hover:text-accent transition-medium">
                {title}
              </h3>
              <p className="text-body text-text-secondary leading-relaxed">
                {description}
              </p>
            </div>

            {/* View Project - styled as link, parent card handles navigation */}
            <span className="inline-flex items-center gap-1 pt-2 font-medium text-text-primary group-hover:text-accent transition-medium">
              View project
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
