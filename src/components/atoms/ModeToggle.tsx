import * as React from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";

import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  React.useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as 'theme-light' | 'dark' | 'system' | null;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setThemeState(savedTheme);
    } else {
      setThemeState(systemDark ? 'dark' : 'theme-light');
    }
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Update the class on the html element
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
    
    // Save the theme preference
    if (theme !== 'theme-light') { // Don't store default light theme to save space
      localStorage.setItem('theme', theme);
    } else {
      localStorage.removeItem('theme');
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-center hover:cursor-pointer">
      <div className="hidden md:flex">
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setThemeState((prev) =>
              prev === "theme-light" ? "dark" : "theme-light"
            )
          }
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="w-10 h-10 p-0">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeState("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setThemeState("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default ModeToggle;
