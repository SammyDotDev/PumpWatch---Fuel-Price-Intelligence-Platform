/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "surface-container": "#edeeef",
        "surface": "#f8f9fa",
        "on-surface": "#191c1d",
        "on-surface-variant": "#424752",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "surface-container-high": "#e7e8e9",
        "surface-container-highest": "#e1e3e4",
        "primary": "#003f87",
        "on-primary": "#ffffff",
        "primary-container": "#0056b3",
        "secondary": "#006e25",
        "on-secondary": "#ffffff",
        "secondary-fixed": "#83fc8e",
        "tertiary": "#722b00",
        "outline": "#727784",
        "outline-variant": "#c2c6d4",
        "background": "#f8f9fa",
      },
      fontFamily: {
        headline: ["Manrope_400Regular", "Manrope_700Bold", "Manrope_800ExtraBold"],
        body: ["Inter_400Regular", "Inter_500Medium", "Inter_600SemiBold", "Inter_700Bold"],
        label: ["Inter_400Regular", "Inter_700Bold"],
      }
    },
  },
  plugins: [],
}
