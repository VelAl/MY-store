import { T_Order } from "./appTypes";

export type T_OrdersTabelStucture = {
  tite: string;
  headerClassName?: string;
  getCellContent: (order: T_Order) => string | number;
  cellClassName?: string;
}[];

export const tableStructure: T_OrdersTabelStucture = [
  {
    tite: "Name",
    getCellContent: (order) => order.attributes.name,
  },
  {
    tite: "Addres",
    getCellContent: (order) => order.attributes.address,
  },
  {
    tite: "Products",
    headerClassName: "w-28",
    getCellContent: (order) => order.attributes.numItemsInCart,
    cellClassName: "pl-8",
  },
  {
    tite: "Cost",
    headerClassName: "w-28",
    getCellContent: (order) => order.attributes.orderTotal,
  },
  {
    tite: "Date",
    headerClassName: "w-32",
    getCellContent: (order) =>
      new Date(order.attributes.createdAt).toDateString(),
  },
];
