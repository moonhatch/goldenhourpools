import { Minus, Plus } from "lucide-react";
import * as React from "react";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Input } from "./input";

export interface NumberInputProps extends Omit<React.ComponentProps<"input">, "type" | "onChange"> {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ className, value = 0, onChange, min = 0, max, step = 1, ...props }, ref) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      // Allow empty string for clearing
      if (inputValue === "") {
        onChange?.(0);
        return;
      }

      // Only allow numbers and decimal point
      if (!/^\d*\.?\d*$/.test(inputValue)) {
        return;
      }

      const numValue = parseFloat(inputValue) || 0;

      // Apply min/max constraints
      let constrainedValue = numValue;
      if (min !== undefined && constrainedValue < min) {
        constrainedValue = min;
      }
      if (max !== undefined && constrainedValue > max) {
        constrainedValue = max;
      }

      onChange?.(constrainedValue);
    };

    const handleIncrement = () => {
      const newValue = value + step;
      if (max === undefined || newValue <= max) {
        onChange?.(newValue);
      }
    };

    const handleDecrement = () => {
      const newValue = value - step;
      if (newValue >= min) {
        onChange?.(newValue);
      }
    };

    const displayValue = value === 0 ? "" : value.toString();

    return (
      <div className={cn("flex items-center", className)}>
        <Button
          type="button"
          kind="outline"
          size="sm"
          className="h-12 w-12 shrink-0"
          onClick={handleDecrement}
          disabled={value <= min}
          aria-label="Decrease value"
        >
          <Minus className="h-4 w-4" />
        </Button>

        <Input
          {...props}
          ref={ref}
          type="number"
          inputMode="numeric"
          name="quantity"
          value={displayValue}
          onChange={handleInputChange}
          className={cn(
            `fosuc-visible:border-solid h-12 border-x-0 border-dashed border-ghp-300 bg-transparent
            text-center hover:border-solid hover:bg-white focus:border-solid focus-visible:z-10
            focus-visible:border-black focus-visible:bg-white`,
            className,
          )}
        />

        <Button
          type="button"
          kind="outline"
          size="sm"
          className="h-12 w-12 shrink-0"
          onClick={handleIncrement}
          disabled={max !== undefined && value >= max}
          aria-label="Increase value"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    );
  },
);

NumberInput.displayName = "NumberInput";

export { NumberInput };
