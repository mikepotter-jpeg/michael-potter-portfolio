import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import TableOfContents from '@/components/table-of-contents'
import ContactSection from '@/components/contact-section'
import { Container } from '@/components/ui/container'
import NextProjectCard from '@/components/next-project-card'
import WorkHeroSection from '@/components/work-hero-section'
import WorkContentSection from '@/components/work-content-section'

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
      <WorkHeroSection
        title={project.title}
        description={project.description}
        client={project.client}
        years={project.years}
        role={project.role}
        stats={project.stats}
      />

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
                      className="underline-offset-4 hover:underline flex items-center min-h-[44px] py-1.5 transition-fast leading-snug text-text-tertiary hover:text-text-primary"
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
              {project.sections.map((section, index) => (
                <WorkContentSection
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  content={section.content}
                  index={index}
                />
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
