import Link from 'next/link'

export default function Footer() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
  ]

  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="max-w-content mx-auto px-5 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-text-tertiary">
            © Michael Potter · 2026
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors link-animate"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Made with */}
          <p className="text-sm text-text-tertiary">
            Made in Sydney
          </p>
        </div>
      </div>
    </footer>
  )
}
