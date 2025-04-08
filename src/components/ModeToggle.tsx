import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { appThemeSelector, setTheme } from "@/features/theme/themeSlice";
import { appThemes } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";

export const ModeToggle = () => {
  const dispatch = useAppDispatch();

  const currentTheme = useAppSelector(appThemeSelector);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {appThemes.map((theme) => (
          <DropdownMenuItem
            key={theme}
            className="capitalize"
            disabled={currentTheme === theme}
            onClick={() => dispatch(setTheme(theme))}
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
