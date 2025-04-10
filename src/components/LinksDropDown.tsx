import { NavLink } from "react-router-dom";
import { AlignLeft } from "lucide-react";

import { useLinks } from "@/utils/hooks";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const LinksDropDown = () => {
  const links = useLinks();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map(({ href, label }) => (
          <DropdownMenuItem key={label}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                `capitalize w-full ${
                  isActive ? "text-primary underline decoration-2" : ""
                }`
              }
            >
              {label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
