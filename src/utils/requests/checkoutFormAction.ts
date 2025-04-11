import { ActionFunction, redirect } from "react-router-dom";
import { toast } from "sonner";

import { clearCart } from "@/features/cart/cartSlice";
import { store } from "@/redux-store";

import { appPaths } from "../appPaths";
import { T_Checkout, T_User } from "../appTypes";
import { errorHandler } from "../errorHandler";
import { fetcher } from "../fetcher";
import { formatAsDollars } from "../formatAsDollars";

export const checkoutFormAction: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const { jwt } = store.getState().user.user as T_User;
  const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;

  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);

  const data: T_Checkout = {
    address: formValues.address as string,
    cartItems,
    chargeTotal: orderTotal,
    name: formValues.name as string,
    numItemsInCart,
    orderTotal: formatAsDollars(orderTotal),
  };

  try {
    await fetcher.post(
      "/orders",
      { data },
      { headers: { Authorization: `Bearer ${jwt}` } }
    );

    store.dispatch(clearCart());
    toast.success("Success!", { description: "Order placed" });
    return redirect(appPaths.orders);
  } catch (err) {
    errorHandler(err);
  }

  return null;
};
