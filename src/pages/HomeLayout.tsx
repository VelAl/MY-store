import { Outlet } from "react-router-dom";

import { Header, Navbar } from "@/components";

export const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="align-element py-20">
        <Outlet />
      </div>
    </div>
  );
};
