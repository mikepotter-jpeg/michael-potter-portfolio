'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialIcon from './social-icon'

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'My work' },
    { href: '/about', label: 'About me' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background-primary/95 backdrop-blur-sm">
      <nav className="max-w-nav mx-auto px-5 py-3">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-body-sm transition-opacity hover:opacity-70 ${
                  pathname === link.href ? 'font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <SocialIcon 
              href="https://linkedin.com/in/michaelpotter" 
              icon="linkedin"
              label="LinkedIn"
            />
            <SocialIcon 
              href="mailto:michaelsavagepotter@gmail.com" 
              icon="email"
              label="Email"
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
