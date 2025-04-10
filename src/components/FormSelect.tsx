import { FC } from "react";

import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type T_SelectProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
};

export const FormSelect: FC<T_SelectProps> = ({
  name,
  options,
  defaultValue,
  label,
}) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-1 ml-1">
        {label || name}
      </Label>
      <Select name={name} defaultValue={defaultValue || options[0]}>
        <SelectTrigger id={name} className="w-full">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
