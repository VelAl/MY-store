import { ActionFunction, redirect } from "react-router-dom";
import { toast } from "sonner";

import { appPaths } from "../appPaths";
import { errorHandler } from "../errorHandler";
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
    errorHandler(error);
    return null;
  }
};
