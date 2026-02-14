/**
 * Accessibility tests (WCAG 2.1 AA) using jest-axe.
 * Run with: npm test
 */
/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Button } from '@/components/ui/button'
import ContactSection from '@/components/contact-section'

describe('Accessibility (a11y)', () => {
  describe('Button', () => {
    it('should have no accessibility violations (default)', async () => {
      const { container } = render(<Button>Submit</Button>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have no accessibility violations (as link)', async () => {
      const { container } = render(
        <Button asChild>
          <a href="/about">About me</a>
        </Button>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('ContactSection', () => {
    it('should have no accessibility violations', async () => {
      const { container } = render(
        <ContactSection heading="Get in touch" description="Say hello." />
      )
      expect(screen.getByRole('heading', { name: 'Get in touch' })).toBeInTheDocument()
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
