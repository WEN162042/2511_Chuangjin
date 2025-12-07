/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        entinos: ['"Tinos"', "serif"],
        zhccs: ['"Cactus Classical Serif"', "serif"]
      }
    }
  },
  plugins: []
};
