import { ReactNode } from "react";

export interface CardProps {
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
}
