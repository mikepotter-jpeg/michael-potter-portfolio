import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const categoryBadgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2 py-2 text-[0.875rem] leading-none border rounded-[8px] text-text-tertiary border-text-tertiary/40 transition-colors duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-accent-lighter hover:border-accent/40",
        filled: "bg-accent-lighter border-accent/40 hover:bg-accent/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CategoryBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof categoryBadgeVariants> {}

const CategoryBadge = React.forwardRef<HTMLSpanElement, CategoryBadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(categoryBadgeVariants({ variant, className }))}
      {...props}
    />
  )
)
CategoryBadge.displayName = "CategoryBadge"

export { CategoryBadge, categoryBadgeVariants }
