'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialIcon from './social-icon'

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background-primary/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center gap-1 -ml-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  pathname === link.href 
                    ? 'bg-text-primary text-background-primary font-medium' 
                    : 'text-text-primary hover:bg-text-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-1">
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
