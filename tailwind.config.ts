import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple_primary: "var(--purple_primary)",
        blue_primary: "var(--blue_primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
