import { cn } from "@/lib/utils";
import { CardProps } from "./card.type";
import React from "react";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      isShadowActive = true,
      selected,
      disabled,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "bg-transparent w-full border border-border rounded-lg gap-4 p-4 flex-col",
        selected && !disabled && "border-primary",
        disabled && "opacity-30 ",
        isShadowActive && !disabled && "shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

export default Card;
