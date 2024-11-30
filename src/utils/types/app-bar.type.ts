import { ReactNode } from "react";

export type AppBarIcon = "add" | "back";

export type AppBarProps = {
  routeTo?: string;
  onClick?: () => void;
  render: ReactNode;
  icon?: AppBarIcon;
};
