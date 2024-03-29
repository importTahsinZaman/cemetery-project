/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        newspaperbg: "url('../public/newspaperbg.png')",
      },
      colors: {
        primary_bg: "#f4f3ea",
      },
      fontFamily: {
        AncientFont: ["AncientFont", "sans-serif"],
      },
      keyframes: {
        slide_out: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slide_out: "slide_out 1.3s ease-in-out",
        slide_out_slow: "slide_out 1.31s ease-in-out",
      },
    },
  },
  important: true,
  plugins: [
    require("tailwindcss-animate"),
    // ...
  ],
};
