import type { Config } from "tailwindcss";

export default {
  important: true,
  content: [
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { jakarta: ['"Plus Jakarta Sans"', "sans-serif"] },
      width: { screen: "100dvw" },
      minWidth: { screen: "100dvw" },
      height: { screen: "100dvh" },
      minHeight: { screen: "100dvh" },
    },
  },
  plugins: [],
} satisfies Config;
