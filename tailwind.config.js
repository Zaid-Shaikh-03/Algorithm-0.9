/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bai-jamjuree": ['"Bai Jamjuree"', "sans-serif"],
        sans: ["Merriweather Sans", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
      },
      animation: {
        slider: "slider 12s linear infinite",
      },
      keyframes: {
        slider: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-100%, 0, 0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
