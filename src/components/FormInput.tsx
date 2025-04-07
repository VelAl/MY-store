import { FC, InputHTMLAttributes } from "react";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

type T_Props = {
  label: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<T_Props> = ({
  label,
  name,
  type = "text",
  ...rest
}) => (
  <div className="mb-2">
    <Label htmlFor={name} className="mb-1">{label}</Label>
    <Input id={rest.id || name} name={name} type={type} {...rest} />
  </div>
);
