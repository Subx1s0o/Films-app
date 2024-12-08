 // tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      screens:{ md: 420,sm: 375},
      colors: {
        primary: "#161622",
        violet: "#1e1b4b", 
        cherry: "#6e0a29"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
     
    },
  },
  plugins: [],
}
