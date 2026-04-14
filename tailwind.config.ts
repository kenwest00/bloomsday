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
        'absolute-black': '#000000',
        'off-black': '#1A1A1A',
        'stark-white': '#FFFFFF',
        'signal-orange': '#FF3B00',
      },
      fontFamily: {
        sans: ['var(--font-outfit)'],
        serif: ['var(--font-cormorant)'],
        mono: ['var(--font-space-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
