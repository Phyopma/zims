import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#FFD30A",
  //         "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  //         "--rounded-btn": "1rem", // border radius rounded-btn utility class, used in buttons and similar element
  //         "--rounded-badge": "1rem", // border radius rounded-badge utility class, used in badges and similar
  //         "--animation-btn": "0.25s", // duration of animation when you click on button
  //         "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  //         "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  //         "--border-btn": "4px", // border width of buttons
  //         "--tab-border": "4px", // border width of tabs
  //         "--tab-radius": "0.5", // border radius of tabs
  //       },
  //     },
  //   ],
  // },

  theme: {
    colors: {
      yellow: {
        DEFAULT: "#FFD30A",
        construction: "#FEC917",
      },
      blue: {
        DEFAULT: "#1B3D6D",
        dark: "#101835",
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
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
