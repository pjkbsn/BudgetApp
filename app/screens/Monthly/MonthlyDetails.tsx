import { TransactionPieChart } from "@/components/TransactionPieChart";
import { useDate } from "@/context/DateContext";
import { useTransaction } from "@/context/TransactionContext";
import { groupByCategory } from "@/utils/groupByCategory";
import { isSameMonth } from "date-fns";
import { View, Text } from "react-native";

export default function MonthlyDetails() {
  const { data, loading, error } = useTransaction();

  const { date } = useDate();

  const monthlyTransactions = (data || []).filter((transaction) =>
    isSameMonth(new Date(transaction.date), date)
  );

  const incomeData = groupByCategory(monthlyTransactions || [], "Income");
  const expenseData = groupByCategory(monthlyTransactions || [], "Expense");

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {incomeData.length === 0 ? (
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          No income transactions
        </Text>
      ) : (
        <>
          <TransactionPieChart
            data={incomeData}
            centerLabel={`Income ${
              incomeData && incomeData.length > 0
                ? incomeData.reduce((sum, item) => sum + item.value, 0)
                : 0
            }kr`}
          />
        </>
      )}
      {expenseData.length === 0 ? (
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          No expense transactions
        </Text>
      ) : (
        <>
          <TransactionPieChart
            data={expenseData}
            centerLabel={`Expense ${
              expenseData && expenseData.length > 0
                ? expenseData.reduce((sum, item) => sum + item.value, 0)
                : 0
            }kr`}
          />
        </>
      )}
    </View>
  );
}
