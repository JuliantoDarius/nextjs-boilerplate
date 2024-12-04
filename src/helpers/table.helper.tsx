import { TableColumn } from "@utils/types/table.type";
import { ReactNode } from "react";

export const transformTableCell = (data: ReactNode[][]) => {
  // * data array should be like [['john', 'doe'], [20, 19, 44], ...etc] 2D array
  if (data.length == 0) return [];
  const rowCount = data[0].length;

  return Array.from({ length: rowCount }, (_, rowIndex) => {
    // * after transform should be [['john', 20, ...etc], ['doe', 19, ...etc]]
    return data.map((column) => column[rowIndex]);
  });
};

export const columnHelper = <T,>(
  datas: T[],
  dataKey: keyof T,
  header: string = "",
  children?: (dataValue: any) => ReactNode
): TableColumn => {
  const allCells =
    datas.map(
      (data) => children?.(data[dataKey]) ?? String(data[dataKey] ?? "")
    ) ?? [];

  return {
    header: header ?? "",
    cells: allCells,
  };
};
