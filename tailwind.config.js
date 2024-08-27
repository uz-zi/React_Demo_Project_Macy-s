/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs-custom': '14px',
      },
      fontFamily: {
        'helvetica': ['Helvetica'],
      },
      colors: {
        'custom-gray': '#838383',
      },
      width: {
        'custom-width': '30rem', 
      }
    },
  },
  plugins: [],
}

