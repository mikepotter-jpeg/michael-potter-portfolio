import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found | Michael Potter',
    }
  }

  return {
    title: `${project.title} | Michael Potter`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-5">
        <div className="w-full max-w-content mx-auto">
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors mb-8 group"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to work
          </Link>

          <div className="max-w-3xl">
            {/* Categories */}
            {project.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 text-sm bg-background-secondary rounded-full text-text-tertiary"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {project.coverImage && (
        <section className="px-5 pb-16">
          <div className="w-full max-w-content mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-background-secondary">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      {project.content && (
        <section className="py-16 px-5">
          <div className="w-full max-w-content mx-auto">
            <div 
              className="max-w-3xl prose-custom"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </div>
        </section>
      )}

      {/* Next Project / CTA */}
      <section className="py-20 md:py-28 px-5 border-t border-border">
        <div className="w-full max-w-content mx-auto text-center">
          <p className="text-text-tertiary mb-4">Interested in working together?</p>
          <a 
            href="mailto:michaelsavagepotter@gmail.com" 
            className="inline-flex items-center gap-2 text-2xl font-semibold text-action hover:opacity-70 transition-opacity"
          >
            Get in touch
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
