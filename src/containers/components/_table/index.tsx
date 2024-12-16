import { columnHelper } from "@helpers/table.helper";
import { Button } from "@mantine/core";
import { TableColumn } from "@utils/types/table.type";

type TableData = {
  name: string;
  age: number;
  balance: number;
  workingAs: string;
};

const exampleData: TableData[] = [
  {
    name: "Ricardo Valdez",
    age: 20,
    balance: 595760,
    workingAs: "Front-end Engineer",
  },
  {
    name: "Gregory Herrera",
    age: 20,
    balance: 414577,
    workingAs: "Back-end Engineer",
  },
  {
    name: "Manuel Torres",
    age: 21,
    balance: 315106,
    workingAs: "Product Manager",
  },
];

export const dataColumn: TableColumn[] = [
  columnHelper(exampleData, "name", "Name"),
  columnHelper(exampleData, "age", "Age"),
  columnHelper(exampleData, "balance", "Balance", { isCurrency: true }),
  columnHelper(exampleData, "workingAs", "Working As"),
  columnHelper(exampleData, "name", "Action", {
    children: (value) => {
      return (
        <div className="w-full grid place-items-center">
          <Button type="button" onClick={() => console.log(value, "action")}>
            Edit
          </Button>
        </div>
      );
    },
  }),
];
