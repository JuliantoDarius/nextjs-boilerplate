import {
  DatePickerInput,
  DatePickerInputProps,
  DatePickerType,
} from "@mantine/dates";
import React from "react";

export default function InputDatepicker(
  props: DatePickerInputProps<DatePickerType>
) {
  return (
    <DatePickerInput
      w="100%"
      label="Pilih Tanggal"
      placeholder="Tanggal awal - Tanggal akhir"
      type="range"
      numberOfColumns={2}
      valueFormat="DD/MM/YYYY"
      popoverProps={{
        classNames: { dropdown: "bg--foreground border-primary" },
      }}
      classNames={{
        input: "_input",
        day: "hover:bg-slate-700 clr--base _datepicker-date",
        calendarHeaderControl: "hover:bg-slate-700",
        calendarHeaderLevel: "hover:bg-slate-700",
        yearsListControl: "clr--base hover:bg-slate-700",
        monthsListControl: "clr--base hover:bg-slate-700",
      }}
      maxDate={new Date()}
      {...props}
    />
  );
}
