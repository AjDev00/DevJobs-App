/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        mobileHeaderBgImage: "url('/src/assets/mobile/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
};
