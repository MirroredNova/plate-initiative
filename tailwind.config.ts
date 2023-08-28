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
        'primary': 'var(--primary)',
        'secondary-dark': 'var(--secondary-dark)',
        'secondary-mid': 'var(--secondary-mid)',
        'secondary-light': 'var(--secondary-light)',
        'accent-primary-hover': 'var(--accent-primary-hover)',
        'accent-secondary': 'var(--accent-secondary)',
      },
    },
  },
  plugins: [],
};
export default config;
