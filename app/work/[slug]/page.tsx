import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import TableOfContents from '@/components/table-of-contents'
import ContactSection from '@/components/contact-section'
import { Button } from '@/components/ui/button'
import { ChevronUp, ArrowRight } from 'lucide-react'

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
      <section id="top" className="py-16 md:py-24 bg-background-secondary scroll-mt-20">
        <div className="w-full max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 text-sm text-text-tertiary mb-8" aria-label="Breadcrumb">
            <Link href="/#work-section" className="hover:text-text-primary transition-colors">
              My work
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-text-primary">{project.title}</span>
          </nav>

          <header className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              {project.title}
            </h1>
            
            <p className="text-lead text-text-secondary">
              {project.description}
            </p>

            {/* Meta info */}
            <dl className="flex flex-wrap gap-8 pt-4">
              <div>
                <dt className="text-sm font-semibold text-text-primary mb-1">Client</dt>
                <dd className="text-text-secondary">{project.client}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-text-primary mb-1">Timeline</dt>
                <dd className="text-text-secondary">{project.years}</dd>
              </div>
            </dl>
          </header>
        </div>
      </section>

      {/* Cover Image */}
      {project.coverImage && (
        <section className="py-16">
          <div className="w-full max-w-7xl mx-auto px-6">
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

      {/* Static Table of Contents - visible below xl */}
      {project.tableOfContents && project.tableOfContents.length > 0 && (
        <section className="xl:hidden py-8 border-t border-border">
          <div className="w-full max-w-7xl mx-auto px-6">
            <nav aria-label="Page contents">
              <p className="text-sm text-text-tertiary mb-4">On this page</p>
              <ul className="flex flex-col gap-2 text-sm">
                {project.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-text-primary underline-offset-4 hover:underline transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      )}

      {/* Content Sections with Sticky Sidebar TOC */}
      <section className="py-16">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex gap-12 xl:gap-20">
            {/* Sticky Sidebar TOC - Left column on xl screens */}
            {project.tableOfContents && project.tableOfContents.length > 0 && (
              <aside className="hidden xl:block w-48 shrink-0">
                <TableOfContents items={project.tableOfContents} />
              </aside>
            )}

            {/* Main content */}
            <div className="max-w-4xl w-full space-y-20">
              {project.sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
                    {section.title}
                  </h2>
                  <div 
                    className="prose-custom"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                  {/* Back to top link - visible on smaller screens without sidebar */}
                  <Button asChild variant="ghost" size="sm" className="xl:hidden mt-10">
                    <a href="#top" className="no-underline">
                      Top
                      <ChevronUp size={14} />
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      {nextProject && nextProject.slug !== project.slug && (
        <section className="py-16 border-t border-border bg-background-secondary">
          <div className="w-full max-w-7xl mx-auto px-6">
            <p className="text-sm text-text-tertiary mb-3">Next project</p>
            <Button asChild variant="link" className="text-xl md:text-2xl font-semibold h-auto p-0 group">
              <Link href={`/work/${nextProject.slug}`} className="no-underline">
                {nextProject.title}
                <ArrowRight 
                  size={24} 
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </section>
      )}

      {/* CTA */}
      <ContactSection />
    </div>
  )
}
