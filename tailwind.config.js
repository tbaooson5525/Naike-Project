/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue','Helvetica', 'Arial', 'sans-serif'],
      'nike': ['Futura Std Extra Bold','sans-serif']
    }  
  },
  plugins: [plugin(function ({ addUtilities }) {
    addUtilities({
      ".scrollbar-hide": {
        /* IE and Edge */
        "-ms-overflow-style": "none",

        /* Firefox */
        "scrollbar-width": "none",

        /* Safari and Chrome */
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
    });
  }),],
}

