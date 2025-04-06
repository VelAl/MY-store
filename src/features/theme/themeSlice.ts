import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { applyTheme, localStorageThemeKey, T_Theme } from "@/utils";

type T_InitialState = {
  name: T_Theme;
};

const initialState: T_InitialState = {
  name: (localStorage.getItem(localStorageThemeKey) as T_Theme) || "system",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, { payload }: PayloadAction<T_Theme>) {
      state.name = payload;
      applyTheme(payload);
      localStorage.setItem(localStorageThemeKey, payload);
    },
  },
  selectors: {
    appThemeSelector: ({ name }) => name,
  },
});

export const { setTheme } = themeSlice.actions;
export const { appThemeSelector } = themeSlice.selectors;
export default themeSlice.reducer;
