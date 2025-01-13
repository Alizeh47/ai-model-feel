import { cn } from "../../../src/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"

const paragraphVariants = cva(
  "font-neue-haas text-black",
  {
    variants: {
      size: {
        default: "text-[16px] leading-[24px]",
        small: "text-[14px] leading-[20px]",
        large: "text-[18px] leading-[28px]",
      },
      weight: {
        regular: "font-normal",
        medium: "font-medium",
      }
    },
    defaultVariants: {
      size: "default",
      weight: "regular"
    }
  }
)

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({
  className,
  size,
  weight,
  children,
  ...props
}, ref) => {
  return (
    <p
      ref={ref}
      className={cn(paragraphVariants({ size, weight }), className)}
      {...props}
    >
      {children}
    </p>
  )
})

Paragraph.displayName = "Paragraph"

export { Paragraph, paragraphVariants }
