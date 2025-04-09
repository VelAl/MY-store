import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { cartSelector } from "@/features/cart/cartSlice";
import { appPaths } from "@/utils";
import { useAppSelector } from "@/utils/hooks";

import { Button } from "./ui/button";

export const CartButton = () => {
  const { numItemsInCart } = useAppSelector(cartSelector);
  
  return (
    <Button
      asChild
      size="icon"
      variant="outline"
      className="flex justify-center items-center relative"
    >
      <Link to={appPaths.cart}>
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
