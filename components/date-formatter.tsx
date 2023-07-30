import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <b>
      <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>
    </b>
  );
};

export default DateFormatter;
