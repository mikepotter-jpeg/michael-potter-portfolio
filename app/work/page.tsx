import { Metadata } from 'next'
import Link from 'next/link'
import WorkCard from '@/components/work-card'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'My Work | Michael Potter',
  description: 'Selected projects from my career designing for government, energy, and retail.',
}

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-content px-5 py-10">
        <div className="space-y-12 pt-10">
          
          {/* Header */}
          <div className="max-w-text space-y-6">
            <h1 className="text-h1">My work</h1>
            <p className="text-body-lg text-text-secondary">
              Selected projects from my career designing for government, energy, and retail.
            </p>
          </div>

          {/* Project Grid */}
          <div className="space-y-8">
            {projects.map((project) => (
              <WorkCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                categories={project.categories}
                coverImage={project.coverImage}
              />
            ))}
          </div>

          {/* Back Link */}
          <div className="pt-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-body text-text-tertiary hover:text-text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to home
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
