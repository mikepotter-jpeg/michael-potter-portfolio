# Design System Documentation

> **Michael Potter Portfolio** - Design Token Reference & Component Guidelines

This document defines the design system tokens, patterns, and guidelines for the portfolio website. All tokens are defined in `tailwind.config.ts` and should be used consistently across all components.

---

## 📐 Design Principles

1. **Consistency** - Use design tokens for all spacing, colors, typography, and styling
2. **Accessibility** - Meet WCAG 2.1 AA standards with proper focus states and color contrast
3. **Readability** - Optimal line lengths (65ch), clear typography hierarchy
4. **Performance** - Use CSS tokens and Tailwind utilities for optimal bundle size
5. **Maintainability** - Single source of truth for all design values

---

## 🎨 Color Tokens

### Background Colors
```tsx
bg-background-primary    // #F8F6F3 - Main page background (warm off-white)
bg-background-secondary  // #FFFFFF - Card/section backgrounds (pure white)
bg-background-accent     // #F3FFE3 - Accent background (light green, if needed)
```

### Text Colors
```tsx
text-text-primary    // #2A3132 - Headings, primary content
text-text-secondary  // #333333 - Body text, descriptions
text-text-tertiary   // #5F6566 - Metadata, captions, less emphasis
```

### Accent Colors
```tsx
bg-accent          // #555B5C - Primary accent (dark gray-green)
bg-accent-hover    // #3F4445 - Hover state for accent elements
bg-accent-light    // rgba(85, 91, 92, 0.2) - Subtle accent backgrounds
bg-accent-lighter  // rgba(85, 91, 92, 0.1) - Very subtle accent backgrounds

text-accent        // Same values for text
hover:text-accent  // Use for interactive text hover states
```

### Border Colors
```tsx
border-border        // #CCCCCC - Default borders
border-border-light  // #E5E5E5 - Lighter borders for subtle dividers
```

### Focus Ring
```tsx
ring-focus-ring  // #7C3AED - Purple focus ring for accessibility
```

**Usage Guidelines:**
- Use `text-primary` for headings and important content
- Use `text-secondary` for body text and descriptions
- Use `text-tertiary` for metadata, labels, and less important text
- Use `accent` color sparingly for interactive elements and emphasis
- Always use `accent-hover` for hover states on accent-colored elements

---

## 📏 Spacing System

### Section Spacing (Vertical padding for page sections)
```tsx
py-section-xs  // 3rem (48px) - Compact sections
py-section-sm  // 4rem (64px) - Small sections
py-section-md  // 5rem (80px) - Medium sections
py-section-lg  // 7rem (112px) - Large sections (default for most sections)
py-section-xl  // 8rem (128px) - Extra large (hero sections)
```

### Card/Component Spacing (Internal padding)
```tsx
p-card-sm   // 1.5rem (24px) - Small cards
p-card      // 2rem (32px) - Standard cards
p-card-lg   // 2.5rem (40px) - Large cards
p-card-xl   // 3rem (48px) - Extra large cards
```

**Usage Guidelines:**
- **Hero sections**: `py-section-lg md:py-section-xl`
- **Standard sections**: `py-section-lg md:py-section-lg`
- **Compact sections**: `py-section-md md:py-section-lg`
- **Cards**: Use `p-card` to `p-card-xl` based on card size and content density
- **Consistent gaps**: Use `gap-4` or `gap-6` for consistent spacing between elements

---

## 🔤 Typography System

### Heading Sizes
```tsx
text-hero        // 4rem - Large hero headings (64px)
text-heading-1   // 3.5rem - H1, page titles (56px)
text-heading-2   // 3rem - H2, section headings (48px)
text-heading-3   // 2rem - H3, subsection headings (32px)
text-heading-4   // 1.5rem - H4, smaller headings (24px)
```

### Body Text Sizes
```tsx
text-body-xl  // 1.5rem (24px) - Extra large body, lead paragraphs
text-body-lg  // 1.25rem (20px) - Large body text
text-body     // 1.125rem (18px) - Standard body text
text-body-sm  // 1rem (16px) - Small body text
```

### UI Text Sizes
```tsx
text-ui     // 0.875rem (14px) - UI elements, labels
text-ui-sm  // 0.8125rem (13px) - Small UI text
```

**Typography Classes:**
```tsx
.text-lead    // Lead paragraph style (xl-2xl, primary color)
.text-body    // Standard body text (lg, secondary color)
.text-small   // Small text (base, secondary color)
.section-label // Uppercase labels (ui, tertiary, uppercase, wide tracking)
```

**Usage Guidelines:**
- **Page titles (H1)**: `text-heading-2 md:text-heading-1`
- **Section headings (H2)**: `text-heading-3 md:text-heading-2 lg:text-heading-1`
- **Subsection headings (H3)**: `text-heading-4 md:text-heading-3`
- **Lead paragraphs**: Use `.text-lead` class or `text-body-xl`
- **Body text**: Use `.text-body` class or `text-body`
- **UI elements**: Use `text-ui` for buttons, labels, metadata

---

## 📦 Layout Tokens

### Max Width Constraints
```tsx
max-w-container   // 1280px - Main container width
max-w-content     // 1048px - Content width
max-w-prose       // 65ch - Optimal reading width (50-75 characters)
max-w-prose-wide  // 75ch - Maximum comfortable reading width
```

**Usage Guidelines:**
- Use `max-w-container` for main page sections
- Use `max-w-prose` for all text content to ensure readability
- Add `mx-auto` to center containers

---

## 🔘 Border Radius System

```tsx
rounded-button    // 0.375rem (6px) - Buttons, form elements
rounded-card      // 1.5rem (24px) - Standard cards
rounded-card-lg   // 1.75rem (28px) - Large cards, images
```

**Usage Guidelines:**
- **Buttons**: `rounded-button`
- **Cards**: `rounded-card` or `rounded-card-lg`
- **Images in cards**: `rounded-card-lg`
- **Small UI elements**: `rounded-button`

---

## ⏱️ Transition System

### Transition Utilities
```tsx
.transition-fast     // 100ms - Color changes, fast interactions
.transition-normal   // 200ms - Default transitions
.transition-medium   // 300ms - Transforms, scale, complex changes
.transition-slow     // 500ms - Complex animations
```

**Usage Guidelines:**
- **Color/text changes**: `transition-fast` (hover text color, links)
- **Transforms/scale**: `transition-medium` (hover scale, movement)
- **Complex animations**: `transition-slow` (multi-property changes)
- Always use `ease-in-out` or default easing

---

## 🎯 Component Patterns

### Cards
```tsx
<div className="bg-background-secondary rounded-card-lg p-card md:p-card-lg border border-border">
  {/* Card content */}
</div>
```

### Hover Effects
```tsx
// Subtle scale on hover
className="hover:scale-105 transition-medium"

// Text color change
className="text-text-secondary hover:text-accent transition-fast"

// Card elevation
className="card-hover" // Adds shadow and translate-y on hover
```

### Focus States
Focus states are handled globally in `globals.css`:
- Purple focus ring (#7C3AED)
- 2px offset
- Applies to all interactive elements
- Focus-visible only (keyboard navigation)

### Section Structure
```tsx
<section className="py-section-lg md:py-section-lg">
  <div className="w-full max-w-container mx-auto px-6">
    {/* Section content */}
  </div>
</section>
```

### Prose Content
```tsx
<div className="prose-custom">
  {/* Long-form content with optimized typography */}
</div>
```

---

## ✅ Component Checklist

When creating or updating components:

- [ ] Use semantic spacing tokens (`section-*`, `card-*`)
- [ ] Use typography tokens (`heading-*`, `body-*`, `ui`)
- [ ] Use color tokens (no hardcoded hex values)
- [ ] Use border radius tokens (`rounded-button`, `rounded-card`, `rounded-card-lg`)
- [ ] Apply appropriate transitions (`transition-fast`, `transition-medium`)
- [ ] Use `max-w-container` for sections
- [ ] Use `max-w-prose` for text content
- [ ] Test focus states (keyboard navigation)
- [ ] Verify responsive behavior
- [ ] Check color contrast for accessibility

---

## 🚀 Common Patterns

### Hero Section
```tsx
<section className="min-h-[70vh] flex items-center justify-center py-section-lg md:py-section-xl">
  <div className="w-full max-w-container mx-auto px-6">
    <h1 className="text-heading-2 md:text-heading-1 lg:text-hero">
      Hero Heading
    </h1>
  </div>
</section>
```

### Content Section
```tsx
<section className="py-section-lg md:py-section-lg">
  <div className="w-full max-w-container mx-auto px-6">
    <header className="mb-16">
      <h2 className="text-heading-3 md:text-heading-2 lg:text-heading-1">
        Section Title
      </h2>
      <p className="text-body mt-6 max-w-prose">
        Section description
      </p>
    </header>
    {/* Section content */}
  </div>
</section>
```

### Interactive Link
```tsx
<Link
  href="/path"
  className="inline-flex items-center gap-2 text-text-primary hover:text-accent transition-fast"
>
  Link Text
  <ArrowRight size={16} />
</Link>
```

### Button Usage
```tsx
import { Button } from '@/components/ui/button'

// Default button
<Button>Click Me</Button>

// Outline button
<Button variant="outline">Outline</Button>

// Large button
<Button size="lg">Large Button</Button>

// Button as link
<Button asChild>
  <Link href="/path">Go somewhere</Link>
</Button>
```

---

## 📱 Responsive Patterns

### Typography Scaling
```tsx
// Headings should scale at breakpoints
text-heading-4 md:text-heading-3 lg:text-heading-2

// Body text can scale more subtly
text-body md:text-body-lg
```

### Spacing Scaling
```tsx
// Sections
py-section-md md:py-section-lg

// Card padding
p-card md:p-card-lg lg:p-card-xl
```

### Grid/Layout
```tsx
// Two column grid on larger screens
grid md:grid-cols-2 gap-6

// Flex direction change
flex flex-col lg:flex-row
```

---

## 🎨 Design Token Migration Guide

If you need to update an existing component:

### Old Pattern → New Pattern

```tsx
// OLD: Hardcoded values
className="py-20 md:py-28"
// NEW: Token-based
className="py-section-lg md:py-section-lg"

// OLD: Direct size values
className="text-3xl md:text-4xl"
// NEW: Semantic tokens
className="text-heading-3 md:text-heading-2"

// OLD: Hardcoded border radius
className="rounded-3xl"
// NEW: Token-based
className="rounded-card-lg"

// OLD: Hardcoded colors
className="hover:text-[#555B5C]"
// NEW: Token-based
className="hover:text-accent"

// OLD: Direct transitions
className="transition-all duration-300"
// NEW: Utility class
className="transition-medium"
```

---

## 🔍 Implementation Notes

### File Structure
- **Tokens**: `tailwind.config.ts` - Single source of truth
- **Global styles**: `app/globals.css` - Utility classes and prose styles
- **Components**: `components/` - Reusable UI components
- **Pages**: `app/` - Page-level components

### Best Practices
1. **Never hardcode values** - Always use tokens
2. **Be consistent** - Use the same patterns across similar components
3. **Think semantically** - Use meaningful token names
4. **Test accessibility** - Verify keyboard navigation and screen reader support
5. **Maintain readability** - Keep line lengths under 65ch for prose

---

## 📚 Additional Resources

- **Tailwind CSS**: https://tailwindcss.com
- **Next.js**: https://nextjs.org
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Optimal Line Length**: 50-75 characters per line for readability

---

**Last Updated**: February 13, 2026
**Maintained By**: Michael Potter
