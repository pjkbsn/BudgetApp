import { useState } from "react";
import axios from "axios";
import { ApiResponsePost } from "../types";

export const usePost = <T>(url: string): ApiResponsePost => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const post = async (payload: T) => {
    setLoading(true);
    setError(null);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(url, payload, config);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error };
};
