import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#FFD30A",
            secondary: "#1B3D6D",
            accent: "#37cdbe",
            neutral: "#3d4451",
            yellow: "#FFD30A",
            green: "#00FF00",
            red: "#FD0000",
            blue: "#1B3D6D",
            "blue-dark": "#101835",
            "blue-light": "#152E51",
            orange: "#FE6A31",
          },
        },
      ],
    },

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
      colors: {
        primary: "#FFD30A",
        secondary: "#1B3D6D",
        "yellow-construction": "#FEC917",
        "blue-dark": "#101835",
        "blue-light": "#152E51",
        red: "#FD0000",
        orange: "#FE6A31",
        green: "#00FF00",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      lift: "lift 0.5s ease-in-out",
    },
    keyframes: {
      lift: {
        "0%": { transform: "translateY(0)", opacity: "1" },
        "100%": { transform: "translateY(-10px)", opacity: "1" },
      },
    },
  },
  plugins: [
    require("tailwindcss-no-scrollbar"),
    require("daisyui"),
    require("tailwindcss-animated"),
  ],
};

export default config;
