'use client'

import NextLink from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { CategoryBadge } from '@/components/ui/category-badge'

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
    <div
      className="group relative bg-background-secondary rounded-card-lg overflow-hidden card-hover border border-border active:scale-[0.99]"
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
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
          <div className="space-y-5">
            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <CategoryBadge key={category}>
                    {category}
                  </CategoryBadge>
                ))}
              </div>
            )}

            <div className="space-y-3">
              <h3 className="text-heading-4 md:text-heading-3 transition-medium">
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[length:100%_1.5px]">
                  {title}
                </span>
              </h3>
              <p className="text-body text-text-secondary leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>

            {/* View Project - styled as link, parent card handles navigation */}
            <span className="inline-flex items-center gap-1.5 pt-1 text-[0.875rem] leading-none font-medium text-text-primary group-hover:text-accent transition-medium">
              View project
              <ArrowRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
