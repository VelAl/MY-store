import { FC } from "react";

import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type T_Props = {
  name: string;
  label?: string;
  defaultValue?: string;
};

export const FormCheckbox: FC<T_Props> = ({ name, defaultValue, label }) => {
  return (
    <div>
      <Label htmlFor={name} className="mb-1">
        {label || name}
      </Label>
      <Checkbox
        id={name}
        name={name}
        className="mt-2"
        defaultChecked={defaultValue === "on"}
      />
    </div>
  );
};
