import { type LoaderFunction } from "react-router-dom";

import { Filters, PaginationContainer, ProductsContainer } from "@/components";

export const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
