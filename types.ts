export type Transactions = {
  id?: string;
  type: string;
  amount: number;
  category: string;
  date: string;
};

export type ApiResponseGet<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export type ApiResponsePost = {
  loading: boolean;
  error: string | null;
  post: (payload: any) => Promise<void>;
};

export type ApiResponseDelete<T> = {
  deleteData: (id: string | number) => Promise<T | null>;
  loading: boolean;
  error: string | null;
};
