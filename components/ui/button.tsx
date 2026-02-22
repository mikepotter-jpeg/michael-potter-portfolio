import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button text-[0.875rem] leading-none font-medium ring-offset-background-primary transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-out active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-text-primary text-background-primary hover:bg-accent-hover hover:underline hover:decoration-background-primary underline-offset-2",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-text-primary bg-transparent text-text-primary hover:bg-accent-lighter hover:border-accent hover:underline hover:decoration-accent underline-offset-2",
        link: "text-text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 touch:min-h-12 px-4 py-2 [&_svg]:size-4",
        sm: "h-9 touch:min-h-12 rounded-button px-3 [&_svg]:size-4",
        lg: "h-12 touch:min-h-12 rounded-button px-6 [&_svg]:size-5",
        icon: "h-10 w-10 touch:min-h-12 touch:min-w-12 [&_svg]:size-4 border border-border rounded-lg",
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
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, iconLeft, iconRight, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      )
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconLeft}
        {children}
        {iconRight}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
