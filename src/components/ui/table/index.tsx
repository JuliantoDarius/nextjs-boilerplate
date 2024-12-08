import { Loader, Table as MantineTable } from "@mantine/core";
import Pagination from "@components/ui/pagination";
import { TableColumn } from "@utils/types/table.type";
import { useTableData } from "@hooks/useTableData";
import { randomId } from "@mantine/hooks";
import { ReactNode } from "react";

type Props = {
  columns: TableColumn[];
  totalData: number;
  limitPage: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  isLoading?: boolean;
};

export default function Table({
  columns,
  totalData,
  currentPage,
  limitPage,
  isLoading,
  onChangePage,
}: Props) {
  const { tableCells, tableHeader } = useTableData(columns);

  return (
    <>
      <MantineTable.ScrollContainer minWidth={320} type="native">
        <table className="min-w-full table-fixed">
          <thead>
            <tr>
              {tableHeader.map((tableHead) => (
                <th key={randomId()}>{tableHead}</th>
              ))}
            </tr>
          </thead>

          {!isLoading && totalData > 0 && tableCells.length > 0 ? (
            <tbody>
              {tableCells.map((cell) => {
                return (
                  <tr key={randomId()}>
                    {cell.map((item: ReactNode) => (
                      <td key={randomId()}>{item}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center w-full table-cell"
                >
                  {isLoading ? (
                    <Loader my={10} color="foreground" />
                  ) : (
                    "Data Tidak Ditemukan"
                  )}
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </MantineTable.ScrollContainer>
      {totalData > 0 && tableCells.length > 0 && (
        <Pagination
          currentPage={currentPage}
          limitPage={limitPage}
          totalData={totalData}
          onChange={(page) => onChangePage(page)}
        />
      )}
    </>
  );
}
