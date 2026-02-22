import NextLink from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface NextProjectCardProps {
  slug: string
  title: string
  description?: string
  coverImage?: string
}

export default function NextProjectCard({ slug, title, description, coverImage }: NextProjectCardProps) {
  return (
    <NextLink
      href={`/work/${slug}`}
      className="group flex flex-col gap-8 no-underline"
      aria-label={`View ${title} project`}
    >
      <div className="flex items-center gap-3">
        <span className="text-[0.875rem] leading-none font-medium text-text-tertiary tracking-wide">Up next</span>
        <ArrowRight size={14} className="text-text-tertiary transition-transform duration-300 ease-out group-hover:translate-x-1" />
      </div>

      {/* Image and content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image */}
        {coverImage && (
          <div className="relative lg:flex-1 aspect-video rounded-card-lg overflow-hidden bg-background-secondary">
            <Image
              src={coverImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col justify-center lg:flex-1">
          <div className="space-y-3">
            <h3 className="text-heading-4 md:text-heading-3">
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out group-hover:bg-[length:100%_1.5px]">
                {title}
              </span>
            </h3>
            {description && (
              <p className="text-body text-text-secondary leading-relaxed max-w-2xl line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </NextLink>
  )
}
