const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
    },
    backgroundImage:{
      'input-bg-mobile':'url(src/assets/images/bg-shorten-mobile.svg)',
      'input-bg-desktop':'url(src/assets/images/bg-shorten-desktop.svg)',

      'bg-advertise' : 'url(src/assets/images/bg-boost-mobile.svg)'
    },
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      darkViolet: "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      grayishViolet: "hsl(257, 7%, 63%)",
      veryDarkBlue: "hsl(255, 11%, 22%)",
      veryDarkViolet: "hsl(260, 8%, 14%)",
      white: colors.white
    },
  },
  
  plugins: [],
};
