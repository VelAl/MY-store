import { FC } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type T_PropsSingle = {
  mode: "singleProduct";
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

type T_PropsCart = {
  mode: "cartItem";
  amount: number;
  setAmount: (qnt: number) => void;
};

export const SelectProductQnt: FC<T_PropsSingle | T_PropsCart> = ({
  amount,
  mode,
  setAmount,
}) => {
  const isCart = mode === "cartItem";
  const length = isCart ? amount + 10 : 10;

  return (
    <>
      <h4 className="font-medium mb-2">Quantity</h4>
      <Select
        defaultValue={`${amount}`}
        onValueChange={(val) => setAmount(+val)}
      >
        <SelectTrigger className={isCart ? "w-[75px]" : "w-[180px]"}>
          <SelectValue placeholder={amount} />

          <SelectContent>
            {Array.from({ length }, (_, i) => (
              <SelectItem key={i} value={`${i + 1}`}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectTrigger>
      </Select>
    </>
  );
};
