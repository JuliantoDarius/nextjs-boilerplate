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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sidebar: "var(--sidebar)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        navbar: "var(--navbar)",
        "input-background": "var(--input-background)",
        "input-color-text": "var(--input-color-text)",
        "input-focus-border": "var(--input-focus-border)",
      },
    },
  },
  plugins: [],
} satisfies Config;
