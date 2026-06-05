import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        socisBlue: "#003A8C",
        socisDark: "#061A45",
        socisGreen: "#18A842",
      },
      boxShadow: {
        soft: "0 14px 40px rgba(2, 20, 68, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
