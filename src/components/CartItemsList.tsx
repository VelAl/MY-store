import { cartSelector, editItem, removeItem } from "@/features/cart/cartSlice";
import { formatAsDollars } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";

import { SelectProductQnt } from "./SelectProductQnt";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const CartItemsList = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector(cartSelector);

  return (
    <div>
      {cartItems.map((cartItem) => (
        <Card
          key={cartItem.cartID}
          className="flex flex-col items-center gap-y-4 sm:flex-row p-6 mb-8 sm:items-start"
        >
          {/* FIRST COLUMN */}
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className="object-cover h-24 w-24 rounded-lg sm:h-32 sm:w-32"
          />

          {/* SECOND COLUMN */}
          <div className="flex-grow flex flex-col items-center sm:inline-block sm:items-start">
            <h3 className="capitalize font-medium">{cartItem.title}</h3>
            <h3 className="mt-2 capitalize text-sm">company: {cartItem.company}</h3>
            <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
              color:{" "}
              <span
                className="inline-block rounded-full h-4 w-4"
                style={{ backgroundColor: cartItem.productColor }}
              ></span>
            </p>
          </div>

          {/* THIRD COLUMN */}
          <div className="flex-grow">
            <SelectProductQnt
              mode="cartItem"
              amount={cartItem.amount}
              setAmount={(amount: number) =>
                dispatch(editItem({ cartID: cartItem.cartID, amount }))
              }
            />
          </div>

          {/* FOURTH COLUMN */}
          <div className="font-bold sm:ml-auto flex flex-col  items-center">
            {formatAsDollars(+cartItem.price)}
            <Button
              variant="link"
              className="mt-16"
              onClick={() => dispatch(removeItem(cartItem))}
            >
              Remove
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
