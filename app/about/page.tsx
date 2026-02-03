import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Me | Michael Potter',
  description: 'Product designer with 5+ years experience building digital products across government, energy, and retail.',
}

export default function AboutPage() {
  const badges = [
    { emoji: '📍', text: 'Sydney-based' },
    { emoji: '👨🏻‍💻', text: 'Product designer' },
    { emoji: '📈', text: '5+ years experience' },
  ]

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-content px-5 py-10">
        <div className="max-w-text space-y-12 pt-10">
          
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-h1">About me</h1>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-1">
              {badges.map((badge) => (
                <span key={badge.text} className="text-body">
                  {badge.emoji} {badge.text}
                </span>
              ))}
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                I&apos;m a product designer with 5+ years&apos; experience building digital products 
                across government, energy, and retail.
              </p>
              
              <p>
                I started in industrial design, which grounded me in designing for people. 
                Today, I focus on turning complex business challenges into intuitive, user-centred 
                solutions that deliver real outcomes.
              </p>
              
              <p>
                I work best in close partnership with developers and stakeholders, shaping ideas 
                into scalable, elegant products that simplify complexity.
              </p>
              
              <p>
                If I sound like a fit for your team,{' '}
                <a 
                  href="mailto:michaelsavagepotter@gmail.com" 
                  className="text-action underline underline-offset-4 hover:text-action/70 transition-colors"
                >
                  let&apos;s chat
                </a>.
              </p>
            </div>
          </div>

          {/* Back Link */}
          <div className="pt-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-body text-text-tertiary hover:text-text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to home
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
