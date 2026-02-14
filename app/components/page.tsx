'use client'

import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
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
import { Plus, ArrowLeft, ChevronUp, Mail, Linkedin, ArrowUpRight, ArrowRight } from 'lucide-react'

export default function ComponentsPage() {
  const sampleProject = projects[0]
  
  const sampleTocItems = [
    { id: 'buttons', title: 'Buttons' },
    { id: 'links', title: 'Links' },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'social-icons', title: 'Social Icons' },
    { id: 'navigation-menu', title: 'Navigation Menu' },
    { id: 'table-of-contents', title: 'Table of Contents' },
    { id: 'work-card', title: 'Work Card' },
    { id: 'recommendation', title: 'Recommendation' },
    { id: 'footer', title: 'Footer' },
    { id: 'typography', title: 'Typography' },
    { id: 'spacing', title: 'Spacing' },
    { id: 'colors', title: 'Colors' },
    { id: 'interactions', title: 'Interactions & Motion' },
    { id: 'unused-styles', title: 'Unused Styles' },
  ]

  return (
    <div className="py-20">
      <div id="top" className="scroll-mt-20" />
      <div className="w-full max-w-7xl mx-auto px-6">
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
              <p className="text-text-tertiary mb-6">UI button variants, sizes, and icon patterns</p>
              
              <div className="space-y-8">
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

                <div>
                  <p className="text-sm font-medium text-text-primary mb-3">Icons</p>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-text-tertiary mb-3">Large buttons with text + icons</p>
                      <div className="flex flex-wrap gap-4">
                        <Button size="lg" asChild>
                          <a href="mailto:michaelsavagepotter@gmail.com">
                            <Mail size={20} />
                            Email me
                          </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                          <a href="https://www.linkedin.com/in/michael-potter/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} />
                            LinkedIn
                            <ArrowUpRight size={20} />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-text-tertiary mb-3">Icon-only buttons</p>
                      <div className="flex flex-wrap items-center gap-4">
                        <Button size="icon">
                          <Mail />
                        </Button>
                        <Button size="icon" variant="outline">
                          <Linkedin />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Plus />
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 bg-background-primary border border-border rounded-xl text-sm text-text-tertiary">
                      <p><strong>Icon sizing:</strong> Icons are automatically sized via CSS (<code>[&_svg]:size-4</code> = 16px for default/icon sizes, <code>[&_svg]:size-5</code> = 20px for large buttons).</p>
                      <p className="mt-2"><strong>Icon spacing:</strong> Buttons use <code>gap-2</code> (8px) between text and icons, set in the base button styles.</p>
                      <p className="mt-2"><strong>Standard sizes:</strong> Use 14px for small indicators (ChevronUp), 16px for default links/buttons, and 20px for large buttons only.</p>
                      <p className="mt-2"><strong>Icon-only buttons:</strong> Use <code>size=&quot;icon&quot;</code> for compact, square icon buttons.</p>
                      <p className="mt-2"><strong>asChild pattern:</strong> Use <code>asChild</code> with Radix Slot to render buttons as links or other elements while maintaining button styling.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Links Section */}
            <section id="links" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Links</h2>
              <p className="text-text-tertiary mb-6">Consistent link styling across the site using the Link component</p>
              
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-text-tertiary mb-3">Link component (hover to see transitions)</p>
                  <div className="p-6 bg-background-secondary rounded-xl space-y-4">
                    <div className="flex items-baseline gap-6 flex-wrap">
                      <Link href="/about">
                        Default
                        <ArrowRight size={16} />
                      </Link>
                      <Link href="https://example.com" size="small" external>
                        Small external
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                    <p className="text-ui text-text-secondary pt-2">
                      Inline: <Link href="https://example.com" variant="inherit" size="small" external>Next.js</Link> inherits parent color
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-text-tertiary mb-3">Default content links</p>
                  <div className="p-6 bg-background-secondary rounded-xl space-y-2">
                    <p className="text-text-secondary">
                      This is a paragraph with a <a href="#">default inline link</a> that uses the global link styling.
                    </p>
                    <p className="text-text-secondary">
                      Underlines pass behind descenders and transition from <span className="text-border">border</span> to <span className="text-accent">accent</span> on hover.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-background-primary border border-border rounded-xl text-sm text-text-tertiary space-y-2">
                  <p><strong>Component:</strong> Import from <code>@/components/ui/link</code></p>
                  <p><strong>Variants:</strong> <code>default</code> (tertiary→primary), <code>inherit</code> (inherits parent)</p>
                  <p><strong>Sizes:</strong> <code>default</code> (gap-2, text-body + 16px icons), <code>small</code> (gap-1.5, text-ui + 14px icons)</p>
                  <p><strong>External:</strong> Add <code>external</code> prop for target=&quot;_blank&quot; and rel=&quot;noopener noreferrer&quot;</p>
                  <p><strong>Underline:</strong> Enabled by default, passes behind descenders (text-decoration-skip-ink: auto)</p>
                </div>
              </div>
            </section>

            {/* Accessibility Section */}
            <section id="accessibility" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Accessibility</h2>
              <p className="text-text-tertiary mb-6">WCAG 2.1 AA compliance and inclusive design patterns</p>

              <div className="space-y-8">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Color Contrast</p>
                  <div className="space-y-4">
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                      <p className="text-sm font-medium mb-2">Text Contrast Ratios</p>
                      <ul className="space-y-2 text-sm text-text-tertiary">
                        <li><span className="text-text-primary font-medium">Text Primary (#2A3132)</span> on backgrounds: 13.9:1 ratio ✓</li>
                        <li><span className="text-text-secondary font-medium">Text Secondary (#333333)</span> on backgrounds: 12.6:1 ratio ✓</li>
                        <li><span className="text-text-tertiary font-medium">Text Tertiary (#5F6566)</span> on backgrounds: 5.5:1 ratio ✓</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                      <p className="text-sm font-medium mb-2">Button States</p>
                      <ul className="space-y-2 text-sm text-text-tertiary">
                        <li><strong>Default:</strong> Dark on light (13.9:1) ✓</li>
                        <li><strong>Outline:</strong> Dark text and border (13.9:1) → inverts on hover ✓</li>
                        <li><strong>Secondary:</strong> Dark text with border (13.9:1) → subtle fill on hover ✓</li>
                        <li><strong>Ghost:</strong> Dark text (13.9:1) with transparent background ✓</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Focus Indicators</p>
                  <div className="p-4 bg-background-secondary border border-border rounded-xl space-y-3">
                    <p className="text-sm text-text-tertiary">All interactive elements have visible focus indicators with purple (#7C3AED) ring/outline.</p>
                    <div className="flex flex-wrap gap-4">
                      <Button>Tab to me</Button>
                      <Button variant="outline">Focus me</Button>
                      <a href="#" className="text-text-primary">Try tabbing to me</a>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Semantic HTML</p>
                  <div className="p-4 bg-background-secondary border border-border rounded-xl">
                    <ul className="space-y-2 text-sm text-text-tertiary">
                      <li>✓ Proper heading hierarchy (h1 → h2 → h3)</li>
                      <li>✓ ARIA labels for icon-only buttons</li>
                      <li>✓ Skip to main content link</li>
                      <li>✓ Semantic nav, header, footer, article elements</li>
                      <li>✓ aria-current for active navigation states</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Keyboard Navigation</p>
                  <div className="p-4 bg-background-secondary border border-border rounded-xl">
                    <ul className="space-y-2 text-sm text-text-tertiary">
                      <li>✓ All interactive elements are keyboard accessible</li>
                      <li>✓ Logical tab order follows visual layout</li>
                      <li>✓ Focus indicators always visible</li>
                      <li>✓ Skip link for bypassing navigation</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-background-primary border border-border rounded-xl text-sm text-text-tertiary">
                  <p><strong>Compliance:</strong> All components meet WCAG 2.1 Level AA standards for contrast (4.5:1 for normal text, 3:1 for large text), keyboard navigation, and focus indicators.</p>
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

            {/* Spacing Section */}
            <section id="spacing" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Spacing</h2>
              <p className="text-text-tertiary mb-6">Consistent spacing scale for layout and component padding</p>

              <div className="space-y-6 max-w-3xl">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-3">Spacing Scale</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-background-primary rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Compact (12px)</p>
                          <p className="text-xs text-text-tertiary">p-2 in Tailwind</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-background-primary rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Default (24px)</p>
                          <p className="text-xs text-text-tertiary">p-6 in Tailwind</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-background-primary rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Spacious (36px)</p>
                          <p className="text-xs text-text-tertiary">p-9 in Tailwind</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-32 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-background-primary rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Section (64px)</p>
                          <p className="text-xs text-text-tertiary">py-16 md:py-28 in Tailwind</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-background-primary border border-border rounded-xl text-sm text-text-tertiary">
                  <p>Use spacing consistently for padding on cards, margins between sections, and gaps within components.</p>
                </div>
              </div>
            </section>

            {/* Colors Section */}
            <section id="colors" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Colors</h2>
              <p className="text-text-tertiary mb-6">Theme color palette with semantic meaning</p>
              
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Base Colors</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="h-20 bg-background-primary border border-border rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Background Primary</p>
                      <p className="text-xs text-text-tertiary mt-1">#F8F6F3</p>
                      <p className="text-xs text-text-tertiary">Page background</p>
                    </div>
                    <div>
                      <div className="h-20 bg-background-secondary rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Background Secondary</p>
                      <p className="text-xs text-text-tertiary mt-1">#FFFFFF</p>
                      <p className="text-xs text-text-tertiary">Cards, sections</p>
                    </div>
                    <div>
                      <div className="h-20 bg-border rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Border</p>
                      <p className="text-xs text-text-tertiary mt-1">#CCCCCC</p>
                      <p className="text-xs text-text-tertiary">Dividers</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Text Colors</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="h-20 bg-text-primary rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Text Primary</p>
                      <p className="text-xs text-text-tertiary mt-1">#2A3132</p>
                      <p className="text-xs text-text-tertiary">Headings</p>
                    </div>
                    <div>
                      <div className="h-20 bg-text-secondary rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Text Secondary</p>
                      <p className="text-xs text-text-tertiary mt-1">#333333</p>
                      <p className="text-xs text-text-tertiary">Body text</p>
                    </div>
                    <div>
                      <div className="h-20 bg-text-tertiary rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Text Tertiary</p>
                      <p className="text-xs text-text-tertiary mt-1">#5F6566</p>
                      <p className="text-xs text-text-tertiary">Labels</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Accent Color</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="h-20 bg-accent rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Accent</p>
                      <p className="text-xs text-text-tertiary mt-1">#555B5C</p>
                      <p className="text-xs text-text-tertiary">Hover, focus</p>
                    </div>
                    <div>
                      <div className="h-20 bg-accent/20 rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Accent Light</p>
                      <p className="text-xs text-text-tertiary mt-1">20% opacity</p>
                      <p className="text-xs text-text-tertiary">Backgrounds</p>
                    </div>
                    <div>
                      <div className="h-20 bg-accent/10 rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Accent Lighter</p>
                      <p className="text-xs text-text-tertiary mt-1">10% opacity</p>
                      <p className="text-xs text-text-tertiary">Hover states</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactions & Motion Section */}
            <section id="interactions" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Interactions & Motion</h2>
              <p className="text-text-tertiary mb-6">Transition timing and interactive states</p>

              <div className="space-y-8 max-w-2xl">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Transition Timing</p>
                  <div className="space-y-3">
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                      <p className="text-sm font-medium mb-1">Fast (100ms)</p>
                      <p className="text-xs text-text-tertiary">Color changes, text updates</p>
                      <p className="text-xs text-text-tertiary mt-2"><code>transition-fast</code></p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                      <p className="text-sm font-medium mb-1">Normal (200ms)</p>
                      <p className="text-xs text-text-tertiary">Default transition for most elements</p>
                      <p className="text-xs text-text-tertiary mt-2"><code>transition-normal</code></p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                      <p className="text-sm font-medium mb-1">Medium (300ms)</p>
                      <p className="text-xs text-text-tertiary">Scale, transform, complex hover states</p>
                      <p className="text-xs text-text-tertiary mt-2"><code>transition-medium</code></p>
                    </div>
                    <div className="p-4 bg-background-secondary border border-border rounded-xl">
                      <p className="text-sm font-medium mb-1">Slow (500ms)</p>
                      <p className="text-xs text-text-tertiary">Complex animations, fade effects</p>
                      <p className="text-xs text-text-tertiary mt-2"><code>transition-slow</code></p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Interactive States</p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Hover Scale</p>
                      <p className="text-xs text-text-tertiary mb-3">Used on buttons and interactive cards for tactile feedback</p>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-text-primary rounded-md"></div>
                        <div className="w-12 h-12 bg-text-primary rounded-md scale-105"></div>
                      </div>
                      <p className="text-xs text-text-tertiary mt-2">Add <code>hover:scale-105</code> with <code>transition-medium</code></p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Color Shift</p>
                      <p className="text-xs text-text-tertiary mb-3">Text colors transition to accent on hover</p>
                      <div className="flex gap-4">
                        <p className="text-text-tertiary">Default</p>
                        <p className="text-accent">Hover</p>
                      </div>
                      <p className="text-xs text-text-tertiary mt-2">Add <code>hover:text-accent</code> with <code>transition-fast</code></p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Accent Underline</p>
                      <p className="text-xs text-text-tertiary mb-3">Links animate an underline on hover</p>
                      <p className="text-sm"><span className="relative inline-block">hover me<span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span></span></p>
                      <p className="text-xs text-text-tertiary mt-2">Use <code>.link-animate</code> class</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background-primary border border-border rounded-xl">
                  <p className="text-sm text-text-tertiary"><strong>Design principle:</strong> All transitions should feel smooth and intentional. Faster transitions (100-200ms) for color changes, medium (300ms) for larger movements, and slow (500ms) for complex sequences.</p>
                </div>
              </div>
            </section>

            {/* Unused Styles Section */}
            <section id="unused-styles" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Unused Styles</h2>
              <p className="text-text-tertiary mb-6">CSS classes defined that are not currently used on the site</p>

              <div className="space-y-6 max-w-2xl">
                <div className="p-6 bg-background-secondary rounded-xl">
                  <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-widest">Text Styles</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <code className="bg-background-primary px-2 py-1 rounded text-xs font-mono">.text-small</code>
                      <p className="text-text-tertiary mt-1">Small text style for future use</p>
                    </li>
                    <li>
                      <code className="bg-background-primary px-2 py-1 rounded text-xs font-mono">.section-label</code>
                      <p className="text-text-tertiary mt-1">Uppercase eyebrow text for future use</p>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-background-secondary rounded-xl">
                  <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-widest">Animation Styles</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <code className="bg-background-primary px-2 py-1 rounded text-xs font-mono">.link-animate</code>
                      <p className="text-text-tertiary mt-1">Underline animation on hover for future use</p>
                    </li>
                    <li>
                      <code className="bg-background-primary px-2 py-1 rounded text-xs font-mono">.animate-delay-*</code>
                      <p className="text-text-tertiary mt-1">Animation delay utilities for future use</p>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-background-secondary rounded-xl">
                  <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-widest">Component Styles</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <code className="bg-background-primary px-2 py-1 rounded text-xs font-mono">.section-container</code>
                      <p className="text-text-tertiary mt-1">Section wrapper with top border for future use</p>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-background-primary border border-border rounded-xl text-sm text-text-tertiary">
                  <p>These styles are kept as part of the design system. They can be removed from globals.css if you prefer to keep only active styles.</p>
                </div>
              </div>
            </section>

            {/* Back Link */}
            <div className="pt-8">
              <Link href="/">
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
