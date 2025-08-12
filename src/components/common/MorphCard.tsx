import { Card, CardProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface MorphCardProps extends CardProps {
  children: ReactNode;
}

export const MorphCard = ({ children, ...props }: MorphCardProps) => (
  <Card {...props}>
    {children}
  </Card>
);