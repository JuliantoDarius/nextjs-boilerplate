import { ReactNode } from "react";

export type TableColumn = {
  header: string;
  cells: ReactNode[];
};
