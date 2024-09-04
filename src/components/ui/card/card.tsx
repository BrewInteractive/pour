import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/primitives/card";
import { CardProps } from "./card.type";

export const CardView = ({ title, children, footer }: CardProps) => {
  return (
    <Card
      className={
        "bg-transparent w-full border-border rounded-lg gap-4 p-4 flex-col"
      }
    >
      {title && <CardHeader>{title}</CardHeader>}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
