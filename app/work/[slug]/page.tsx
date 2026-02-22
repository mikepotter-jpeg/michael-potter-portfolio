import { Metadata } from 'next'
import NextLink from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import TableOfContents from '@/components/table-of-contents'
import ContactSection from '@/components/contact-section'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import NextProjectCard from '@/components/next-project-card'
import { ChevronUp } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
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
      <section id="top" className="py-section-md md:py-section-lg bg-background-secondary scroll-mt-20">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 text-[0.875rem] leading-none text-text-tertiary mb-8" aria-label="Breadcrumb">
            <NextLink href="/#work-section" className="hover:text-text-primary transition-fast">
              My work
            </NextLink>
            <span aria-hidden="true">›</span>
            <span className="text-text-primary">{project.title}</span>
          </nav>

          <header className="max-w-2xl xl:max-w-[740px] space-y-6">
            <h1 className="text-heading-2 md:text-heading-1">
              {project.title}
            </h1>

            <p className="text-lead text-text-secondary">
              {project.description}
            </p>

            {/* Meta info */}
            <dl className="flex flex-wrap gap-16 pt-4">
              <div>
                <dt className="text-[0.875rem] leading-none font-semibold text-text-primary mb-1">Client</dt>
                <dd className="text-[0.875rem] leading-none text-text-secondary">{project.client}</dd>
              </div>
              <div>
                <dt className="text-[0.875rem] leading-none font-semibold text-text-primary mb-1">Timeline</dt>
                <dd className="text-[0.875rem] leading-none text-text-secondary">{project.years}</dd>
              </div>
              <div>
                <dt className="text-[0.875rem] leading-none font-semibold text-text-primary mb-1">Role</dt>
                <dd className="text-[0.875rem] leading-none text-text-secondary">{project.role}</dd>
              </div>
            </dl>

            {/* Impact stats */}
            {project.stats && project.stats.length > 0 && (
              <div className="flex flex-wrap items-center gap-0 pt-4 border-t border-border-light">
                {project.stats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center">
                    <div className="py-4 pr-10">
                      <div className="text-heading-3 md:text-heading-2 font-sans font-bold text-text-primary leading-none mb-2">
                        {stat.value}
                      </div>
                      <div className="text-[0.875rem] leading-none text-text-tertiary">
                        {stat.label}
                      </div>
                    </div>
                    {index < project.stats!.length - 1 && (
                      <div className="h-12 w-px bg-border-light mr-10 self-center" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </header>
        </Container>
      </section>

      {/* Cover Image */}
      {project.coverImage && (
        <section className="py-section-md">
          <Container>
            <div className="relative aspect-video rounded-card-lg overflow-hidden bg-background-secondary">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-cover"
                priority
              />
            </div>
          </Container>
        </section>
      )}

      {/* Static Table of Contents - visible below xl */}
      {project.tableOfContents && project.tableOfContents.length > 0 && (
        <section className="xl:hidden py-8 border-t border-border">
          <Container>
            <nav aria-label="Page contents">
              <p className="text-[0.875rem] leading-none text-text-tertiary mb-4">On this page</p>
              <ul className="space-y-1 text-[0.875rem] leading-none">
                {project.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="no-underline block py-1.5 min-h-[44px] leading-snug text-text-tertiary hover:text-text-primary transition-fast"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </section>
      )}

      {/* Content Sections with Sticky Sidebar TOC */}
      <section className="py-section-md">
        <Container>
          <div className="flex gap-10 xl:gap-16">
            {/* Sticky Sidebar TOC - Left column on xl screens */}
            {project.tableOfContents && project.tableOfContents.length > 0 && (
              <aside className="hidden xl:block w-44 shrink-0">
                <TableOfContents items={project.tableOfContents} />
              </aside>
            )}

            {/* Main content */}
            <div className="min-w-0 w-full max-w-2xl xl:max-w-[740px] space-y-20">
              {project.sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-heading-3 md:text-heading-2 mb-8">
                    {section.title}
                  </h2>
                  <div 
                    className="prose-custom"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                  {/* Back to top link - visible on smaller screens without sidebar */}
                  <Button asChild variant="link" size="sm" className="xl:hidden mt-10">
                    <a href="#top" className="no-underline">
                      Top
                      <ChevronUp size={14} className="group-hover:scale-110" />
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Next Project */}
      {nextProject && nextProject.slug !== project.slug && (
        <section className="py-section-md border-t border-border-light">
          <Container>
            <NextProjectCard
              slug={nextProject.slug}
              title={nextProject.title}
              description={nextProject.description}
              coverImage={nextProject.coverImage}
            />
          </Container>
        </section>
      )}

      {/* CTA */}
      <ContactSection className="py-16 md:py-20" />
    </div>
  )
}
