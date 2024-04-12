/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundOpacity: ['active'],
      colors: {
        "primary": "#ffcc00",
        "secondary": "#3a3a39",
        "footer": "#212121",
        "footer2": "#141414"
      },
      backgroundImage:{
        "main": "url('../assets/kolor_tlo.jpg')"
      },

    },
  },
  plugins: [],
}