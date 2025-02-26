import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rtBlue: "#665CEE",
        rtLime: "#C5F037",
        rtPink: "#EA96F0",
        offBlack: "#121212",
        offWhite: "#E3E3E3",
        backgroundGray: "#F8F8FF",
        outlineGray: "#B6BAED",
        textGray: "#8A8A8A",
      },
    },
  },
  plugins: [],
} satisfies Config;
