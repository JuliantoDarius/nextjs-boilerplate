import { format } from "date-fns";

export default function payloadFormatDate(date: Date) {
  return format(date, "yyyy-MM-dd");
}
