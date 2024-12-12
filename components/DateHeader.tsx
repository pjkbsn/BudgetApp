import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";
import { useDate } from "@/context/DateContext";
import { formatDate } from "@/utils/formatDate";

interface DateHeaderProps {
  screen: "daily" | "weekly" | "monthly" | "yearly";
}

export const DateHeader = ({ screen }: DateHeaderProps) => {
  const { date, setDate } = useDate();
  const [open, setOpen] = useState(false);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params: any) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatDate(date, screen)}</Text>

      <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
        Pick date
      </Button>

      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date || undefined}
        onConfirm={onConfirmSingle}
        validRange={{
          endDate: new Date(),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
