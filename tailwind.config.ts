import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * This configuration includes custom theme extensions, responsive breakpoints, and a color palette.
 * Make sure to adjust it according to your design system and project needs.
 */
export default {
  content: [
    // Paths to all files that may use Tailwind classes
    "./src/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    // Define custom screen breakpoints
    screens: {
      desktop: "900px", // Custom desktop breakpoint
    },

    extend: {
      // Custom width for 'desktop' screens, useful for containers or components
      width: {
        desktop: "900px",
      },

      // Custom max-width for 'desktop' screens, aligning with your responsive design
      maxWidth: {
        desktop: "900px",
      },

      // Custom color palette to align with the brand's design system
      colors: {
        background: "hsl(0, 0%, 9%)", // Dark background color
        text: "hsl(0, 0%, 52%)", // Light grey text color
        textalt: "#9ca3af", // Alternative text color for secondary text
        accent: "hsl(0, 0%, 11%)", // Accent color (dark)
        primary: "hsl(0, 0%, 17%)", // Primary dark color
        secondary: "hsl(0, 0%, 14%)", // Secondary dark color for UI components
        border: "hsl(0, 0%, 14%)", // Border color (dark)
        borderalt: "hsl(0, 0%, 22%)", // Lighter alternative border color
      },

      // Font family settings for consistency across the project
      fontFamily: {
        Jakarta: ["Plus Jakarta Sans Variable", "sans-serif"], // Custom Inter font
      },
    },
  },

  // Enable important classes to help avoid conflicts with third-party styles
  important: true,
} satisfies Config;
