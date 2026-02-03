interface RecommendationProps {
  quote: string
  name: string
  role: string
}

export default function Recommendation({ quote, name, role }: RecommendationProps) {
  return (
    <div className="bg-background-secondary rounded-2xl p-8 space-y-8">
      {/* Quote */}
      <div 
        className="text-body text-text-secondary prose prose-p:mb-4 last:prose-p:mb-0"
        dangerouslySetInnerHTML={{ __html: quote }}
      />
      
      {/* Attribution */}
      <div className="space-y-1">
        <h4 className="text-h3 text-text-primary">{name}</h4>
        <p className="text-body text-text-tertiary">{role}</p>
      </div>
    </div>
  )
}
