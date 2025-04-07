import { type LoaderFunction } from "react-router-dom";

import { T_ProductsResponse } from "../appTypes";
import { fetcher } from "../fetcher";

export const productsPageLoader: LoaderFunction = async ({
  request,
}): Promise<T_ProductsResponse> => {
  const params: { [key: string]: string } = {};

  new URL(request.url).searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const { data } = await fetcher.get<T_ProductsResponse>("/products", {
    params,
  });

  return data;
};
