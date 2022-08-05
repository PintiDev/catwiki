/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBlack: "#050709",
        themeIdk:'#e3e1dc',
        linkColor:'#73675c'
      },
    },
  },
  plugins: [],
};
