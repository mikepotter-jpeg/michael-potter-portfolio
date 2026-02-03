interface RecommendationProps {
  quote: string
  name: string
  role: string
}

export default function Recommendation({ quote, name, role }: RecommendationProps) {
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
      </div>
    </div>
  )
}
