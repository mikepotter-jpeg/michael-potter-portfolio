interface RecommendationProps {
  quote: string
  name: string
  role: string
  linkedinUrl?: string
}

export default function Recommendation({ quote, name, role, linkedinUrl }: RecommendationProps) {
  return (
    <div className="bg-background-primary rounded-3xl p-8 md:p-10 flex flex-col h-full">
      {/* Quote mark */}
      <div className="text-5xl text-accent/30 font-serif leading-none mb-4">&ldquo;</div>
      
      {/* Quote */}
      <div 
        className="text-lg text-text-secondary leading-relaxed flex-1 [&>p]:mb-4 [&>p:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: quote }}
      />
      
      {/* Attribution */}
      <div className="mt-8 pt-6 border-t border-border">
        <p className="font-semibold text-text-primary text-lg">{name}</p>
        <p className="text-text-tertiary mt-1">{role}</p>
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-text-tertiary hover:text-text-secondary transition-colors"
          >
            Read full recommendation
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
