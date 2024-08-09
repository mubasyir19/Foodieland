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
        "light-blue": "#E7FAFE",
        // breakfast: "#708246",
        breakfast: "rgba(112, 130, 70, 0.1)",
        vegan: "rgba(108, 198, 63, 0.1)",
        meat: "rgba(204, 38, 27, 0.1)",
        dessert: "rgba(240, 158, 0, 0.1)",
        lunch: "rgba(0, 0, 0, 0.1)",
        chocolate: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
