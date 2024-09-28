"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function Mode() {
  const { theme, setTheme } = useTheme();

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant='default'
      size='icon'
      className='rounded-full'
      onClick={toggleTheme}
    >
      {/* Toggle between Sun and Moon icons based on the current theme */}
      {theme === "dark" ? (
        <Moon className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <Sun className='h-[1.2rem] w-[1.2rem]' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
