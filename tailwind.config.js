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
      },
      keyframes:{
        blobrotate:{
          '0%':{ transform: 'rotate(0deg)'},
          '50%':{ transform: 'scaleX(0)', transform: 'scaleY(1.25)'},
          '100%':{transform: 'rotate(360deg)'}
        }
      },
      animation:{
        blobrotate: 'blobrotate 20s infinite'
      }
    },
  },
  plugins: [],
}
