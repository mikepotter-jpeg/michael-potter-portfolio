import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ContactSectionProps {
  heading?: string
  description?: string
  className?: string
}

export default function ContactSection({
  heading = "Let's connect",
  description = "I'm exploring new opportunities and would love to hear about what you're building.",
  className = "py-section-lg md:py-section-lg"
}: ContactSectionProps) {
  return (
    <section className={className}>
      <div className="w-full max-w-container mx-auto px-6">
        <div className="text-center">
          <header className="mb-10">
            <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1 mb-6">
              {heading}
            </h2>
            <p className="text-body md:text-body-lg text-text-secondary leading-relaxed max-w-prose mx-auto">
              {description}
            </p>
          </header>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="mailto:michaelsavagepotter@gmail.com">
                <Mail />
                Email me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/michael-potter/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
                LinkedIn
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
