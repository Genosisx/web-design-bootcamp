/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F1E",
        secondary: "#828282"
      }
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
