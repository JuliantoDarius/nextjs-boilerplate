import { transformTableCell } from "@helpers/table.helper";
import { TableColumn } from "@utils/types/table.type";
import { ReactNode, useMemo } from "react";

export const useTableData = (columns: TableColumn[]) => {
  return useMemo(() => {
    const tableHeader: ReactNode[] = [];
    const tempTableCells: ReactNode[][] = [];

    columns.forEach((column) => {
      tableHeader.push(column.header);
    });
    columns.map((column) => {
      tempTableCells.push(column.cells);
    });

    const tableCells = transformTableCell(tempTableCells);
    return { tableHeader, tableCells };
  }, [columns]);
};
