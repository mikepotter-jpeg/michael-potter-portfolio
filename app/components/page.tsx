'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import WorkCard from '@/components/work-card'
import Recommendation from '@/components/recommendation'
import SocialIcon from '@/components/social-icon'
import TableOfContents from '@/components/table-of-contents'
import Footer from '@/components/footer'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { projects, recommendations } from '@/lib/projects'
import { Plus, ArrowLeft, ChevronUp } from 'lucide-react'

export default function ComponentsPage() {
  const sampleProject = projects[0]
  
  const sampleTocItems = [
    { id: 'buttons', title: 'Buttons' },
    { id: 'social-icons', title: 'Social Icons' },
    { id: 'navigation-menu', title: 'Navigation Menu' },
    { id: 'table-of-contents', title: 'Table of Contents' },
    { id: 'work-card', title: 'Work Card' },
    { id: 'recommendation', title: 'Recommendation' },
    { id: 'footer', title: 'Footer' },
    { id: 'typography', title: 'Typography' },
    { id: 'colors', title: 'Colors' },
  ]

  return (
    <div className="py-20">
      <div id="top" className="scroll-mt-20" />
      <div className="w-full max-w-7xl mx-auto px-5">
        <header className="mb-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Component Library
          </h1>
          <p className="text-body text-text-secondary">
            Internal style guide and component reference.
          </p>
        </header>

        <div className="flex gap-12 xl:gap-20">
          {/* Sticky sidebar TOC */}
          <aside className="hidden xl:block w-48 shrink-0">
            <TableOfContents items={sampleTocItems} />
          </aside>

          {/* Main content */}
          <div className="flex-1 space-y-20">
            {/* Buttons Section */}
            <section id="buttons" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Buttons</h2>
              <p className="text-text-tertiary mb-6">UI button variants and sizes</p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-text-tertiary mb-3">Variants</p>
                  <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-text-tertiary mb-3">Sizes</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Social Icons Section */}
            <section id="social-icons" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Social Icons</h2>
              <p className="text-text-tertiary mb-6">Icon buttons for social links</p>
              
              <div className="flex items-center gap-2 p-4 bg-background-secondary rounded-xl w-fit">
                <SocialIcon href="#" icon="linkedin" label="LinkedIn" />
                <SocialIcon href="#" icon="email" label="Email" />
              </div>
            </section>

            {/* Navigation Menu Section */}
            <section id="navigation-menu" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Navigation Menu</h2>
              <p className="text-text-tertiary mb-6">Radix-based navigation menu used in the header</p>
              
              <div className="p-4 bg-background-secondary rounded-xl w-fit">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <a href="#" className={navigationMenuTriggerStyle()}>Home</a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <a href="#" className={navigationMenuTriggerStyle()}>Work</a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <a href="#" className={navigationMenuTriggerStyle()}>About</a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </section>

            {/* Table of Contents Section */}
            <section id="table-of-contents" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Table of Contents</h2>
              <p className="text-text-tertiary mb-6">Sticky sidebar navigation with scroll spy for project pages</p>
              
              <div className="p-6 bg-background-secondary rounded-xl w-fit">
                <nav aria-label="Example contents">
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="#" className="no-underline inline-flex items-center gap-1.5 py-1.5 text-text-tertiary hover:text-text-primary">
                        <span>Top</span>
                        <ChevronUp size={14} aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline block py-1.5 text-text-primary font-medium">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline block py-1.5 text-text-tertiary hover:text-text-primary">
                        Design Process
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline block py-1.5 text-text-tertiary hover:text-text-primary">
                        Impact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <p className="text-sm text-text-tertiary mt-4">
                ↑ This is a static preview. See the live version in the sidebar on xl screens.
              </p>
            </section>

            {/* Work Card Section */}
            <section id="work-card" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Work Card</h2>
              <p className="text-text-tertiary mb-6">Project showcase cards used on the homepage</p>
              
              <div className="max-w-4xl">
                <WorkCard
                  slug={sampleProject.slug}
                  title={sampleProject.title}
                  description={sampleProject.description}
                  categories={sampleProject.categories}
                  coverImage={sampleProject.coverImage}
                  client={sampleProject.client}
                  years={sampleProject.years}
                  index={0}
                />
              </div>
            </section>

            {/* Recommendation Section */}
            <section id="recommendation" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Recommendation</h2>
              <p className="text-text-tertiary mb-6">Testimonial cards for the homepage</p>
              
              <div className="max-w-xl">
                <Recommendation
                  quote={recommendations[0].quote}
                  name={recommendations[0].name}
                  role={recommendations[0].role}
                  linkedinUrl={recommendations[0].linkedinUrl}
                />
              </div>
            </section>

            {/* Footer Section */}
            <section id="footer" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Footer</h2>
              <p className="text-text-tertiary mb-6">Site footer with navigation links</p>
              
              <div className="rounded-xl overflow-hidden border border-border">
                <Footer />
              </div>
            </section>

            {/* Typography Section */}
            <section id="typography" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Typography</h2>
              <p className="text-text-tertiary mb-6">Text styles used across the site</p>
              
              <div className="space-y-6 max-w-2xl">
                <div>
                  <p className="text-sm text-text-tertiary mb-2">Hero heading</p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
                    The quick brown fox
                  </h1>
                </div>
                
                <div>
                  <p className="text-sm text-text-tertiary mb-2">Section heading</p>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Section title here
                  </h2>
                </div>
                
                <div>
                  <p className="text-sm text-text-tertiary mb-2">Lead text (.text-lead)</p>
                  <p className="text-lead">
                    This is lead paragraph text, used for introductions and important callouts.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-text-tertiary mb-2">Body text (.text-body)</p>
                  <p className="text-body">
                    This is standard body text used for regular content throughout the site.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-text-tertiary mb-2">Section label</p>
                  <p className="text-sm text-text-tertiary">Next project</p>
                </div>
              </div>
            </section>

            {/* Colors Section */}
            <section id="colors" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Colors</h2>
              <p className="text-text-tertiary mb-6">Theme color palette</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div>
                  <div className="h-20 bg-background-primary border border-border rounded-xl mb-2"></div>
                  <p className="text-sm font-medium">Background Primary</p>
                </div>
                <div>
                  <div className="h-20 bg-background-secondary rounded-xl mb-2"></div>
                  <p className="text-sm font-medium">Background Secondary</p>
                </div>
                <div>
                  <div className="h-20 bg-text-primary rounded-xl mb-2"></div>
                  <p className="text-sm font-medium">Text Primary</p>
                </div>
                <div>
                  <div className="h-20 bg-text-secondary rounded-xl mb-2"></div>
                  <p className="text-sm font-medium">Text Secondary</p>
                </div>
                <div>
                  <div className="h-20 bg-text-tertiary rounded-xl mb-2"></div>
                  <p className="text-sm font-medium">Text Tertiary</p>
                </div>
                <div>
                  <div className="h-20 bg-border rounded-xl mb-2"></div>
                  <p className="text-sm font-medium">Border</p>
                </div>
                <div>
                  <div className="h-20 bg-accent rounded-xl mb-2"></div>
                  <p className="text-sm font-medium">Accent</p>
                </div>
                <div>
                  <div className="h-20 bg-action rounded-xl mb-2"></div>
                  <p className="text-sm font-medium">Action</p>
                </div>
              </div>
            </section>

            {/* Back Link */}
            <div className="pt-8">
              <Link href="/" className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary">
                <ArrowLeft size={16} />
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
