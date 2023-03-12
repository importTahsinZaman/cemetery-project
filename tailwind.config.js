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
    },
  },
  plugins: [],
};
