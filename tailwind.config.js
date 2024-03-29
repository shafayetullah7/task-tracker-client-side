/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDeep: "#FF9843",
        primaryLight: "#F78CA2",
        secondaryDeep: "#04f9f9",
        secondaryLight: "#c2f5f5",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg, #FF9843, #FF6868)",
        "hero-banner": "url('/src/assets/image/banner1.jpg')",
        "parallax-bg1": "url('/src/assets/image/parallax-bg1.png')",
        "auth-bg": "url('/src/assets/image/auth-bg.png')",
      },
    },
  },
  plugins: [],
};
