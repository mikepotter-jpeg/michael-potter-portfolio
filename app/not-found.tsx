import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-5">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <p className="text-9xl font-bold text-border/50">404</p>
          <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
        </div>
        <p className="text-lg text-text-secondary max-w-lg mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="no-underline inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-background-primary rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>
      </div>
    </div>
  )
}
