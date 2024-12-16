import { TableColumn } from "@utils/types/table.type";
import { ReactNode } from "react";
import { formatNumber } from "./number-format.helper";

export const transformTableCell = (data: ReactNode[][]) => {
  // * data array should be like [['john', 'doe'], [20, 19, 44], ...etc] 2D array
  if (data.length == 0) return [];
  const rowCount = data[0].length;

  return Array.from({ length: rowCount }, (_, rowIndex) => {
    // * after transform should be [['john', 20, ...etc], ['doe', 19, ...etc]]
    return data.map((column) => column[rowIndex]);
  });
};

type ColumnHelperOptions = {
  children?: (dataValue: any) => ReactNode;
  isFormatNumber?: boolean;
  isCurrency?: boolean;
};
export const columnHelper = <T,>(
  datas: T[],
  dataKey: keyof T,
  header: string = "",
  options?: ColumnHelperOptions
): TableColumn => {
  const allCells =
    datas.map((data) => {
      const isFormat = options?.isCurrency || options?.isFormatNumber;
      if (options?.children) {
        return options.children(
          isFormat
            ? formatNumber(data[dataKey] as string, options?.isCurrency)
            : data[dataKey]
        );
      }

      if (!isFormat) {
        return String(data[dataKey]) ?? "";
      }

      return formatNumber(data[dataKey] as string, options?.isCurrency);
    }) ?? [];

  return {
    header: header ?? "",
    cells: allCells,
  };
};
