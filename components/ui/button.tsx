import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button text-ui font-medium ring-offset-background-primary transition-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-text-primary text-background-primary hover:bg-accent-hover hover:scale-105",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 hover:scale-105",
        outline:
          "border-2 border-text-primary bg-transparent text-text-primary hover:bg-text-primary hover:text-background-primary hover:scale-105",
        secondary:
          "bg-background-secondary text-text-primary border-2 border-border hover:bg-accent-lighter hover:border-accent hover:scale-105",
        ghost: "text-text-primary hover:bg-accent-lighter hover:scale-105",
        link: "text-text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 [&_svg]:size-4",
        sm: "h-9 rounded-button px-3 [&_svg]:size-4",
        lg: "h-11 rounded-button px-8 [&_svg]:size-5",
        icon: "h-10 w-10 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
