import { useLoaderData } from "react-router-dom";

import { T_OrdersResponse } from "@/utils";
import { useUnloggedRedirect } from "@/utils/hooks";

export const Orders = () => {
  useUnloggedRedirect();

  const {meta, data} = useLoaderData() as T_OrdersResponse

  return <h1 className="text-4xl">Orders Page</h1>;
};
