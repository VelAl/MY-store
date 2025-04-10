import { ActionFunction } from "react-router-dom";

// import { fetcher } from "../fetcher";

export const registerRequest: ActionFunction = async ({
  request,
}): Promise<null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data);

  return null;
};
