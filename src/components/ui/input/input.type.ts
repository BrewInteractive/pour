import { ReactNode } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixItem?: ReactNode;
  suffixItem?: ReactNode;
  prefixClassName?: string;
  suffixClassName?: string;
  label?: string;
  prefixItemPadding?: string;
  suffixItemPadding?: string;
}
