/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Syne",
      secondery: "Syne Mono", 
    },
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "0",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        dark: "#181818",
      },
      boxShadow: {
        black: "3px 3px 1px black",
        grey: "2px 4px 6px #ddd",
      },
    },
  },
  plugins: [],
};
