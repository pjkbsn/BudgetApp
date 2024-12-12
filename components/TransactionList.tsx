import React, { useState } from "react";
import { View, Text, FlatList, Switch, StyleSheet } from "react-native";
import { useTransaction } from "@/context/TransactionContext";

export default function TransactionListScreen() {
  const { data, loading, error } = useTransaction();

  const [showIncome, setShowIncome] = useState(true);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const filteredTransactions = data?.filter(
    (transaction) => transaction.type === (showIncome ? "Income" : "Expense")
  );

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text>Show Income</Text>
        <Switch
          value={showIncome}
          onValueChange={() => setShowIncome((prev) => !prev)}
        />
        <Text>Show Expense</Text>
      </View>

      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.text}>Amount: {item.amount}kr</Text>
            <Text style={styles.text}>Category: {item.category}</Text>
            <Text style={styles.text}>Type: {item.type}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No transactions to display</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  listItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
  },
});
