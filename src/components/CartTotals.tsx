import { Fragment } from "react";

import { Card } from "@/components/ui/card";
import { cartSelector } from "@/features/cart/cartSlice";
import { formatAsDollars, T_CartState } from "@/utils";
import { useAppSelector } from "@/utils/hooks";

import { Separator } from "./ui/separator";

const keysToDisplay: { key: keyof T_CartState; title: string }[] = [
  { key: "cartTotal", title: "Subtotal" },
  { key: "shipping", title: "Shipping" },
  { key: "tax", title: "Tax" },
  { key: "orderTotal", title: "Order Total" },
] as const;

export const CartTotals = () => {
  const cart = useAppSelector(cartSelector);

  return (
    <Card className="p-8 bg-muted">
      {keysToDisplay.map(({ title, key }, i) => {
        const isLast = i === keysToDisplay.length - 1;
        return (
          <Fragment key={key}>
            <div
              className={`flex justify-between text-sm ${
                isLast && "pt-5 font-bold"
              }`}
            >
              <span>{title}</span>
              <span>{formatAsDollars(+cart[key])}</span>
            </div>
            {!isLast && <Separator className="-my-3" />}
          </Fragment>
        );
      })}
    </Card>
  );
};
