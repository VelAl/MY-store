import { CartTotals, CheckoutForm, SectionTitle } from "@/components";
import { cartSelector } from "@/features/cart/cartSlice";
import { useAppSelector, useUnloggedRedirect } from "@/utils/hooks";

export const Checkout = () => {
  useUnloggedRedirect();
  const { cartTotal } = useAppSelector(cartSelector);

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
