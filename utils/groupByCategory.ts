// Gruppera inkomster eller utgifter per kategori
export const groupByCategory = (transactions: any[], type: string) => {
  if (!transactions || transactions.length === 0) return [];

  // Filtrera på transaktionens typ och gruppera per kategori
  const groupedData = transactions
    .filter((item) => item.type === type) // Filtrera på rätt typ ("Income" eller "Expense")
    .reduce((acc: Record<string, number>, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    }, {});

  // Omvandla objektet till en array som passar för PieChart
  return Object.entries(groupedData).map(([category, amount]) => ({
    text: category + ", " + amount + "kr", // Kategorinamn visas i diagrammet
    value: amount, // Beloppet för kategorin
    color: getColorForCategory(type, category), // Färgkodning för kategorin
  }));
};

// Färgkodningsfunktion för att sätta färg beroende på typ och kategori
const getColorForCategory = (type: string, category: string) => {
  const categoryColors: Record<string, Record<string, string>> = {
    Income: {
      Salary: "#00FF00", // Grön för Salary
      Loan: "#2196F3", // Orange för Loan
    },
    Expense: {
      Rent: "#9E9E9E", // Grön för Salary
      Food: "#FF9800", // Grön för Salary
      Bills: "#F44336", // Grön för Salary
      Transport: "#03A9F4", // Grön för Salary
    },
  };

  // Om kategorin finns för den angivna typen, returnera rätt färg
  return categoryColors[type]?.[category] || "#B0BEC5"; // Standardfärg om kategori inte hittas
};
