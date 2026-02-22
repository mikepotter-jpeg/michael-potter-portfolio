'use client'

import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { CategoryBadge } from '@/components/ui/category-badge'
import WorkCard from '@/components/work-card'
import NextProjectCard from '@/components/next-project-card'
import Recommendation from '@/components/recommendation'
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
import { Plus, ArrowLeft, ArrowRight, ChevronUp, Mail, ArrowUpRight } from 'lucide-react'
import LinkedinLogo from '@/components/icons/linkedin-logo'

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
    { id: 'next-project-card', title: 'Next Project Card' },
    { id: 'recommendation', title: 'Recommendation' },
    { id: 'footer', title: 'Footer' },
    { id: 'typography', title: 'Typography' },
    { id: 'all-caps-labels', title: 'Labels' },
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
                  <div className="flex flex-wrap gap-4 mb-4">
                    <Button>Default</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-text-tertiary">
                    <p><strong className="block text-text-primary mb-0.5">Default</strong>Primary action. Solid dark fill.</p>
                    <p><strong className="block text-text-primary mb-0.5">Outline</strong>Secondary action. Transparent fill, visible border.</p>
                    <p><strong className="block text-text-primary mb-0.5">Link</strong>Inline actions. Underline only.</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-text-tertiary mb-3">Sizes</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button iconLeft={<Mail />} iconRight={<ArrowUpRight />}>Default</Button>
                    <Button size="icon"><Plus /></Button>
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
                    <p className="text-body-sm text-text-secondary pt-2">
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
                  <p><strong>Sizes:</strong> <code>default</code> (gap-2, text-body + 16px icons), <code>small</code> (gap-1.5, text-[0.875rem] leading-none + 14px icons)</p>
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
                        <li><strong>Default:</strong> White text on dark fill (13.9:1) → accent-hover on hover ✓</li>
                        <li><strong>Outline:</strong> Dark text with border (13.9:1) → accent-lighter fill on hover ✓</li>
                        <li><strong>Link:</strong> Dark text with underline on hover (13.9:1) ✓</li>
                        <li><strong>Destructive:</strong> White text on red-500 (4.6:1) → red-600 on hover ✓</li>
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
                <Button
                  size="icon"
                  variant="link"
                  asChild
                >
                  <a href="#" aria-label="LinkedIn">
                    <LinkedinLogo />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="link"
                  asChild
                >
                  <a href="#" aria-label="Email">
                    <Mail size={20} />
                  </a>
                </Button>
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
                      <a href="#" className="block py-1.5 text-text-primary font-medium underline underline-offset-2 decoration-1 decoration-text-primary">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-1.5 text-text-tertiary hover:text-text-primary underline underline-offset-2 decoration-1 decoration-text-tertiary/50 hover:decoration-text-primary">
                        Design Process
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-1.5 text-text-tertiary hover:text-text-primary underline underline-offset-2 decoration-1 decoration-text-tertiary/50 hover:decoration-text-primary">
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

            {/* Next Project Card Section */}
            <section id="next-project-card" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Next Project Card</h2>
              <p className="text-text-tertiary mb-6">End-of-case-study teaser linking to the next project</p>

              <div className="max-w-4xl">
                <NextProjectCard
                  slug={sampleProject.slug}
                  title={sampleProject.title}
                  description={sampleProject.description}
                  coverImage={sampleProject.coverImage}
                />
              </div>

              <div className="mt-6 p-4 bg-background-primary border border-border rounded-xl text-sm text-text-tertiary space-y-2">
                <p><strong>Used in:</strong> Bottom of every project case study page (<code>app/work/[slug]/page.tsx</code>)</p>
                <p><strong>Behaviour:</strong> Whole section is wrapped in a <code>&lt;NextLink&gt;</code>. Image scales on hover. Title animates a gradient underline.</p>
                <p><strong>Layout:</strong> Heading with arrow above, then stacked image + content on mobile, side-by-side with <code>lg:flex-1</code> columns on desktop. Separated from content by a <code>border-t border-border-light</code>.</p>
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
              <p className="text-text-tertiary mb-6">Text styles used across the site. Font: Figtree. Defined in <code>globals.css</code> via <code>@theme</code>.</p>

              <div className="space-y-8 max-w-3xl">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Heading Scale</p>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-text-tertiary mb-2">Display (text-heading-display) — 4rem / 64px</p>
                      <p className="text-heading-display">The quick brown fox</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary mb-2">Heading 1 (text-heading-1) — 3rem / 48px</p>
                      <p className="text-heading-1">The quick brown fox</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary mb-2">Heading 2 (text-heading-2) — 2.5rem / 40px</p>
                      <p className="text-heading-2">The quick brown fox</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary mb-2">Heading 3 (text-heading-3) — 2rem / 32px</p>
                      <p className="text-heading-3">The quick brown fox</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary mb-2">Heading 4 (text-heading-4) — 1.5rem / 24px</p>
                      <p className="text-heading-4">The quick brown fox</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Body Scale</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-text-tertiary mb-1">Body XL (text-body-xl) — 1.25rem / 20px</p>
                      <p className="text-body-xl text-text-secondary">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary mb-1">Body LG (text-body-lg) — 1.125rem / 18px</p>
                      <p className="text-body-lg text-text-secondary">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary mb-1">Body (text-body) — 1rem / 16px</p>
                      <p className="text-body text-text-secondary">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary mb-1">Body SM (text-body-sm) — 0.875rem / 14px</p>
                      <p className="text-body-sm text-text-secondary">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Utility Classes</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-text-tertiary mb-1">.text-lead — Lead paragraph</p>
                      <p className="text-lead">
                        This is lead paragraph text, used for introductions and important callouts.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-text-tertiary mb-1">&lt;CategoryBadge /&gt; — Small badge</p>
                      <div className="flex flex-wrap gap-2">
                        <CategoryBadge>Design</CategoryBadge>
                        <CategoryBadge>Development</CategoryBadge>
                        <CategoryBadge>Research</CategoryBadge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Spacing Section */}
            <section id="spacing" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Spacing</h2>
              <p className="text-text-tertiary mb-6">Semantic spacing tokens for layout and component padding</p>

              <div className="space-y-8 max-w-3xl">
                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Section Spacing (vertical padding)</p>
                  <div className="space-y-3">
                    {[
                      { token: 'section-xs', value: '3rem (48px)', width: 'w-12' },
                      { token: 'section-sm', value: '4rem (64px)', width: 'w-16' },
                      { token: 'section-md', value: '5rem (80px)', width: 'w-20' },
                      { token: 'section-lg', value: '7rem (112px)', width: 'w-28' },
                      { token: 'section-xl', value: '8rem (128px)', width: 'w-32' },
                    ].map(({ token, value, width }) => (
                      <div key={token} className="flex items-center gap-4">
                        <div className={`${width} h-8 bg-accent rounded flex items-center justify-center shrink-0`}>
                          <div className="w-2 h-2 bg-background-primary rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">py-{token}</p>
                          <p className="text-xs text-text-tertiary">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Card/Component Spacing (internal padding)</p>
                  <div className="space-y-3">
                    {[
                      { token: 'card-sm', value: '1.5rem (24px)', width: 'w-6' },
                      { token: 'card', value: '2rem (32px)', width: 'w-8' },
                      { token: 'card-lg', value: '2.5rem (40px)', width: 'w-10' },
                      { token: 'card-xl', value: '3rem (48px)', width: 'w-12' },
                    ].map(({ token, value, width }) => (
                      <div key={token} className="flex items-center gap-4">
                        <div className={`${width} h-8 bg-accent/60 rounded flex items-center justify-center shrink-0`}>
                          <div className="w-2 h-2 bg-background-primary rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">p-{token}</p>
                          <p className="text-xs text-text-tertiary">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-background-primary border border-border rounded-xl text-sm text-text-tertiary space-y-1">
                  <p><strong>Section spacing:</strong> Use <code>py-section-lg</code> as default. <code>py-section-xl</code> for hero sections.</p>
                  <p><strong>Card spacing:</strong> Use <code>p-card</code> as default. Scale up with <code>p-card-lg</code> and <code>p-card-xl</code> for larger cards.</p>
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
                    <div>
                      <div className="h-20 bg-border-light rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Border Light</p>
                      <p className="text-xs text-text-tertiary mt-1">#E5E5E5</p>
                      <p className="text-xs text-text-tertiary">Subtle dividers</p>
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
                      <p className="text-xs text-text-tertiary">Interactive elements</p>
                    </div>
                    <div>
                      <div className="h-20 bg-accent-hover rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Accent Hover</p>
                      <p className="text-xs text-text-tertiary mt-1">#3F4445</p>
                      <p className="text-xs text-text-tertiary">Hover state for accent</p>
                    </div>
                    <div>
                      <div className="h-20 bg-accent-light rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Accent Light</p>
                      <p className="text-xs text-text-tertiary mt-1">rgba(85, 91, 92, 0.2)</p>
                      <p className="text-xs text-text-tertiary">Subtle backgrounds</p>
                    </div>
                    <div>
                      <div className="h-20 bg-accent-lighter rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Accent Lighter</p>
                      <p className="text-xs text-text-tertiary mt-1">rgba(85, 91, 92, 0.1)</p>
                      <p className="text-xs text-text-tertiary">Hover fills</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-primary mb-4">Focus</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="h-20 bg-focus-ring rounded-xl mb-2"></div>
                      <p className="text-sm font-medium">Focus Ring</p>
                      <p className="text-xs text-text-tertiary mt-1">#7C3AED</p>
                      <p className="text-xs text-text-tertiary">Keyboard focus indicator</p>
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
                      <p className="text-xs text-text-tertiary mb-3">Links animate an underline on hover using text-decoration transition</p>
                      <p className="text-sm"><span className="relative inline-block">hover me<span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span></span></p>
                      <p className="text-xs text-text-tertiary mt-2">Default <code>&lt;a&gt;</code> tags use <code>text-decoration-color</code> transition. For title underlines, use <code>bg-[linear-gradient()]</code> background-size technique.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background-primary border border-border rounded-xl">
                  <p className="text-sm text-text-tertiary"><strong>Design principle:</strong> All transitions should feel smooth and intentional. Faster transitions (100-200ms) for color changes, medium (300ms) for larger movements, and slow (500ms) for complex sequences.</p>
                </div>
              </div>
            </section>

            {/* Labels Section */}
            <section id="all-caps-labels" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Labels</h2>
              <p className="text-text-tertiary mb-6">Label and badge components</p>

              <div className="space-y-6 max-w-2xl">
                <div className="p-6 bg-background-secondary rounded-xl">
                  <h3 className="text-sm font-semibold text-text-primary mb-4">Category Badge</h3>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <CategoryBadge>Design</CategoryBadge>
                      <CategoryBadge>Development</CategoryBadge>
                      <CategoryBadge>Research</CategoryBadge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-text-tertiary">Variants</p>
                      <div className="flex gap-2">
                        <CategoryBadge variant="default">Default</CategoryBadge>
                        <CategoryBadge variant="filled">Filled</CategoryBadge>
                      </div>
                    </div>
                    <p className="text-xs text-text-tertiary">Used for: Work card project category tags</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Unused Styles Section */}
            <section id="unused-styles" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">Unused Styles</h2>
              <p className="text-text-tertiary mb-6">Tracking CSS classes defined in globals.css but not actively used</p>

              <div className="p-4 bg-background-primary border border-border rounded-xl text-sm text-text-tertiary">
                <p>No unused styles. All CSS classes in globals.css are actively used across the site.</p>
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
