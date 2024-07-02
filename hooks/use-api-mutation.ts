import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    try {
      return apiMutation(payload);
    } catch (error) {
      throw new Error(error);
    } finally {
      setPending(false);
    }
  };

  return {
    mutate,
    pending,
  };
};
