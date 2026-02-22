import { cn } from "@/lib/utils"

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("w-full max-w-site mx-auto px-4 sm:px-6", className)}>
      {children}
    </div>
  )
}
