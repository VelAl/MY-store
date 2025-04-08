import { FC, useState } from "react";

import { Label } from "@/components/ui/label";
import { formatAsDollars } from "@/utils";

import { Slider } from "./ui/slider";

type T_Props = {
  name: string;
  label?: string;
  defaultValue?: string;
};

export const FormRange: FC<T_Props> = ({ name, label, defaultValue }) => {
  const maxPrice = 1e5;
  const defaultPrice = defaultValue ? +defaultValue : maxPrice;

  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize flex justify-between">
        {label || name} <span>{formatAsDollars(selectedPrice)}</span>
      </Label>
      <Slider
        id={name}
        name={name}
        step={1000}
        max={maxPrice}
        className="mt-4 mb-1"
        value={[selectedPrice]}
        onValueChange={(val) => setSelectedPrice(val[0])}
      />
    </div>
  );
};
