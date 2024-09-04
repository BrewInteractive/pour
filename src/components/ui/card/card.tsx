import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/primitives/card";
import { ReactNode } from "react";

interface CardProps {
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export const CardView = ({ title, children, footer }: CardProps) => {
  return (
    <Card className={"bg-border rounded-lg gap-4 p-4 flex-col"}>
      {title && <CardHeader>{title}</CardHeader>}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
