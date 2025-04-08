import { Outlet, useNavigation } from "react-router-dom";

import { Header, Loading, Navbar } from "@/components";
import { Toaster } from "@/components/ui/sonner";

export const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      <Navbar />

      <div className="align-element py-20">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </div>

      <Toaster />
    </div>
  );
};
