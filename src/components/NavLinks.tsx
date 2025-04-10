import { NavLink } from "react-router-dom";

import { useLinks } from "@/utils/hooks";

export const NavLinks = () => {
  const links = useLinks();

  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map(({ href, label }) => (
        <NavLink
          key={label}
          to={href}
          className={({ isActive }) =>
            `capitalize font-light tracking-wide ${
              isActive ? "text-primary underline decoration-2" : ""
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};
