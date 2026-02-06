import { ArrowUpRight } from 'lucide-react'

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
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  )
}
