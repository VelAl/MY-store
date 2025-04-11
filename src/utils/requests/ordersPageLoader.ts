import { LoaderFunction } from "react-router-dom";

import { store } from "@/redux-store";

import { T_OrdersResponse } from "../appTypes";
import { errorHandler } from "../errorHandler";
import { fetcher } from "../fetcher";
import { getSearchParamsAsObj } from "../getSearchParamsAsObj";

export const ordersPageloader: LoaderFunction = async ({
  request,
}): Promise<T_OrdersResponse | null> => {
  const user = store.getState().user.user;
  const params = getSearchParamsAsObj(request.url);

  try {
    const response = await fetcher.get<T_OrdersResponse>("/orders", {
      params,
      headers: { Authorization: `Bearer ${user?.jwt}` },
    });

    return response.data;
  } catch (err) {
    errorHandler(err);
    return null;
  }
};
