/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightCyan: "hsl(193, 38%, 86%)",
          neonGreen: "hsl(149, 84%, 54%)",
        },
        neutral: {
          grayishBlue: "hsl(217, 19%, 38%)",
          darkGrayishBlue: "hsl(217, 19%, 24%)",
          darkBlue: "hsl(218, 23%, 16%)",
        },
      },
      minHeight: {
        custom: "100px",
      },
      borderRadius: {
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
