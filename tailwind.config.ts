import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-dark": "var(--paper-dark)",
        ink: "var(--ink)",
        crimson: "var(--crimson)",
        gold: "var(--gold)",
        blossom: "var(--blossom)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        paper: "0 22px 65px rgba(58, 52, 48, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
