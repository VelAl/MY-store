import { useMemo } from "react";

import { userSelector } from "@/features/user/userSlice";

import { useAppSelector } from "./reduxHooks";
import { appPaths } from "../appPaths";

type Link = {
  href: string;
  label: string;
  isPrivate?: boolean;
};

export const links: Link[] = [
  { href: appPaths.home, label: "home" },
  { href: appPaths.about, label: "about" },
  { href: appPaths.products, label: "products" },
  { href: appPaths.cart, label: "cart" },
  { href: appPaths.checkout, label: "checkout", isPrivate: true },
  { href: appPaths.orders, label: "orders", isPrivate: true },
];

export const useLinks = () => {
  const user = useAppSelector(userSelector);

  const filteredLinks = useMemo(() => {
    if (!user) {
      return links.filter(({ isPrivate }) => !isPrivate);
    }
    return links;
  }, [user]);

  return filteredLinks;
};
