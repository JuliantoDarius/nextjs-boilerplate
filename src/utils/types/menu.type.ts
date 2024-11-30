import { ReactNode } from "react";

export type Menu = {
  routeTo: string;
  menuText: string;
  icon: ReactNode;
  id?: string;
  dropdownMenu?: DropdownItem[];
};

export type DropdownItem = {
  routeTo?: string;
  onClick?: () => void;
  children: ReactNode;
};
