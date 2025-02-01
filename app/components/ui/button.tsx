import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex cursor-pointer items-center gap-2 border whitespace-nowrap no-underline
  transition-colors hover:border-yellow hover:bg-yellow hover:text-black focus-visible:border-black
  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50
  [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
  {
    variants: {
      align: {
        default: "justify-center",
        between: "justify-between",
      },
      kind: {
        default: "border-orange bg-orange text-white",
        outline: "border-current bg-transparent text-inherit transition-none",
        secondary: "border-ghp-300",
        tertiary: "border-yellow bg-yellow hover:border-orange hover:bg-orange hover:text-white",
      },
      rounded: {
        default: "rounded-sm",
        xl: "rounded-xl",
      },
      size: {
        default: "h-15 px-5 py-2",
        sm: "h-8 px-3",
        wide: "h-15 px-20 py-2",
      },
    },
    defaultVariants: {
      align: "default",
      kind: "default",
      rounded: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ align, className, kind, rounded, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ align, kind, rounded, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
