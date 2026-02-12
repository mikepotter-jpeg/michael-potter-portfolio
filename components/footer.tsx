import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Built with */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Built with
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <span className="text-text-tertiary">Framework:</span>{' '}
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-text-primary transition-colors">
                  Next.js
                </a>
              </li>
              <li>
                <span className="text-text-tertiary">Styling:</span>{' '}
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-text-primary transition-colors">
                  Tailwind CSS
                </a>
              </li>
              <li>
                <span className="text-text-tertiary">UI:</span>{' '}
                <a href="https://www.radix-ui.com/" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-text-primary transition-colors">
                  Radix UI
                </a>
              </li>
              <li>
                <span className="text-text-tertiary">Icons:</span>{' '}
                <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-text-primary transition-colors">
                  lucide-react
                </a>
              </li>
            </ul>
          </div>

          {/* Design system */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Design system
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <span className="text-text-tertiary">Font:</span>{' '}
                <a href="https://vercel.com/font/geist" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-text-primary transition-colors">
                  Geist Sans
                </a>
              </li>
              <li>
                <span className="text-text-tertiary">Primary:</span> #F8F6F3
              </li>
              <li>
                <span className="text-text-tertiary">Text:</span> #2A3132
              </li>
              <li>
                <span className="text-text-tertiary">Accent:</span> #555B5C
              </li>
            </ul>
          </div>

          {/* Deployed on */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Deployed on
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-text-primary transition-colors">
                  Vercel
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-text-primary transition-colors">
                  Source code on GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Info
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>© Michael Potter · 2026</li>
              <li>Made in Sydney</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
