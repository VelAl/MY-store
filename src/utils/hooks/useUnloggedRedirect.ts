import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { userSelector } from "@/features/user/userSlice";

import { useAppSelector } from "./reduxHooks";
import { appPaths } from "../appPaths";

export const useUnloggedRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useAppSelector(userSelector);

  useEffect(() => {
    if (!user) {
      toast.warning(
        `Please login to access "${location.pathname.slice(1)}" page`
      );
      navigate(appPaths.login);
    }
  }, [user]);
};
