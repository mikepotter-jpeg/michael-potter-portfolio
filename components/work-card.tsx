import NextLink from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/components/ui/link'

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
    <NextLink
      href={`/work/${slug}`}
      className="no-underline group block bg-background-secondary rounded-card-lg overflow-hidden card-hover border border-border"
    >
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
        <div className="lg:w-1/2 p-card md:p-card-lg lg:p-card-xl flex flex-col justify-center">
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

            {/* View Project Link */}
            <div className="pt-2">
              <Link href={`/work/${slug}`} className="font-medium">
                View project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NextLink>
  )
}
