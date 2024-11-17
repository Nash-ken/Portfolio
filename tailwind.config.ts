import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      desktop: "900px",
    },

    extend: {
      width: {
        desktop: "900px",
      },
      maxWidth: {
        desktop: "900px",
      },

      colors: {
        background: "hsl(0, 0%, 9%)",
        text: "hsl(0, 0%, 52%)",
        textalt: "#9ca3af",
        accent: "hsl(0, 0%, 11%)",
        primary: "hsl(0, 0%, 17%)",
        secondary: "hsl(0, 0%, 14%)",
        border: "hsl(0, 0%, 14%)",
        borderalt: "hsl(0, 0%, 22%)",
      },
      fontFamily: {
        inter: ["Inter Variable"],
      },
    },
  },

  plugins: [],
} satisfies Config;
