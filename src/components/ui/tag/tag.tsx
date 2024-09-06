import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { cva } from "class-variance-authority";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  prefixItem?: ReactNode;
  suffixItem?: ReactNode;
  backgroundColor: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outlined";
}

const tagVariants = cva(
  "rounded-md px-2 flex flex-row items-center justify-center w-fit gap-2",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground ",
        secondary: "bg-secondary text-foreground",
        outlined: "border border-border text-foreground",
      },
      size: {
        sm: "h-6 text-xs",
        md: "h-8 text-sm",
        lg: "h-10 text-sm",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
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
      variant,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(tagVariants({ className, size, variant }), backgroundColor)}
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
