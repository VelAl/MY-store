export const formatAsDollars = (value: string | number): string => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value) / 100);

  return price;
};
