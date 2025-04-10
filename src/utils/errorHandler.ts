import { AxiosError } from "axios";
import { toast } from "sonner";

export const errorHandler = (err: unknown): void => {
  const message =
    err instanceof AxiosError
      ? err.response?.data.error.message
      : err instanceof Error
      ? err.message
      : "Something went wrong...";

  toast.error(message);
};
