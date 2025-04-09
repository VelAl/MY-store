import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { numItemsInCartSelector } from "@/features/cart/cartSlice";
import { useAppSelector } from "@/utils/hooks";

import { Button } from "./ui/button";

export const CartButton = () => {
  const numItemsInCart = useAppSelector(numItemsInCartSelector);
  return (
    <Button
      asChild
      size="icon"
      variant="outline"
      className="flex justify-center items-center relative"
    >
      <Link to={"/cart"}>
        <ShoppingCart />
        {!!numItemsInCart && (
          <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {numItemsInCart}
          </span>
        )}
      </Link>
    </Button>
  );
};
