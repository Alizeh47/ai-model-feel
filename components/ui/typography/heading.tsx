import { cn } from "../../../src/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"

const headingVariants = cva(
  "font-canela text-black tracking-tight",
  {
    variants: {
      size: {
        hero: "text-[64px] leading-[72px]",
        h1: "text-[48px] leading-[56px]",
        h2: "text-[32px] leading-[40px]",
        h3: "text-[24px] leading-[32px]",
        h4: "text-[20px] leading-[28px]",
      },
      weight: {
        regular: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
      }
    },
    defaultVariants: {
      size: "h2",
      weight: "medium"
    }
  }
)

interface HeadingProps 
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({
  className,
  size,
  weight,
  as: Component = "h2",
  children,
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(headingVariants({ size, weight }), className)}
      {...props}
    >
      {children}
    </Component>
  )
})

Heading.displayName = "Heading"

export { Heading, headingVariants }
