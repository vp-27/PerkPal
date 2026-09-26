import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        liquid:
          "relative overflow-hidden bg-primary text-primary-foreground font-semibold shadow-[0_4px_16px_rgba(5,150,105,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-primary/40 backdrop-blur-md transition-all duration-300 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 active:scale-[0.98] active:brightness-95 hover:shadow-[0_8px_25px_rgba(5,150,105,0.4),inset_0_1px_2px_rgba(255,255,255,0.6)]",
        glass:
          "relative overflow-hidden bg-white/50 dark:bg-white/[0.08] backdrop-blur-xl border border-white/40 dark:border-white/10 text-foreground font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all duration-300 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 active:scale-[0.98] hover:bg-white/70 dark:hover:bg-white/[0.14] hover:border-white/60 dark:hover:border-white/20 hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)]",
        liquidGlow:
          "relative overflow-hidden bg-amber-500 text-slate-950 font-bold shadow-[0_4px_20px_rgba(245,158,11,0.3),inset_0_1px_1px_rgba(255,255,255,0.5)] border border-amber-400/50 backdrop-blur-md transition-all duration-300 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition-transform before:duration-700 active:scale-[0.98] active:brightness-95 hover:shadow-[0_8px_28px_rgba(245,158,11,0.5),inset_0_1px_2px_rgba(255,255,255,0.8)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
