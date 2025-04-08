import { useSearchParams } from "react-router-dom";

const fieldsNames = [
  "search",
  "category",
  "company",
  "order",
  "price",
  "shipping",
] as const;

export const useFilterFormSearchParams = () => {
  const result = {} as {
    [k in (typeof fieldsNames)[number]]: string | undefined;
  };

  const [searchParams] = useSearchParams();

  fieldsNames.forEach((name) => {
    result[name] = searchParams.get(name) || undefined;
  });

  return result;
};
