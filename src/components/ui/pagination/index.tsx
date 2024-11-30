import { Pagination as MantinePagination } from "@mantine/core";

type Props = {
  pageInfo: string;
  totalPage: number;
  currentPage: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  pageInfo,
  totalPage,
  currentPage,
  onChange,
}: Props) {
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
