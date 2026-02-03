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
    <div className="flex flex-col items-center">
      <div className="w-full max-w-content px-5 py-10">
        <article className="space-y-12 pt-10">
          
          {/* Header */}
          <header className="max-w-text space-y-6">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-body-sm text-text-tertiary hover:text-text-primary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to work
            </Link>
            
            <h1 className="text-h1">{project.title}</h1>
            
            <p className="text-body-lg text-text-secondary">
              {project.description}
            </p>

            {/* Categories */}
            {project.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 text-body-sm bg-background-secondary rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Cover Image */}
          {project.coverImage && (
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-border/20">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          {project.content && (
            <div 
              className="max-w-text prose prose-lg prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-action prose-ul:text-text-secondary"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          )}

        </article>
      </div>
    </div>
  )
}
