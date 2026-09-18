import type { Config } from "tailwindcss";

/**
 * Rovix palette.
 *
 * Extracted from the reference build rather than invented: the accent is the
 * #0099FF the whole site is tuned around, `ink` is its near-black body colour,
 * `muted` the one grey it uses for secondary copy, and `surface`/`line` the two
 * cool greys every card and hairline is made of.
 *
 * Tailwind's default palette is replaced rather than extended so a stray
 * slate-500 can never drift in and break the very narrow range this design
 * relies on.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",

      /* Text */
      ink: "#1d1d1d",
      muted: "#4d585f",
      faint: "#bababa",

      /* Surfaces */
      surface: "#edf1f4",
      line: "#dde5ed",
      coal: "#323232",

      /* Accent */
      accent: {
        DEFAULT: "#0099ff",
        deep: "#0066f5",
        soft: "#5290f4",
        ink: "#406ae4",
      },

      /* Semantic, used only in the before/after and status marks */
      positive: "#10b981",
      negative: "#f51c23",
    },

    /* The reference rounds almost everything to 20px, with a 10px small step
       and full pills for every button and chip. */
    borderRadius: {
      none: "0",
      sm: "6px",
      DEFAULT: "10px",
      md: "10px",
      lg: "14px",
      xl: "20px",
      "2xl": "22px",
      "3xl": "30px",
      "4xl": "40px",
      full: "9999px",
    },

    extend: {
      fontFamily: {
        /* Bricolage carries every headline. Inter carries everything a human
           actually has to read. */
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },

      maxWidth: {
        page: "1200px",
        prose: "46rem",
      },

      boxShadow: {
        /* Lifted from the reference: a hairline ring plus a wide, very soft
           drop. Nothing here uses a dark or tight shadow. */
        nav: "0 0 0 1px rgba(0,0,0,.04), 0 12px 32px -8px rgba(29,29,29,.14)",
        card: "0 0 0 1px rgba(0,0,0,.04), 0 18px 40px -20px rgba(29,29,29,.22)",
        float: "0 20px 60px -24px rgba(29,29,29,.34)",
        ring: "0 0 0 4px #dde5ed",
        /* The glossy button: two inset white highlights over a coloured body. */
        gloss:
          "inset 4px 4px 8px 0 rgba(255,255,255,.3), inset -4px -4px 8px 0 rgba(255,255,255,.3), 0 8px 16px 0 rgba(0,153,255,.38)",
        glossDark:
          "inset 4px 4px 8px 0 rgba(255,255,255,.14), inset -4px -4px 8px 0 rgba(255,255,255,.14), 0 8px 16px 0 rgba(0,0,0,.28)",
      },

      transitionTimingFunction: {
        /* Framer's default easing for entrance and layout transitions. */
        rovix: "cubic-bezier(.44,0,.56,1)",
        out: "cubic-bezier(.16,1,.3,1)",
      },

      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(2.5%,-1.5%,0)" },
        },
      },

      animation: {
        marquee: "marquee var(--marquee-duration,40s) linear infinite",
        drift: "drift var(--drift-duration,44s) ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
