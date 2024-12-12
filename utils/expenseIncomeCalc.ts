export const expenseIncomeCalc = (transactions: any[] = []) => {
  return (
    transactions.reduce(
      (acc, item) => {
        if (item.type === "Income") {
          acc.income += item.amount;
        } else if (item.type === "Expense") {
          acc.expense += item.amount;
        }
        return acc;
      },
      { income: 0, expense: 0 }
    ) || { income: 0, expense: 0 }
  );
};
