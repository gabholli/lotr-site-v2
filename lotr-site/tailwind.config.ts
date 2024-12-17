import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "trees": "url('/tree-bg.jpg')",
        "trees2": "url('/tree2.jpg')",
        "trees3": "url('/tree3.jpg')"
      },
      fontFamily: {
        garamond: ["Garamond", "serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
