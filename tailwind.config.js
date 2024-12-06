 // tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Загальний шрифт
      },
      // Додаємо кастомні класи для шрифтів
      fontWeight: {
        pRegular: '400',   // для Poppins 400Regular
        pBold: '700',      // для Poppins 700Bold
        pMedium: '500',    // для Poppins 500Medium
        pSemi: '600',      // для Poppins 600SemiBold
      },
    },
  },
  plugins: [],
}
