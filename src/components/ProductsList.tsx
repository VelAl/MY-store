import { Link, useLoaderData } from "react-router-dom";

import { formatAsDollars, type T_ProductsResponse } from "@/utils";

import { Card, CardContent } from "./ui/card";

export const ProductsList = () => {
  const { data: products } = useLoaderData() as T_ProductsResponse;

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map(({ attributes: { image, title, price }, id }) => (
        <Link key={id} to={`/products/${id}`}>
          <Card>
            <CardContent className="gap-y-4 grid md:grid-cols-3">
              <img
                src={image}
                alt={title}
                className="h-64 w-full md:h-48  md:w-48 rounded-md object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold capitalize">{title}</h2>
              </div>
              <p className="text-primary md:ml-auto">
                {formatAsDollars(price)}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};
