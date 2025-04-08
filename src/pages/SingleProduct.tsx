import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { SelectProductColor, SelectProductQnt } from "@/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatAsDollars, T_Product } from "@/utils";

export const SingleProduct = () => {
  const {
    attributes: { colors, company, description, image, price, title },
  } = useLoaderData() as T_Product;

  const [color, setColor] = useState(colors[0]);
  const [qnt, setQnt] = useState(1);

  const addToCart = () => {
    console.log(color, qnt);
  };

  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link" size="sm">
          <Link to="/products">Products</Link>
        </Button>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className=" w-96 max-h-96 object-cover rounded-lg lg:w-full"
        />

        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {formatAsDollars(price)}
          </p>
          <p className="mt-6 leading-8">{description}</p>

          <SelectProductColor
            colors={colors}
            color={color}
            setColor={setColor}
          />
          <SelectProductQnt
            amount={qnt}
            mode="singleProduct"
            setAmount={setQnt}
          />
          <Button size="lg" className="mt-8" onClick={addToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
};
