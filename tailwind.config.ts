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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sidebar: "var(--sidebar)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        navbar: "var(--navbar)",
        "input-background": "var(--input-background)",
        "input-color-text": "var(--input-color-text)",
        "input-focus-border": "var(--input-focus-border)",
        "primary-text-color": "var(--primary-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        primary: "var(--clr-primary)",
        "primary-30": "var(--clr-primary-30)",
        "primary-hover": "var(--clr-primary-hover)",
        danger: "var(--clr-danger)",
        "danger-hover": "var(--clr-danger-hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
