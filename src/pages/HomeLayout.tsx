import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <div>
      <header>Home Page</header>
      <nav>navbar</nav>

      <Outlet />
    </div>
  );
};
