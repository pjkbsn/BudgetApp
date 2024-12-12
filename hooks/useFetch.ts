import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { ApiResponseGet } from "../types";

export const useFetch = <T>(url: string | null): ApiResponseGet<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = async () => {
    if (!url) return;
    setError(null);
    setLoading(true);
    try {
      const response: AxiosResponse<T> = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const jsonData = response.data;
      setData(jsonData);
    } catch (error: any) {
      console.error("Fetch Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, [url]);
  return { data, loading, error, refetch };
};
