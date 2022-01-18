module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "R-purple": "#5267DF",
        "R-red": "#FA5959",
        "R-blue": "#242A45",
        "R-grey": "#9194A2",
        "R-white": "#f7f7f7",
        "R-black": "#000000",
      },
      backgroundImage: {
        main: "url('/images/main.jpg')",
      },
      spacing: {
        192: "42rem",
        160: "36rem",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-sarif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
