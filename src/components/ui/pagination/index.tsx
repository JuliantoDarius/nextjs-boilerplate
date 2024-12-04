import { Pagination as MantinePagination } from "@mantine/core";
import { useMemo } from "react";

type Props = {
  totalData: number;
  limitPage: number;
  currentPage: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  totalData,
  limitPage,
  currentPage,
  onChange,
}: Props) {
  const { totalPage, pageInfo } = useMemo(() => {
    const totalPage = Math.ceil(totalData / limitPage);
    const pageInfo = `${currentPage * limitPage - limitPage + 1} - ${
      currentPage >= totalPage ? totalData : currentPage * limitPage
    } dari ${totalData} data`;
    return { totalPage, pageInfo };
  }, [totalData, limitPage, currentPage]);
  return (
    <div className="__page-container">
      <p className="__page-info max-[700px]:mb-1">{pageInfo}</p>
      <MantinePagination
        color="foreground"
        total={totalPage}
        value={currentPage}
        onChange={onChange}
      />
    </div>
  );
}
