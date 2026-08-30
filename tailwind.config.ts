import type { Config } from "tailwindcss";

/**
 * Notebook palette. Two paper tones, three ink weights, and six pens.
 *
 * The default Tailwind palette is replaced rather than extended so no stray
 * slate-500 can wander in and break the hand-made feel.
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      paper: { DEFAULT: "hsl(var(--paper))", 2: "hsl(var(--paper-2))" },
      ink: {
        DEFAULT: "hsl(var(--ink))",
        soft: "hsl(var(--ink-soft))",
        faint: "hsl(var(--ink-faint))",
      },
      rule: "hsl(var(--rule))",
      margin: "hsl(var(--margin))",
      blue: "hsl(var(--blue))",
      red: "hsl(var(--red))",
      green: "hsl(var(--green))",
      orange: "hsl(var(--orange))",
      purple: "hsl(var(--purple))",
      highlight: "hsl(var(--highlight))",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "3px",
      sm: "2px",
      md: "4px",
      lg: "6px",
      full: "9999px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "ui-rounded", "cursive"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { page: "80rem" },
      transitionTimingFunction: {
        paper: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
