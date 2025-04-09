import { Link } from "react-router-dom";

import { CartItemsList, CartTotals, SectionTitle } from "@/components";
import { Button } from "@/components/ui/button";
import { cartSelector } from "@/features/cart/cartSlice";
import { userSelector } from "@/features/user/userSlice";
import { appPaths } from "@/utils";
import { useAppSelector } from "@/utils/hooks";

export const Cart = () => {
  const user = useAppSelector(userSelector);
  const { numItemsInCart } = useAppSelector(cartSelector);

  if (!numItemsInCart) {
    return <SectionTitle text="Your cart is currently empty." />;
  }

  return (
    <>
      <SectionTitle text="Shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {
            <Button asChild className="mt-8 w-full">
              <Link to={`${user ? appPaths.checkout : appPaths.landing}`}>
                {user ? "Proceed to checkout" : "Please Login"}
              </Link>
            </Button>
          }
        </div>
      </div>
    </>
  );
};
