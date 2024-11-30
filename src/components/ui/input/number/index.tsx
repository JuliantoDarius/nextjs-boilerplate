import { NumberInput, NumberInputProps } from "@mantine/core";

export default function InputNumber(props: NumberInputProps) {
  return (
    <NumberInput
      leftSection={"Rp"}
      thousandSeparator="."
      decimalSeparator=","
      classNames={{ input: "_input pl-8", label: "_input-label" }}
      hideControls
      {...props}
      error={undefined}
    />
  );
}
