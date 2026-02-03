import Link from 'next/link'
import WorkCard from '@/components/work-card'
import Recommendation from '@/components/recommendation'
import { getAllProjects, recommendations } from '@/lib/projects'

export default function Home() {
  const projects = getAllProjects()

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-content px-5 py-10 space-y-40">
        
        {/* Hero Section */}
        <section className="space-y-16">
          <h1 className="text-display max-w-4xl">
            Hi, I&apos;m Michael, a product designer in Sydney.
          </h1>
        </section>

        {/* About Snippet */}
        <section className="max-w-text space-y-6">
          <p className="text-body-lg">
            I specialise in enterprise product design, with experience in account systems, 
            permissions, and identity workflows where clarity matters. I&apos;ve led design 
            for government, energy, and retail serving thousands of customers and businesses.
          </p>
          <p className="text-body-lg">
            I use research to inform decisions and partner with engineering to deliver.
          </p>
          <Link 
            href="/about" 
            className="inline-block text-body-lg text-action underline underline-offset-4 hover:text-action/70 transition-colors"
          >
            Learn a little more about me.
          </Link>
        </section>

        {/* Work Section */}
        <section className="space-y-12">
          <div className="section-divider w-full" />
          
          <div className="max-w-text space-y-8">
            <h2 className="text-h2">Some of my work</h2>
            <p className="text-body-md text-text-secondary">
              I&apos;ve designed for Energy Australia, Dan Murphy&apos;s, and the Department of Agriculture, 
              creating services that make it easier for organisations to connect with their users.
            </p>
          </div>

          {/* Project Cards */}
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
        </section>

        {/* Recommendations Section */}
        <section className="space-y-12">
          <div className="section-divider w-full" />
          
          <div className="space-y-8">
            <h2 className="text-h2">Kind words</h2>
            <p className="text-body-md text-text-secondary">
              Received from colleagues.
            </p>
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            {recommendations.map((rec, index) => (
              <Recommendation
                key={index}
                quote={rec.quote}
                name={rec.name}
                role={rec.role}
              />
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="space-y-12">
          <div className="section-divider w-full" />
          
          <div className="space-y-8">
            <h2 className="text-h2">Let&apos;s catch up</h2>
            <p className="text-body-md text-text-secondary">
              I&apos;m exploring new opportunities.
              <br />
              <a 
                href="mailto:michaelsavagepotter@gmail.com" 
                className="text-action underline underline-offset-4 hover:text-action/70 transition-colors"
              >
                Email me
              </a>
              {' '}or connect with me on{' '}
              <a 
                href="https://linkedin.com/in/michaelpotter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-action underline underline-offset-4 hover:text-action/70 transition-colors"
              >
                LinkedIn
              </a>.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
