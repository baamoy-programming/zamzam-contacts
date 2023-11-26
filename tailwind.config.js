/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#00FFCD",
        accent: "#5F9C89",
        secondary: "#2c2c31",
      },

      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },

      gridRow: {
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
      },
    },
  },
  plugins: [],
};
