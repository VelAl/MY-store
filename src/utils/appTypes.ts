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
