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
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
        950: "#1e1b4b",
        DEFAULT: "#4B0082",
        light: "#6610F2",
        dark: "#3B0764",
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764",
        DEFAULT: "#800080",
        light: "#9333EA",
        dark: "#581C87",
      },
      gray: {
        DEFAULT: "#808080",
        dark: "#1F2937",
        light: "#D1D5DB",
      },
      white: {
        DEFAULT: "#FFFFFF",
        light: "rgba(255, 255, 255, 0.1)",
        dark: "rgba(255, 255, 255, 0.2)",
      },
      black: {
        DEFAULT: "#000000",
        light: "rgba(0, 0, 0, 0.4)",
        dark: "rgba(0, 0, 0, 0.6)",
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
        "custom-gradient-radial":
          "radial-gradient(107.38% 55.82% at 50% 0%, #1B3D6D 0%, #080D1B 100%)",
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
