import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#eae9fc',
        'background': '#141d29',
        'primary': '#eb244b',
        'secondary': '#faebd7',
        'accent': '#8b53af',
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
