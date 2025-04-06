export const appThemes = ["dark", "light", "system"] as const;

export type T_Theme = (typeof appThemes)[number];

export const localStorageThemeKey = "MY-store theme";

export const applyTheme = (theme: T_Theme) => {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  if (theme === "system") {
    const systemtheme = window.matchMedia("(prefers-color-scheme:dark").matches
      ? "dark"
      : "light";

    root.classList.add(systemtheme);
    return;
  }

  root.classList.add(theme);
};
