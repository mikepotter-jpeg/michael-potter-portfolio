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
          light: 'rgba(85, 91, 92, 0.3)',
        },
        action: {
          DEFAULT: '#555B5C',
          light: 'rgba(85, 91, 92, 0.3)',
        },
        border: '#CCCCCC',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.05em', fontWeight: '400' }],
        'h2': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h3': ['1.6rem', { lineHeight: '1.4', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg': ['2rem', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
        'body-md': ['1.5rem', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
        'body': ['18px', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
        'body-sm': ['1rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
      },
      maxWidth: {
        'content': '1048px',
        'text': '802px',
        'nav': '1280px',
        'prose': '65ch',      // Optimal reading length (~50-75 chars)
        'prose-wide': '75ch', // Upper limit for comfortable reading
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
