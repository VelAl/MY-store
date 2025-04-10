import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { CartTotals, CheckoutForm, SectionTitle } from "@/components";
import { cartSelector } from "@/features/cart/cartSlice";
import { userSelector } from "@/features/user/userSlice";
import { appPaths } from "@/utils";
import { useAppSelector } from "@/utils/hooks";

export const Checkout = () => {
  const navigate = useNavigate();
  const { cartTotal } = useAppSelector(cartSelector);
  const user = useAppSelector(userSelector);

  useEffect(() => {
    if (!user) {
      toast.warning("Please login to continue checkout");
      navigate(appPaths.login);
    }
  }, [user]);

  if (!cartTotal) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
