import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import Check from "../../../assets/check.svg";
//"peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  id: string;
  disabled?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, id, label, disabled, ...props }, ref) => (
  <div
    className={cn(
      "w-fit flex flex-row items-center justify-center gap-2",
      disabled && "opacity-50"
    )}
  >
    <CheckboxPrimitive.Root
      disabled={disabled}
      id={id}
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary focus-visible:outline-none disabled:cursor-not-allowed  data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <img src={Check} alt="Your SVG" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>

    {label && (
      <label
        htmlFor={id}
        className={cn(
          "cursor-pointer text-sm font-medium",
          disabled && "cursor-auto"
        )}
      >
        {label}
      </label>
    )}
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
