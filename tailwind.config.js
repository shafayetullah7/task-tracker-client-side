/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#FF9843",
        secondaryOrange: "#FFDD95",
        primaryBlue: "#3468C0",
        secondaryBlue: "#86A7FC",
      },
    },
  },
  plugins: [],
};
