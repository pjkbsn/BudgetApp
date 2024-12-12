import { ModalProvider } from "@/context/ModalContext";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { TransactionForm } from "@/components/TransactionForm";
import { PaperProvider, Portal } from "react-native-paper";
import { TransactionProvider } from "@/context/TransactionContext";
import { DateProvider } from "@/context/DateContext";

export default function RootLayout() {
  return (
    <TransactionProvider>
      <DateProvider>
        <ModalProvider>
          <PaperProvider>
            <DrawerNavigator />
            <Portal>
              <TransactionForm />
            </Portal>
          </PaperProvider>
        </ModalProvider>
      </DateProvider>
    </TransactionProvider>
  );
}
