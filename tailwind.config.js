/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundOpacity: ['active'],
      colors: {
        "primary": "#ffcc00",
        "secondary": "#3a3a39",
      },
      backgroundImage:{
        "main": "url('../assets/kolor_tlo.jpg')"
      },

    },
  },
  plugins: [],
}