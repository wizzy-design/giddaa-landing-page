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
        "green-linear": "linear-gradient(0deg, #335F32, #335F32), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
        "hero-linear": "linear-gradient(90deg, rgba(255, 255, 251, 0.5) 0%, rgba(246, 253, 244, 0.5) 50%, rgba(255, 237, 203, 0.5) 100%)",
      },
      borderRadius: {
        "100": "100px"
      }
    },
  },
  plugins: [],
};
export default config;
