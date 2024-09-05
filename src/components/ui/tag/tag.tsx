import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { cva } from "class-variance-authority";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  prefixItem?: ReactNode;
  suffixItem?: ReactNode;
  backgroundColor: string;
  size?: "sm" | "md" | "lg";
}

const tagVariants = cva(
  "rounded-md px-2 flex flex-row bg-primary text-primary-foreground items-center justify-center w-fit gap-2",
  {
    variants: {
      size: {
        sm: "h-6 text-xs",
        md: "h-8 text-sm",
        lg: "h-10 text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      className,
      backgroundColor,
      size,
      label,
      prefixItem,
      suffixItem,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(tagVariants({ className, size }), backgroundColor)}
      {...props}
    >
      {prefixItem}
      {label}
      {suffixItem}
    </div>
  )
);
Tag.displayName = "Tag";

export default Tag;
