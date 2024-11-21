import { Select, SelectProps } from "@mantine/core";

const inputSelectStyles = {
  input: {
    backgroundColor: "#404142",
    border: "none",
    padding: "0.5rem 0.75rem",
    color: "white",
    fontSize: "0.875rem",
    fontWeight: 600,
    borderRadius: "0.5rem",
  },
  label: { fontSize: "0.75rem", fontWeight: 600, color: "#c7c7c7" },
  dropdown: {
    backgroundColor: "#404142",
    fontWeight: 600,
    borderColor: "#3b82f6",
  },
};

export default function InputSelect(props: SelectProps) {
  return <Select styles={inputSelectStyles} {...props} />;
}
