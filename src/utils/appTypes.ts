//
//_______PRODUCT____________________
export type T_ProductsResponse = {
  data: T_Product[];
  meta: T_ProductsMeta;
};

export type T_Product = {
  id: number;
  attributes: {
    category: string;
    company: string;
    createdAt: string;
    description: string;
    featured: boolean;
    image: string;
    price: string;
    publishedAt: string;
    shipping: boolean;
    title: string;
    updatedAt: string;
    colors: string[];
  };
};

export type T_ProductsMeta = {
  categories: string[];
  companies: string[];
  pagination: T_Pagination;
};

export type T_Pagination = Record<
  "page" | "pageCount" | "pageSize" | "total",
  number
>;

//_______CART____________________
export type T_CartItem = {
  cartID: string;
  productID: number;
  image: string;
  title: string;
  price: string;
  amount: number;
  productColor: string;
  company: string;
};

export type T_CartState = {
  cartItems: T_CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export const localStorageCartKey = "cart";

//_______USER____________________
export type T_User = {
  username: string;
  jwt: string;
};

export type T_UserState = {
  user: T_User | null;
};

export const demoUserName = "demo user";
export const localStorageUserKey = "user";

//_______CHECKOUT________________
export type T_Checkout = {
  name: string;
  address: string;
  chargeTotal: number;
  orderTotal: string;
  cartItems: T_CartItem[];
  numItemsInCart: number;
};

//_______ORDER___________________
export type T_Order = {
  id: number;
  attributes: {
    address: string;
    cartItems: T_CartItem[];
    createdAt: string;
    name: string;
    numItemsInCart: number;
    orderTotal: string;
    publishedAt: string;
    updatedAt: string;
  };
};

export type T_OrdersMeta = {
  pagination: T_Pagination;
};

export type T_OrdersResponse = {
  data: T_Order[];
  meta: T_OrdersMeta;
};
