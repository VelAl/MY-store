import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { logout, userSelector } from "@/features/user/userSlice";
import { appPaths } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";

import { Button } from "./ui/button";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(userSelector);
  const handleLogout = () => {
    dispatch(logout()); // clears cart, if any, via extra reducers
    navigate('/');
    toast.info('Logged Out')
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}!</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <Button asChild variant="link" size="sm">
              <Link to={appPaths.login}>Sign in / Guest</Link>
            </Button>

            <Button asChild variant="link" size="sm">
              <Link to={appPaths.register}>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
