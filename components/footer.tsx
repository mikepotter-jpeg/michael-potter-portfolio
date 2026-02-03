import Link from 'next/link'

export default function Footer() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'My work' },
    { href: '/about', label: 'About me' },
  ]

  return (
    <footer className="border-t border-border">
      <div className="max-w-nav mx-auto px-5 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-body-sm text-text-tertiary">
            ☺︎ Michael Potter | 2026
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-sm text-text-primary hover:text-text-tertiary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
