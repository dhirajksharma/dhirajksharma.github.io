/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      inset: {
        '17': '68px',
        '26': '104px'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'comforter':['Comforter'],
        'outfit':['Outfit'],
      },
      boxShadow: {
        myShadow1: "10px -2px 0 0 #fff",
        myShadow2: "-10px -2px 0 0 #fff",
      },
    },
  },
  plugins: [],
}
