'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SocialIcon from './social-icon'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const isHomepage = pathname === '/'
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/#work-section', label: 'Work' },
    { href: '/about', label: 'About' },
  ]

  useEffect(() => {
    // Only apply scroll-based visibility on homepage
    if (!isHomepage) {
      setIsVisible(true)
      return
    }

    // Start hidden on homepage
    setIsVisible(false)

    const handleScroll = () => {
      // Find the work section and check if we've scrolled to it
      const workSection = document.getElementById('work-section')
      if (workSection) {
        const rect = workSection.getBoundingClientRect()
        // Show navbar when work section is near the top of viewport
        setIsVisible(rect.top <= 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomepage])

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background-primary/95 backdrop-blur supports-[backdrop-filter]:bg-background-primary/60 transition-all duration-300 ease-in-out",
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none'
      )}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-6 flex items-center gap-8">
          <Link 
            href="/" 
            className="flex items-center space-x-2 no-underline transition-opacity hover:opacity-80"
            aria-label="Home"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 36 36" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-text-primary"
            >
              {/* Geometric M mark - angular, minimal design */}
              <path 
                d="M8 26V10L14 18L18 10L22 18L28 10V26" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => {
                // For hash links, don't show as active (they scroll to a section, not a separate page)
                const isActive = !link.href.includes('#') && pathname === link.href
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isActive && "bg-text-primary text-background-primary font-medium"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <SocialIcon 
            href="https://www.linkedin.com/in/michael-potter/" 
            icon="linkedin"
            label="LinkedIn"
          />
          <SocialIcon 
            href="mailto:michaelsavagepotter@gmail.com" 
            icon="email"
            label="Email"
          />
        </div>
      </nav>
    </header>
  )
}
