import { Link } from "react-router-dom";
import { BedDouble } from "lucide-react";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white"
    >
      <BedDouble className="w-8 h-8" />
    </Link>
  );
};
