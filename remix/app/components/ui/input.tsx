import * as React from "react";

import { cn } from "../../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-15 w-full rounded-sm border border-orange bg-white px-5 py-2 text-base text-black
          transition-colors file:border-0 file:bg-transparent file:text-base file:font-normal
          file:text-black placeholder:text-stone-400 hover:border-black focus-visible:border-black
          focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
