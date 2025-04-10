import { AxiosError, AxiosResponse } from "axios";

import { fetcher } from "@/utils";

interface GuestLoginResponse {
  username: string;
  jwt: string;
}

export const loginAsGuestRequest = async (): Promise<GuestLoginResponse> => {
  try {
    const response: AxiosResponse = await fetcher.post("/auth/local", {
      identifier: "test@test.com",
      password: "secret",
    });

    const { username } = response.data.user;
    const { jwt } = response.data;

    return { username, jwt };
  } catch (err) {
    let message = "Something went wrong...";

    if (err instanceof AxiosError) {
      message = err.response?.data?.error?.message || err.message;
    } else if (err instanceof Error) {
      message = err.message;
    }

    throw new Error(message);
  }
};
