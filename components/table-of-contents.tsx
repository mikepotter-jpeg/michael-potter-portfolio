'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  title: string
}

interface TableOfContentsProps {
  items: TocItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    )

    // Observe all section elements
    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [items])

  return (
    <nav 
      aria-label="Page contents" 
      className="sticky top-32"
    >
      {/* Back to top */}
      <a 
        href="#top" 
        className="no-underline block text-text-tertiary hover:text-action transition-colors mb-5 text-lg leading-none"
        aria-label="Back to top"
      >
        ⌃
      </a>
      
      {/* Section links */}
      <ul className="space-y-1 text-sm border-l border-border">
        {items.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={`
                  no-underline block pl-4 py-1.5 -ml-px border-l-2 transition-colors leading-snug
                  ${isActive 
                    ? 'border-action text-text-primary font-medium' 
                    : 'border-transparent text-text-tertiary hover:text-text-primary hover:border-text-tertiary'
                  }
                `}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
