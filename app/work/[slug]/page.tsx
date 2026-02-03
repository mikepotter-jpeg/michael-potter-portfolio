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
  const allProjects = getAllProjects()

  if (!project) {
    notFound()
  }

  // Find next project
  const currentIndex = allProjects.findIndex(p => p.slug === project.slug)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="top" className="py-16 md:py-24 px-5 bg-background-secondary scroll-mt-20">
        <div className="w-full max-w-content mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 text-sm text-text-tertiary mb-8">
            <Link href="/work" className="hover:text-text-primary transition-colors">
              My work
            </Link>
            <span>›</span>
            <span className="text-text-primary">{project.title}</span>
          </nav>

          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              {project.description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-sm font-semibold text-text-primary mb-1">Client</p>
                <p className="text-text-secondary">{project.client}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary mb-1">Timeline</p>
                <p className="text-text-secondary">{project.years}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {project.coverImage && (
        <section className="px-5 py-16">
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

      {/* Content Sections with Sticky Sidebar TOC */}
      <section className="py-16 px-5">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex gap-12 xl:gap-20">
            {/* Sticky Sidebar TOC - Left column on xl screens */}
            {project.tableOfContents && project.tableOfContents.length > 0 && (
              <aside className="hidden xl:block w-48 shrink-0">
                <nav 
                  aria-label="Page contents" 
                  className="sticky top-32"
                >
                  {/* Back to top */}
                  <a 
                    href="#top" 
                    className="no-underline block text-text-tertiary hover:text-action transition-colors mb-5 text-lg leading-none"
                    aria-label="Back to top"
                  >
                    ⌃
                  </a>
                  
                  {/* Section links */}
                  <ul className="space-y-2.5 text-sm">
                    {project.tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`}
                          className="block text-text-tertiary hover:text-text-primary transition-colors leading-snug"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            {/* Main content */}
            <div className="max-w-3xl w-full space-y-20">
              {project.sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
                    {section.title}
                  </h2>
                  <div 
                    className="prose prose-lg max-w-none
                      prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-text-primary
                      prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
                      prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
                      prose-ul:text-text-secondary prose-ul:my-6 prose-ul:space-y-2
                      prose-li:leading-relaxed
                      prose-strong:text-text-primary prose-strong:font-semibold
                      prose-img:rounded-2xl prose-img:my-8
                      prose-figure:my-10"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                  {/* Back to top link - visible on smaller screens without sidebar */}
                  <a 
                    href="#top"
                    className="xl:hidden inline-flex items-center gap-2 mt-8"
                  >
                    Back to top
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M8 13V3M3 8l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      {nextProject && nextProject.slug !== project.slug && (
        <section className="py-16 px-5 border-t border-border bg-background-secondary">
          <div className="w-full max-w-content mx-auto">
            <p className="text-sm font-semibold text-text-tertiary mb-2">Next Project</p>
            <Link 
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold"
            >
              {nextProject.title}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 px-5">
        <div className="w-full max-w-content mx-auto text-center">
          <p className="text-text-tertiary mb-4">Interested in working together?</p>
          <a 
            href="mailto:michaelsavagepotter@gmail.com" 
            className="inline-flex items-center gap-2 text-2xl font-semibold"
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
