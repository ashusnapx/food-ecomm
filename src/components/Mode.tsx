"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function Mode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is mounted to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // If the component is not mounted yet, return null to avoid hydration error
  if (!mounted) return null;

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
