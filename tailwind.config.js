/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-blue": "#1570EF",
        "custom-gray": "#D8DAE5",
        "custom-light-blue": "#B2DDFF",
        repo: "#181D27",
      },
    },
  },
  plugins: [],
};
