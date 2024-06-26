/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "sans-serif"],
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.65, 0.05, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
