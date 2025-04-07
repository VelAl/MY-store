import { type LoaderFunction } from "react-router-dom";

import { T_ProductsResponse } from "../appTypes";
import { fetcher } from "../fetcher";

export const productsPageLoader: LoaderFunction =
  async (): Promise<T_ProductsResponse> => {
    const { data } = await fetcher.get<T_ProductsResponse>("/products");

    return data;
  };
