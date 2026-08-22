import type { Config } from "tailwindcss";

/**
 * Swiss editorial system.
 *
 * Deliberately small: two inks, one accent, one rule colour. If a component
 * needs a colour that is not in here, the component is wrong.
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    // Not extending — replacing. The default Tailwind palette is the single
    // biggest source of off-system colour drift.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bg: "hsl(var(--bg))",
      raised: "hsl(var(--bg-raised))",
      ink: "hsl(var(--fg))",
      dim: "hsl(var(--fg-dim))",
      faint: "hsl(var(--fg-faint))",
      rule: "hsl(var(--rule))",
      "rule-strong": "hsl(var(--rule-strong))",
      accent: "hsl(var(--accent))",
      "accent-ink": "hsl(var(--accent-ink))",
      blue: "hsl(var(--blue))",
      "blue-ink": "hsl(var(--blue-ink))",
      orange: "hsl(var(--orange))",
      "orange-ink": "hsl(var(--orange-ink))",
      pink: "hsl(var(--pink))",
      "pink-ink": "hsl(var(--pink-ink))",
      danger: "hsl(var(--danger))",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0",
      full: "9999px",
    },
    boxShadow: {
      none: "none",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        page: "104rem",
      },
    },
  },
  plugins: [],
};

export default config;
