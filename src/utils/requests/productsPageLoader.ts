import { type LoaderFunction } from "react-router-dom";

import { T_ProductsResponse } from "../appTypes";
import { fetcher } from "../fetcher";
import { getSearchParamsAsObj } from "../getSearchParamsAsObj";

export const productsPageLoader: LoaderFunction = async ({
  request,
}): Promise<T_ProductsResponse> => {
  const params = getSearchParamsAsObj(request.url);

  const { data } = await fetcher.get<T_ProductsResponse>("/products", {
    params,
  });

  return data;
};
