import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

import {
  demoUserName,
  getLocalStorageItem,
  localStorageUserKey,
  setLocalStorageItem,
  T_User,
  T_UserState,
} from "@/utils";

const initialState: T_UserState = {
  user: getLocalStorageItem<T_User>(localStorageUserKey) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, { payload }: PayloadAction<T_User>) => {
      state.user = payload;
      setLocalStorageItem(localStorageUserKey, payload);

      const isDemo = payload.username === demoUserName;
      toast.success(isDemo ? "Welcome Guest User!" : "Login successfull!");
    },

    logout: (state) => {
      state.user = null;
      localStorage.removeItem(localStorageUserKey);
    },
  },

  selectors: {
    userSelector: ({ user }) => user,
  },
});

export const { logout, saveUser } = userSlice.actions;
export const { userSelector } = userSlice.selectors;
export default userSlice.reducer;
