/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkCyan: "hsl(185, 75%, 39%)",
          veryDarkBlue: "hsl(229, 23%, 23%)",
          darkGrayishBlue: "hsl(227, 10%, 46%)",
        },
        neutral: {
          darkGray: "hsl(0, 0%, 59%)",
        },
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      borderWidth: {
        6: "6px",
      },
      spacing: {
        "26rem": "26rem",
      },
    },
  },
  plugins: [],
};
