import { zeroPad } from ".";

/**
 * converts ISOString dates to dates with format: "YYYY/MM/dd  HH:mm a"
 * @param date ISOString date
 * @return "YYYY/MM/dd  HH:mm a" with local time string
 */
export const plainDateTimeText = (date: string): string => {
    const [dateStr] = date.split("T");
    const t = new Date(date).toLocaleTimeString();
    return `${dateStr.split("-").join("/")}  ${zeroPad(t.substring(0, 4))} ${t.substring(8)}`;
};
