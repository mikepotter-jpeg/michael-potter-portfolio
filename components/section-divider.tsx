export default function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`} aria-hidden="true">
      <div className="w-2 h-2 rounded-full bg-text-tertiary/30" />
      <div className="w-2 h-2 bg-text-tertiary/30" />
      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[7px] border-l-transparent border-r-transparent border-b-text-tertiary/30" />
    </div>
  )
}
