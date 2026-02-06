import Link from 'next/link'
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
    <Link 
      href={`/work/${slug}`}
      className="no-underline group block bg-background-secondary rounded-3xl overflow-hidden card-hover"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Cover Image */}
        <div className="relative lg:w-1/2 aspect-[4/3] lg:aspect-auto bg-border/10 overflow-hidden">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
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
        <div className="lg:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 text-sm bg-background-primary rounded-full text-text-tertiary"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                {description}
              </p>
            </div>

            {/* View Project Link */}
            <div className="flex items-center gap-2 text-text-primary font-medium pt-2">
              <span className="underline underline-offset-4 decoration-border group-hover:decoration-action transition-colors">View project</span>
              <ArrowRight 
                size={20} 
                className="text-text-tertiary group-hover:text-action transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
