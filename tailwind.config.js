/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
