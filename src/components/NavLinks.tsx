import { NavLink } from "react-router-dom";

import { links } from "@/utils";

export const NavLinks = () => {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map(({ href, label }) => (
        <NavLink
          key={label}
          to={href}
          className={({ isActive }) =>
            `capitalize font-light tracking-wide ${
              isActive ? "text-primary" : ""
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};
