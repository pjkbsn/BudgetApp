export const groupByCategory = (transactions: any[], type: string) => {
  if (!transactions || transactions.length === 0) return [];

  const groupedData = transactions
    .filter((item) => item.type === type)
    .reduce((acc: Record<string, number>, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    }, {});

  return Object.entries(groupedData).map(([category, amount]) => ({
    text: category + ", " + amount + "kr",
    value: amount,
    color: getColorForCategory(type, category),
  }));
};

const getColorForCategory = (type: string, category: string) => {
  const categoryColors: Record<string, Record<string, string>> = {
    Income: {
      Salary: "#00FF00",
      Loan: "#2196F3",
    },
    Expense: {
      Rent: "#9E9E9E",
      Food: "#FF9800",
      Bills: "#F44336",
      Transport: "#03A9F4",
    },
  };

  return categoryColors[type]?.[category] || "#B0BEC5";
};
