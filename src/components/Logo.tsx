import { Link } from "react-router-dom";
import { BedDouble } from "lucide-react";

import { appPaths } from "@/utils";

export const Logo = () => {
  return (
    <Link
      to={appPaths.home}
      className="hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white"
    >
      <BedDouble className="w-8 h-8" />
    </Link>
  );
};
