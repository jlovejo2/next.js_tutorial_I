import { parseISO, format } from "date-fns";

export default function DAte({ dateString }) {
  const date = paresISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
