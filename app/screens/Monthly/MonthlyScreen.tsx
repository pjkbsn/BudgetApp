import { DateHeader } from "@/components/DateHeader";
import { useDate } from "@/context/DateContext";
import { useModal } from "@/context/ModalContext";
import { useTransaction } from "@/context/TransactionContext";
import { expenseIncomeCalc } from "@/utils/expenseIncomeCalc";
import { isSameMonth } from "date-fns";
import { Button, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function MonthlyScreen() {
  const { showModal } = useModal();
  const { data, loading, error } = useTransaction();

  const { date } = useDate();

  const monthlyTransactions = (data || []).filter((transaction) =>
    isSameMonth(new Date(transaction.date), date)
  );

  const transactionSummary = expenseIncomeCalc(monthlyTransactions || []);

  const pieData = [
    {
      value: transactionSummary.income,
      text: transactionSummary.income + "kr",
      color: "#1AF63B",
      shiftTextX: -17,
      shiftTextY: 0,
    },
    {
      value: transactionSummary.expense,
      text: transactionSummary.expense + "kr",
      color: "#FF0000",
      shiftTextX: -17,
      shiftTextY: 0,
    },
  ];

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>An error occured!</Text>
      </View>
    );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <DateHeader screen="monthly" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {monthlyTransactions.length === 0 ? (
          <Text>No transactions this month</Text>
        ) : (
          <>
            <PieChart
              showText
              textColor="black"
              radius={150}
              strokeWidth={2}
              strokeColor="#333"
              innerCircleBorderWidth={2}
              innerCircleBorderColor="#333"
              centerLabelComponent={() => {
                return (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Total sum:{" "}
                      {transactionSummary.income - transactionSummary.expense}kr
                    </Text>
                  </View>
                );
              }}
              data={pieData}
            />
          </>
        )}
      </View>
      <View style={{ position: "absolute", bottom: 15, right: 10 }}>
        <Button title="Add transaction" onPress={showModal} />
      </View>
    </View>
  );
}
