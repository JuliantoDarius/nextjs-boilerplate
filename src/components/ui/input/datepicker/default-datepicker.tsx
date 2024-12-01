import { DatePicker, DatePickerProps, DatePickerType } from "@mantine/dates";

export default function DefaultDatepicker(
  props: DatePickerProps<DatePickerType>
) {
  return (
    <DatePicker
      type="range"
      numberOfColumns={2}
      classNames={{
        day: "hover:bg-slate-700 text-primary-text-color _datepicker-date",
        calendarHeaderControl: "hover:bg-slate-700",
        calendarHeaderLevel: "hover:bg-slate-700",
        yearsListControl: "text-primary-text-color hover:bg-slate-700",
        monthsListControl: "text-primary-text-color hover:bg-slate-700",
      }}
      maxDate={new Date()}
      {...props}
    />
  );
}