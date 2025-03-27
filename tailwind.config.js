import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733", // Example custom color
      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [],
};

export default config;
