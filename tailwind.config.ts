import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondary: "#777980",
      },

      // keyframes: {
      //   progress: {
      //     "0%": { strokeDasharray: "0 100" },
      //     "100%": { strokeDasharray: "100 100" },
      //   },
      // },
      // animation: {
      //   progress: "progress 1s ease-out forwards",
      // },
    },
  },
  plugins: [],
};
export default config;
