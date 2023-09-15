import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      alice: ["var(--font-alice)"],
      sofia: ["var(--font-sofia)"],
    },
    extend: {
      colors: {
        primary_light: "var(--primary-light)",
        primary_dark: "var(--primary-dark)",
        secondary_dark: "var(--secondary-dark)",
        secondary_mid: "var(--secondary-mid)",
        secondary_light: "var(--secondary-light)",
        accent_primary: "var(--accent-primary)",
        accent_secondary: "var(--accent-secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
