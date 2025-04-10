import { ActionFunction, redirect } from "react-router-dom";

import { saveUser } from "@/features/user/userSlice";
import { store } from "@/redux-store";

import { appPaths } from "../appPaths";
import { errorHandler } from "../errorHandler";
import { fetcher } from "../fetcher";

type T_UserResp = { jwt: string; user: { username: string } };

export const loginRequest: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await fetcher.post<T_UserResp>("/auth/local", data);

    const { username } = resp.data.user;
    const { jwt } = resp.data;

    store.dispatch(saveUser({ username, jwt }));
    return redirect(appPaths.home);
  } catch (err) {
    errorHandler(err);

    return null;
  }
};

// credentials:
// email alex24@gmail.com
// password alex24
