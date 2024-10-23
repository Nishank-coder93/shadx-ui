import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"


const textVariants = cva("w-full", {
    variants: {
      emphasis: {
        low: "text-gray-600 font-light",
      },
      size: {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
      },
      weight: {
        thin: "font-thin",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        black: "font-black",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      italic: {
        true: "italic",
      },
      underline: {
        true: "underline underline-offset-2",
      },
    },
    defaultVariants: {
      size: "base",
      align: "left",
    },
  });

export interface DivProps
    extends React.HTMLAttributes<HTMLDivElement>, 
        VariantProps<typeof textVariants> {
          asChild?: boolean
        }

const Text = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, emphasis, size, weight, align, italic, underline, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(textVariants({ className, emphasis, size, weight, align, italic, underline }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Text.displayName = "Text"

export { Text }