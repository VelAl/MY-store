import { FC, useState } from "react";

import { Label } from "@/components/ui/label";
import { formatAsDollars } from "@/utils";

import { Slider } from "./ui/slider";

type FormRangeProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const FormRange: FC<FormRangeProps> = ({ name, label, defaultValue }) => {
  const step = 1000;
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
        step={step}
        max={maxPrice}
        className="mt-4 mb-1"
        value={[selectedPrice]}
        onValueChange={(val) => setSelectedPrice(val[0])}
      />
    </div>
  );
};

export { FormRange };
