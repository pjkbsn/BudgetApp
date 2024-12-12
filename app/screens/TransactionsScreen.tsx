import { View, Text, StyleSheet, SectionList } from "react-native";
import { useTransaction } from "@/context/TransactionContext";
import { groupByMonth } from "@/utils/groupByMonth";
import { IconButton } from "react-native-paper";

export default function TransactionsScreen() {
  const { data, loading, error, deleteTransaction } = useTransaction();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const groupedTransactions = groupByMonth(data || []);

  const handleDelete = async (id: string) => {
    try {
      deleteTransaction(id);
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedTransactions}
        keyExtractor={(item) => String(item.id)}
        renderSectionHeader={({ section }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.itemContent}>
              <Text style={styles.amount}>Amount: {item.amount}kr</Text>
              <Text>Category: {item.category}</Text>
              {item.type === "Income" ? (
                <Text style={{ color: "green" }}>Type: {item.type}</Text>
              ) : (
                <Text style={{ color: "red" }}>Type: {item.type}</Text>
              )}
              <Text>Date: {item.date}</Text>
            </View>
            <IconButton
              icon="delete"
              size={20}
              onPress={() => handleDelete(item.id)}
              style={styles.trashButton}
            />
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
  header: {
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContent: {
    flex: 1,
  },
  trashButton: {
    marginLeft: 10,
  },
});
