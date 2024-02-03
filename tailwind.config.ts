import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#FFD30A",
      },
      secondary: {
        DEFAULT: "#1B3D6D",
      },
      yellow: {
        DEFAULT: "#FFD30A",
        construction: "#FEC917",
      },
      blue: {
        DEFAULT: "#1B3D6D",
        dark: "#101835",
        light: "#152E51",
      },
      red: {
        DEFAULT: "#FD0000",
      },
      orange: {
        DEFAULT: "#FE6A31",
      },
      green: {
        DEFAULT: "#00FF00",
      },
    },
    fontFamily: {
      display: ["Iceland"],
      body: ["Hind"],
      sans: ["Happy_Monkey"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};

export default config;
