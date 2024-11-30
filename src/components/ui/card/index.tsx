import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return <section className="p-6 bg-foreground rounded-md">{children}</section>;
}
