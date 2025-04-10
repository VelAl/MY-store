import { type LoaderFunction } from "react-router-dom";

import { T_Product } from "../appTypes";
import { fetcher } from "../fetcher";

export const singleProductLoader: LoaderFunction = async ({
  params,
}): Promise<T_Product> => {
  const { id } = params;

  const { data } = await fetcher.get<{ data: T_Product }>(`/products/${id}`);

  return data.data;
};
