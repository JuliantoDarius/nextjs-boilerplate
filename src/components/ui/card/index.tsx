import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  fitContent?: boolean;
};

export default function Card({ children, fitContent = false }: Props) {
  const cardClass = `_card ${fitContent ? "w-fit" : "w-full"}`;

  return <section className={cardClass}>{children}</section>;
}
