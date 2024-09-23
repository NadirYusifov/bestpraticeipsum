import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "#FF7143",
        terrakotta: "#9F3919",
        "white-smoke": "#F8F8F8",
        "dim-gray": "#696871",
        "precious-persimmon": "#FF7143",
        "ghost-white": "#F7F7FB",
        "deep-blue": "#5454D4"

      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        dmsans: ['var(--font-dmsans)'],
        mulish: ['var(--font-mulish)']
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
export default config;
