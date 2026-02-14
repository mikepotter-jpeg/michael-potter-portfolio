import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/components/ui/link'

interface RecommendationProps {
  quote: string
  name: string
  role: string
  linkedinUrl?: string
}

export default function Recommendation({ quote, name, role, linkedinUrl }: RecommendationProps) {
  return (
    <div className="bg-background-primary rounded-card-lg p-card md:p-card-lg flex flex-col h-full">
      {/* Quote mark */}
      <div className="text-5xl text-accent/30 font-serif leading-none mb-4">&ldquo;</div>
      
      {/* Quote */}
      <div 
        className="text-body text-text-secondary leading-relaxed flex-1 [&>p]:mb-4 [&>p:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: quote }}
      />
      
      {/* Attribution */}
      <div className="mt-8 pt-6 border-t border-border">
        <p className="font-semibold text-text-primary text-body">{name}</p>
        <p className="text-text-tertiary mt-1">{role}</p>
        {linkedinUrl && (
          <Link
            href={linkedinUrl}
            size="small"
            external
            className="mt-4"
          >
            Read full recommendation
            <ArrowUpRight size={14} />
          </Link>
        )}
      </div>
    </div>
  )
}
