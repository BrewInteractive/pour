import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixItem?: ReactNode;
  text: string;
  suffixItem?: ReactNode;
  textClassName?: string;
  disabled?: boolean;
}

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, text, prefixItem, suffixItem, textClassName, disabled }) => (
    <div
      className={cn(
        "flex items-center justify-between h-8 px-2 hover:bg-accent rounded-sm transition-colors duration-200",
        disabled && "opacity-50 hover:bg-transparent",

        className
      )}
    >
      <div className="flex items-center gap-2">
        {prefixItem}
        <span
          className={cn("text-sm font-medium text-foreground", textClassName)}
        >
          {text}
        </span>
      </div>
      {suffixItem}
    </div>
  )
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
