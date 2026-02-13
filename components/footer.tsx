import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Built with */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Built with</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><span className="text-text-tertiary">Framework:</span> Next.js</li>
              <li><span className="text-text-tertiary">Styling:</span> Tailwind CSS</li>
              <li><span className="text-text-tertiary">UI:</span> Radix UI</li>
              <li><span className="text-text-tertiary">Icons:</span> lucide-react</li>
            </ul>
          </div>

          {/* Design system */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Design system</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><span className="text-text-tertiary">Font:</span> Geist Sans</li>
              <li><span className="text-text-tertiary">Primary:</span> #F8F6F3</li>
              <li><span className="text-text-tertiary">Text:</span> #2A3132</li>
              <li><span className="text-text-tertiary">Accent:</span> #555B5C</li>
            </ul>
          </div>

          {/* Deployed on */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Deployed on</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Vercel</li>
              <li>Source code on GitHub</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Info</h3>
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
