const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    color: {},
    fontFamily:{
      'body': ['"Righteous"', 'cursive'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
