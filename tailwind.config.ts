import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        socisLogoBlue: "#448AFF",
        socisBlueLight: "#2663EB",
        socisBlueMedium: "#003A8C",
        socisBlueDark: "#061A45",
        socisGreenWhatsApp: "#18A842",
        socisGreenWhatsAppDark: "#15963c",
        socisGreen: "#144E16",
        socisGreenLogo: "#116610",
        socisGreenIcon: "#61C518",
        socisGreenLight: "#EFFAEB",
        socisGreenDark: "#0C4C11",
        isoGold: "#CC8E0F",
        isoGoldDark: "#A06102",
        isoGoldLight: "#FDF6EA",
        isoViolet: "#4F47E5",
      },
      boxShadow: {
        soft: "0 14px 40px rgba(2, 20, 68, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
