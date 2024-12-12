import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ApiResponseDelete } from "@/types";

export const useDelete = <T>(url: string | null): ApiResponseDelete<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteData = async (id: string | number): Promise<T | null> => {
    if (!url) throw new Error("URL is required for DELETE request.");
    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<T> = await axios.delete(`${url}/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      console.error("Delete Error:", error);
      setError(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading, error };
};
