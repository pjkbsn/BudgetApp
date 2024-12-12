import { useDate } from "@/context/DateContext";
import { useCallback, useState } from "react";
import { Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";

export const DatePicker = () => {
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
    <>
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
      />
    </>
  );
};
