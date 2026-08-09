import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: {
          50: '#f6f6f6',
          400: '#888888',
          800: '#454545',
          900: '#1c1c1c',
          950: '#0a0a0a',
        },
        accent: {
          cyan: '#06b6d4', // brilliant cyan
          violet: '#8b5cf6', // electric violet
          DEFAULT: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
