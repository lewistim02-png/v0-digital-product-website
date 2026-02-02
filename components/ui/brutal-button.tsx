import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const brutalButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-4 border-black",
  {
    variants: {
      variant: {
        default: "bg-[#FF4444] text-white brutal-shadow brutal-hover",
        outline: "bg-white text-black brutal-shadow brutal-hover",
        ghost: "border-0 hover:bg-accent hover:text-accent-foreground",
        green: "bg-[#00C853] text-white brutal-shadow brutal-hover",
      },
      size: {
        default: "h-12 px-10 py-4",
        sm: "h-10 px-6 py-3 text-sm",
        lg: "h-14 px-12 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface BrutalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brutalButtonVariants> {
  asChild?: boolean
}

const BrutalButton = React.forwardRef<HTMLButtonElement, BrutalButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(brutalButtonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
BrutalButton.displayName = "BrutalButton"

export { BrutalButton, brutalButtonVariants }
