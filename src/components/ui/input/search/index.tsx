import { FaSearch } from "react-icons/fa";
import Input from "..";

type Props = {
  query: string;
  setQuery: (search: string) => void;
  className?: string;
};

export default function InputSearch({ query, setQuery, className }: Props) {
  return (
    <div className="w-full relative">
      <Input
        placeholder="Cari"
        defaultValue={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        leftSection={<FaSearch />}
        name="search"
        className={className}
        containerClassName="min-w-40 w-1/4"
      />
    </div>
  );
}
