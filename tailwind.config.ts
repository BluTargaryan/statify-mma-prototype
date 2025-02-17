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
        primary: "#023A14",
        secondary: "#E28F2A",
        accent: "#76CC91",
        text: "#121412",
        bg: "#EFEFEF",
      },
    },
  },
  plugins: [],
} satisfies Config;
