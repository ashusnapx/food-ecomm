"use client";

import { useTheme } from "next-themes";

/**
 * Text toggle rather than a sun/moon icon — in a typographic system a mono
 * label is more at home than a pictogram, and it needs no icon library.
 *
 * Both labels are rendered and swapped with the `dark:` variant rather than
 * gated on a `mounted` flag. next-themes has already put the right class on
 * <html> before paint, so CSS resolves this with no hydration mismatch, no
 * effect, and no layout shift.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle colour theme"
      className="label group flex items-center gap-1.5 text-dim transition-colors hover:text-ink"
    >
      <span
        aria-hidden
        className="h-[9px] w-[9px] border border-current transition-colors group-hover:border-accent group-hover:bg-accent"
      />
      <span className="w-[2.6rem] text-left">
        <span className="dark:hidden">DARK</span>
        <span className="hidden dark:inline">LIGHT</span>
      </span>
    </button>
  );
}
