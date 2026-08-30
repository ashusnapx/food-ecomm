"use client";

import { useTheme } from "next-themes";

/**
 * Paper or blackboard. Both labels render and CSS swaps them on the `dark`
 * class, so there is no mounted flag, no hydration mismatch and no layout jump.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Switch between paper and blackboard"
      className="hand rounded-md border border-rule px-3 py-1.5 text-lg leading-none text-ink-soft transition-colors hover:border-ink hover:text-ink"
    >
      <span className="dark:hidden">blackboard?</span>
      <span className="hidden dark:inline">paper?</span>
    </button>
  );
}
