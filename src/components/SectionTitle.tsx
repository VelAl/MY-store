import { FC } from "react";

import { Separator } from "./ui/separator";

type T_Props = { text: string };

export const SectionTitle: FC<T_Props> = ({ text }) => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h2>
      <Separator />
    </div>
  );
};
