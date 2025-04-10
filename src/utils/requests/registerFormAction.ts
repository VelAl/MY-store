import { ActionFunction, redirect } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { appPaths } from "../appPaths";
import { fetcher } from "../fetcher";

export const registerRequest: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await fetcher.post("/auth/local/register", data);

    toast.success("Success!", { description: "Registered." });

    return redirect(appPaths.login);
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : error instanceof Error
        ? error.message
        : "Something went wrong...";

    toast.error(message);
    return null;
  }
};
