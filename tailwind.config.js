/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'comforter':['Comforter'],
        'outfit':['Outfit'],
        'julius':['Julius Sans One']
      },
      boxShadow: {
        myShadow1: "10px -2px 0 0 #fff",
        myShadow2: "-10px -2px 0 0 #fff",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
