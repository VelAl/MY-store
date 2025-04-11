import { useLoaderData } from "react-router-dom";

import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from "@/components";
import { T_OrdersResponse } from "@/utils";
import { useUnloggedRedirect } from "@/utils/hooks";

export const Orders = () => {
  useUnloggedRedirect();

  const { meta } = useLoaderData() as T_OrdersResponse;

  if (!meta.pagination.total) {
    return <SectionTitle text="You have no orders yet" />;
  }

  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};
