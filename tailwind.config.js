// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // These paths are just examples, customize them to match your project structure
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Whitney", "Open Sans", ...defaultTheme.fontFamily.sans], // default Open Sans,
        title: ["Ginto", "Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: "#5865F2",
        gray: {
          50: "#ECEDEE",
          100: "#DCDDDE",
          200: "#B9BBBE",
          300: "#8E9297",
          400: "#72767D",
          500: "#5C6067",
          600: "#464950",
          700: "#36393F",
          800: "#2F3136",
          900: "#202225",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
