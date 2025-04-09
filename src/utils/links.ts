import { appPaths } from "./appPaths";

type Link = {
  href: string;
  label: string;
};

export const links: Link[] = [
  { href: "/", label: "home" },
  { href: appPaths.about, label: "about" },
  { href: appPaths.products, label: "products" },
  { href: appPaths.cart, label: "cart" },
  { href: appPaths.checkout, label: "checkout" },
  { href: appPaths.orders, label: "orders" },
];
