import { columnHelper } from "@helpers/table.helper";
import { Button } from "@mantine/core";
import { TableColumn } from "@utils/types/table.type";

type TableData = {
  name: string;
  age: number;
  hobby: string;
  balance: number;
  workingAs: string;
};

const exampleData: TableData[] = [
  {
    name: "John",
    age: 20,
    hobby: "Coding",
    balance: 700000,
    workingAs: "Front-end Engineer",
  },
  {
    name: "Rangga",
    age: 20,
    hobby: "Coding",
    balance: 1000000,
    workingAs: "Back-end Engineer",
  },
  {
    name: "Reza",
    age: 21,
    hobby: "Gaming",
    balance: 10000,
    workingAs: "College",
  },
];

export const dataColumn: TableColumn[] = [
  columnHelper(exampleData, "name", "Name"),
  columnHelper(exampleData, "age", "Age"),
  columnHelper(exampleData, "hobby", "Hobby"),
  columnHelper(exampleData, "balance", "Balance"),
  columnHelper(exampleData, "workingAs", "Working As"),
  columnHelper(exampleData, "name", "Action", (value) => {
    return (
      <div className="w-full grid place-items-center">
        <Button type="button" onClick={() => console.log(value, "action")}>
          Edit
        </Button>
      </div>
    );
  }),
];
