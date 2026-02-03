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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-5">
        <div className="w-full max-w-content mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-text-tertiary font-medium mb-6">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              My work
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Selected projects from my career designing for government, energy, and retail. 
              Each project represents a unique challenge in turning complexity into clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-20 md:pb-28 px-5">
        <div className="w-full max-w-content mx-auto">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <WorkCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                categories={project.categories}
                coverImage={project.coverImage}
                index={index}
              />
            ))}
          </div>

          {/* More work coming */}
          {projects.length <= 1 && (
            <div className="mt-16 text-center py-16 border border-dashed border-border rounded-3xl">
              <p className="text-text-tertiary text-lg">
                More case studies coming soon...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-20 px-5">
        <div className="w-full max-w-content mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary transition-colors group"
          >
            <svg 
              width="20" 
              height="20" 
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
            Back to home
          </Link>
        </div>
      </section>
    </div>
  )
}
