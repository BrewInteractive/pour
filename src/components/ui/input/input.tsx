import { cn } from "@/lib/utils";
import * as React from "react";
import { InputProps } from "./input.type";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      prefixItem,
      suffixItem,
      prefixClassName,
      suffixClassName,
      label,
      type,
      disabled,
      prefixItemPadding,
      suffixItemPadding,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("w-full h-fit", disabled && "opacity-disabled")}>
        {label && (
          <div className="text-sm font-medium text-foreground">{label}</div>
        )}
        <div className="w-full h-fit relative">
          {prefixItem && (
            <div className={cn("absolute top-[8px] left-3", prefixClassName)}>
              {prefixItem}
            </div>
          )}
          <input
            disabled={disabled}
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border border-input text-foreground bg-background px-3 items-center justify-center text-sm  placeholder:text-muted-foreground disabled:cursor-not-allowed focus:border-primary focus-visible:border-primary focus:ring-0 hover:ring-0 focus-visible:outline-none hover:border-primary focus-visible:ring-0",
              prefixItemPadding,
              suffixItemPadding,
              className
            )}
            ref={ref}
            {...props}
          />
          {suffixItem && (
            <div className={cn("absolute top-[8px] right-3 ", suffixClassName)}>
              {suffixItem}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
