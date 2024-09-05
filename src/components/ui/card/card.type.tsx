import { ReactNode } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  isShadowActive?: boolean;
}
