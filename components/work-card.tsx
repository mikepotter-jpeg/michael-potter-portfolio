import Link from 'next/link'
import Image from 'next/image'

interface WorkCardProps {
  slug: string
  title: string
  description: string
  categories?: string[]
  coverImage?: string
}

export default function WorkCard({ slug, title, description, categories = [], coverImage }: WorkCardProps) {
  return (
    <Link 
      href={`/work/${slug}`}
      className="group block bg-background-secondary rounded-2xl p-6 transition-all hover:shadow-lg"
    >
      {/* Cover Image */}
      {coverImage && (
        <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-border/20">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="space-y-5">
        <div className="space-y-4">
          <h3 className="text-h3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-body text-text-secondary">
            {description}
          </p>
        </div>

        {/* Categories & Arrow */}
        <div className="flex items-center justify-between gap-4">
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-body-sm bg-background-primary rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
          
          {/* Arrow indicator */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-text-primary/0 group-hover:bg-text-primary transition-all">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-text-primary group-hover:text-background-secondary transition-colors"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
