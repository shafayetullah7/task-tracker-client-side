/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDeep: "#FF9843",
        primaryLight: "#F78CA2",
        secondaryDeep: "#3468C0",
        secondaryBlue: "#86A7FC",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg, #FF9843, #FF6868)",
      },
    },
  },
  plugins: [],
};
