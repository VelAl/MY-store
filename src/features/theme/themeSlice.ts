import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  applyTheme,
  getLocalStorageItem,
  localStorageThemeKey,
  setLocalStorageItem,
  T_Theme,
} from "@/utils";

type T_InitialState = { name: T_Theme };

const savedTheme: T_Theme =
  getLocalStorageItem<T_Theme>(localStorageThemeKey) || "system";

applyTheme(savedTheme); // applies saved theme when the app is set

const initialState: T_InitialState = { name: savedTheme };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, { payload }: PayloadAction<T_Theme>) {
      state.name = payload;
      applyTheme(payload);
      setLocalStorageItem(localStorageThemeKey, payload);
    },
  },
  selectors: {
    appThemeSelector: ({ name }) => name,
  },
});

export const { setTheme } = themeSlice.actions;
export const { appThemeSelector } = themeSlice.selectors;
export default themeSlice.reducer;
