import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'

interface ContactSectionProps {
  heading?: string
  description?: string
  className?: string
}

export default function ContactSection({
  heading = "Let's connect",
  description = "I'm exploring new opportunities and would love to hear about what you're building.",
  className = "py-20 md:py-28"
}: ContactSectionProps) {
  return (
    <section className={className}>
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="text-center">
          <header className="mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              {heading}
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto">
              {description}
            </p>
          </header>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:michaelsavagepotter@gmail.com"
              className="no-underline inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-background-primary rounded-md text-lg font-medium hover:opacity-90 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-purple-600"
            >
              <Mail size={20} />
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/michael-potter/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-flex items-center gap-2 px-8 py-4 border-2 border-text-primary text-text-primary rounded-md text-lg font-medium hover:bg-text-primary hover:text-background-primary transition-all focus:outline-2 focus:outline-offset-2 focus:outline-purple-600"
            >
              <Linkedin size={20} />
              LinkedIn
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
