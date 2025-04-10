import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { LayoutGrid, List } from "lucide-react";

import { T_ProductsResponse } from "@/utils";

import { ProductsGrid } from "./ProductsGrid";
import { ProductsList } from "./ProductsList";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const modes = ["list", "grid"] as const;
const icns = { [modes[0]]: <List />, [modes[1]]: <LayoutGrid /> } as const;

export const ProductsContainer = () => {
  const { meta } = useLoaderData() as T_ProductsResponse;
  const total = meta.pagination.total;

  const [mode, setMode] = useState<(typeof modes)[number]>(modes[1]);

  return (
    <>
      <section>
        <div className="flex justify-between items-center mt-8">
          <h4 className="font-medium text-md">
            {total} product{total > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            {modes.map((moveVariant) => (
              <Button
                size="icon"
                key={moveVariant}
                onClick={() => setMode(moveVariant)}
                disabled={!total || mode === moveVariant}
              >
                {icns[moveVariant]}
              </Button>
            ))}
          </div>
        </div>
        <Separator className="mt-2" />
      </section>
      <div>
        {!total ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : mode === modes[0] ? (
          <ProductsList />
        ) : (
          <ProductsGrid />
        )}
      </div>
    </>
  );
};
