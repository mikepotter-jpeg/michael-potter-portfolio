import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <p className="text-9xl font-bold text-border/50">404</p>
          <h1 className="text-heading-3 md:text-heading-2">Page not found</h1>
        </div>
        <p className="text-body text-text-secondary max-w-prose mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="no-underline inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-background-primary rounded-button font-medium hover:bg-accent-hover hover:scale-105 transition-medium"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </div>
  )
}
