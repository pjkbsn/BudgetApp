import { TransactionPieChart } from "@/components/TransactionPieChart";
import { useDate } from "@/context/DateContext";
import { useTransaction } from "@/context/TransactionContext";
import { groupByCategory } from "@/utils/groupByCategory";
import { isSameWeek } from "date-fns";
import { View, Text } from "react-native";

export default function WeeklyDetails() {
  const { data, loading, error } = useTransaction();

  const { date } = useDate();

  const weeklyTransactions = (data || []).filter((transaction) =>
    isSameWeek(new Date(transaction.date), date)
  );

  const incomeData = groupByCategory(weeklyTransactions || [], "Income");
  const expenseData = groupByCategory(weeklyTransactions || [], "Expense");

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
