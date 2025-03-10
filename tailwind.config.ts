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
        'text': '#fff',
        'background': '#141d29',
        'primary': '#e93559',
        'secondary': '#6369d4',
        'accent': '#6369d4',
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [daisyui],
} satisfies Config;
