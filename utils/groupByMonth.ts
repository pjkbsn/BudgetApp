import { format, parseISO } from "date-fns";

export const groupByMonth = (transactions: any) => {
  // Sortera alla transaktioner efter datum, senaste först
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Gruppera transaktionerna efter månad
  return sortedTransactions.reduce((groups, transaction) => {
    const monthYear = format(parseISO(transaction.date), "MMMM yyyy");
    const group = groups.find((g: any) => g.title === monthYear);
    if (group) {
      group.data.push(transaction);
    } else {
      groups.push({ title: monthYear, data: [transaction] });
    }
    return groups;
  }, []);
};
