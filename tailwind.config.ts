import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        "bg-green": "#3D5654",
        "bg-lightGreen": "#E1ECEB",
        "bg-goldenBrown": "#C99C33",
      }, 
      borderColor:{
        "gradient-radial": "linear-gradient(to left bottom, #d6a217, #ffa37a, #ffbbca, #ffe0f9, #ffffff)",
      },
      colors:{
        "goldenBrown": "#C99C33",
        "colorGreen": "#3D5654"
      }
    },
  },
  plugins: [],
};
export default config;
