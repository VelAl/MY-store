import { useLoaderData } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { T_OrdersResponse, tableStructure } from "@/utils";

export const OrdersList = () => {
  const { data: orders, meta } = useLoaderData() as T_OrdersResponse;

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize ">
        total orders: {meta.pagination.total}
      </h4>

      <Table className="text-xs sm:text-base">
        <TableHeader>
          <TableRow>
            {tableStructure.map(({ tite, headerClassName }) => (
              <TableHead key={tite} className={headerClassName}>
                {tite}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              {tableStructure.map(({ cellClassName, tite, getCellContent }) => (
                <TableCell key={tite} className={cellClassName}>
                  {getCellContent(order)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>

        <TableCaption>A list of your recent orders</TableCaption>
      </Table>
    </div>
  );
};
