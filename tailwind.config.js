const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
    },
    //in next js move bg to public
    backgroundImage: {
      "input-bg-mobile": "url(/bg-shorten-mobile.svg)",
      "input-bg-desktop": "url(/bg-shorten-desktop.svg)",
      "advertise-mobile": "url(/bg-boost-mobile.svg)",
      "advertise-desktop": "url(/bg-boost-desktop.svg)",
    },
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      lightCyan: "#94E7E7",
      bgGray: "hsl(230deg 25% 95.29%)",
      darkViolet: "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      grayishViolet: "hsl(257, 7%, 63%)",
      veryDarkBlue: "hsl(255, 11%, 22%)",
      veryDarkViolet: "hsl(260, 8%, 14%)",
      white: colors.white,
      grayCollection: colors.gray,
      black: colors.black,
    },
  },

  plugins: [],
};
