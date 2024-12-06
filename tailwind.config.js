 // tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        violet: "#1e1b4b"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
     
    },
  },
  plugins: [],
}
