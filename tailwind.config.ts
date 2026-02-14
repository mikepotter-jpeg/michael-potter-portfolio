import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#F8F6F3',
          secondary: '#FFFFFF',
          accent: '#F3FFE3',
        },
        text: {
          primary: '#2A3132',
          secondary: '#333333',
          tertiary: '#5F6566',
        },
        accent: {
          DEFAULT: '#555B5C',
          hover: '#3F4445',
          light: 'rgba(85, 91, 92, 0.2)',
          lighter: 'rgba(85, 91, 92, 0.1)',
        },
        border: {
          DEFAULT: '#CCCCCC',
          light: '#E5E5E5',
        },
        focus: {
          ring: '#7C3AED',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display & Hero
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        
        // Headings (h1-h4)
        'heading-1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        'heading-2': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '600' }],
        'heading-3': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-4': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.015em', fontWeight: '600' }],
        
        // Body text
        'body-xl': ['1.5rem', { lineHeight: '1.6', letterSpacing: '-0.015em' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body-sm': ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
        
        // UI elements
        'ui': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'ui-sm': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      },
      maxWidth: {
        'container': '1280px',
        'content': '1048px',
        'prose': '65ch',
        'prose-wide': '75ch',
      },
      spacing: {
        // Section spacing (vertical)
        'section-xs': '3rem',    // 48px
        'section-sm': '4rem',    // 64px
        'section-md': '5rem',    // 80px
        'section-lg': '7rem',    // 112px
        'section-xl': '8rem',    // 128px
        
        // Card/Component spacing
        'card-sm': '1.5rem',     // 24px
        'card': '2rem',          // 32px
        'card-lg': '2.5rem',     // 40px
        'card-xl': '3rem',       // 48px
      },
      borderRadius: {
        'button': '0.375rem',    // 6px - buttons, small elements
        'card': '1.5rem',        // 24px - standard cards
        'card-lg': '1.75rem',    // 28px - large cards/images
      },
      transitionDuration: {
        'fast': '100ms',
        'normal': '200ms',
        'medium': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
