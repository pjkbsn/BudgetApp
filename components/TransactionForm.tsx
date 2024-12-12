import { useModal } from "@/context/ModalContext";
import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";
import { View, Text } from "react-native";
import {
  registerTranslation,
  en,
  DatePickerInput,
} from "react-native-paper-dates";
import { format } from "date-fns";
import {
  Modal,
  Button,
  PaperProvider,
  TextInput,
  Checkbox,
} from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { useTransaction } from "@/context/TransactionContext";

export const TransactionForm = () => {
  const [amount, setAmount] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState<
    "Income" | "Expense"
  >("Income");
  const [category, setCategory] = useState<string>();
  const [date, setDate] = useState<Date>(new Date());
  registerTranslation("en", en);

  function formatDateToJSON(date?: Date): string | null {
    if (!date) {
      return null;
    }
    return format(date, "yyyy-MM-dd");
  }

  const { addTransaction } = useTransaction();

  const {
    data: fetchData,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<any[]>("http://10.0.2.2:3000/categories");

  const OPTIONS =
    fetchData?.map((category) => ({
      label: category.name,
      value: category.name,
    })) || [];

  const { isModalVisible, hideModal } = useModal();

  const containerStyle = {
    backgroundColor: "white",
    padding: 15,
    height: 500,
  };

  const clearInputs = () => {
    setAmount("");
    setCategory("");
    setDate(new Date());
  };

  const handleTransaction = async () => {
    try {
      if (!amount || !category || !date) {
        throw new Error("Amount, category and date are required.");
      }
      const transactionData = {
        type: selectedCheckbox,
        amount: parseFloat(amount),
        category: category,
        date: formatDateToJSON(date) || "",
      };
      addTransaction(transactionData);
      clearInputs();
      hideModal();
    } catch (error) {
      console.error("Error while creating transaction", error);
    }
  };

  if (fetchLoading) return <Text>Loading...</Text>;
  if (fetchError) return <Text>{fetchError}</Text>;

  return (
    <PaperProvider>
      <Modal
        visible={isModalVisible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: "row" }}>
            <Checkbox.Item
              label="Income"
              status={selectedCheckbox === "Income" ? "checked" : "unchecked"}
              disabled={selectedCheckbox === "Expense"}
              onPress={() =>
                setSelectedCheckbox((prev) =>
                  prev === "Income" ? "Expense" : "Income"
                )
              }
            />
            <Checkbox.Item
              label="Expense"
              status={selectedCheckbox === "Expense" ? "checked" : "unchecked"}
              disabled={selectedCheckbox === "Income"}
              onPress={() =>
                setSelectedCheckbox((prev) =>
                  prev === "Expense" ? "Income" : "Expense"
                )
              }
            />
          </View>
          <TextInput
            value={amount}
            onChangeText={(amount) => setAmount(amount)}
            label="Amount"
            mode="outlined"
          />
          <View style={{ gap: 50 }}>
            <Dropdown
              label="Category"
              placeholder="Select Category"
              options={OPTIONS}
              value={category}
              onSelect={setCategory}
            />
            <DatePickerInput
              locale="en"
              value={date}
              onChange={(date) => date && setDate(date)}
              inputMode="start"
              mode="outlined"
              label="Pick a date"
              presentationStyle="overFullScreen"
              validRange={{
                endDate: new Date(),
              }}
              style={{ marginBottom: 10 }}
            />
            <Button icon={"check"} mode="contained" onPress={handleTransaction}>
              Add
            </Button>
          </View>
        </View>
      </Modal>
    </PaperProvider>
  );
};
