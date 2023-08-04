/** @type {import('tailwindcss').Config} */
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      borderWidth: px0_100,
    },
    screen: {
      xs: ""
    }
  },
  plugins: [],
};
