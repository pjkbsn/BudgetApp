import { format, startOfWeek, endOfWeek, getISOWeek } from "date-fns";

export const formatDate = (
  date: Date,
  screen: "daily" | "weekly" | "monthly" | "yearly"
): string => {
  switch (screen) {
    case "daily":
      return `Day: ${format(date, "eeee, MMMM do, yyyy")}`; // "Monday, December 11, 2024"
    case "weekly": {
      const weekNumber = getISOWeek(date);
      const start = format(startOfWeek(date), "MMMM do");
      const end = format(endOfWeek(date), "MMMM do, yyyy");
      return `Week ${weekNumber}: ${start} - ${end}`; // "Week: December 9 - December 15, 2024"
    }
    case "monthly":
      return `Month: ${format(date, "MMMM, yyyy")}`; // "December 2024"
    case "yearly":
      return `Year: ${format(date, "yyyy")}`; // "2024"
    default:
      return "";
  }
};
