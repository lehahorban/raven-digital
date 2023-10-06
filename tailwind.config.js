/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
    },
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      colors: {
        main: "#0C1117",
        light: "#F8F9FA",
        dark: "#11161C",
        dark_light: "#0B0F15",
        black: "#0A0F14",
        gray: "#536A82",
        gray_card: "#1B2837",
        gray_ligth: "#787878",
        blue: "#003ADB",
        blue_ligth: "#2B61F7",
        blue_white: "#8FC2FF",
      },
      boxShadow: {
        main_shadow: "0px 10px 30px 0px rgba(64, 106, 255, 0.24)",
      },
    },
  },
  plugins: [],
};
