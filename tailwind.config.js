import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#f7f8fc",
            primary: {
              DEFAULT: "#05224C",
              foreground: "#ECEEFB",
            },
            secondary: {
              DEFAULT: "#D8425F",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
};

module.exports = config;
