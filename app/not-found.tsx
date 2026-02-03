import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-6 px-5">
        <h1 className="text-display">404</h1>
        <p className="text-body-lg text-text-secondary max-w-md">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-body text-action hover:text-action/70 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
      </div>
    </div>
  )
}
