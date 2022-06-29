/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002966',
        accent: '#de2a6c',
        bgColor: '#fcfcff',
      }
    },
  },
  plugins: [],
}