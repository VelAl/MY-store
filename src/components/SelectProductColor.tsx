import { FC } from "react";

type T_Props = {
  colors: string[];
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectProductColor: FC<T_Props> = ({
  color,
  colors,
  setColor,
}) => {
  return (
    <div className="mt-6 mb-6">
      <h4 className="text-md font-medium tracking-wider">Select color</h4>
      <div className="mt-2 flex gap-2">
        {colors.map((itemColor) => {
          const isActive = itemColor === color;
          return (
            <div
              key={itemColor}
              className={`w-6 h-6 rounded-full border-1 ${
                !isActive && "cursor-pointer"
              } ${isActive && "border-primary border-2  box-border"}`}
              style={{ backgroundColor: itemColor }}
              onClick={() => {
                if (!isActive) setColor(itemColor);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
