import { createContext, ReactNode, useContext } from "react";
import { useFetch } from "@/hooks/useFetch";
import { usePost } from "@/hooks/usePost";
import { Transactions } from "@/types";
import { useDelete } from "@/hooks/useDelete";

interface TransactionContextType {
  data: Transactions[] | null;
  loading: boolean;
  error: string | null;
  fetchData: () => void;
  addTransaction: (transaction: Transactions) => void;
  deleteTransaction: (id: string | number) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const { data, loading, error, refetch } = useFetch<Transactions[]>(
    "http://10.0.2.2:3000/transactions"
  );

  const { post } = usePost<Transactions>("http://10.0.2.2:3000/transactions");

  const { deleteData } = useDelete<Transactions>(
    "http://10.0.2.2:3000/transactions"
  );

  const fetchData = () => {
    refetch();
  };

  const addTransaction = async (transaction: Transactions) => {
    try {
      await post(transaction);
      fetchData();
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const deleteTransaction = async (id: string | number) => {
    try {
      await deleteData(id); // Radera transaktionen från API:et
      fetchData(); // Uppdatera transaktionslistan
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        data,
        loading,
        error,
        fetchData,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = (): TransactionContextType => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};
