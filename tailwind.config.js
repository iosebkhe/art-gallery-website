/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      letterSpacing: {
        0.912: "0.228rem", //3.64px
      },
      height: {
        "90vh": "90vh",
      },
      maxHeight: {
        "90vh": "90vh",
      },
      margin: {
        2.75: "0.688rem", //11px
        7.5: "1.875rem", //30px
        17.25: "4.313rem", //69px
        22: "5.5rem", //88px
        26: "6.5rem", //104px
        29: "7.25rem", //116px
        30: "7.5rem", //120px
        41.25: "10.313rem", //165px
        45: "11.25rem", //180px
      },
      padding: {
        2.75: "0.688rem", //11px
        7.5: "1.875rem", //30px
        22: "5.5rem", //88px
        26: "6.5rem", //104px
        41.25: "10.313rem", //165px
      },
      colors: {
        gold: "hsla(24, 56%, 63%, 1)",
        almostBlack: "hsla(0, 0%, 8%, 1)",
        darkGray: "hsla(0, 0%, 27%, 1)",
        white: "hsla(0, 0%, 100%, 1)",
      },
      fontFamily: {
        bigShoulders: ["Big Shoulders Display", "cursive"],
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        12.5: ["3.125rem", "2.813rem"], //font-size: 50px, line height: 45px
        13.75: ["3.438rem", "3.125rem"], //55px 50px
        5.5: ["1.375rem", "2rem"], //font-size: 22px, line height: 32px
        8: "2rem", //32px
      },

      gridTemplateRows: {
        "3-min": "400px 313px 396px",
      },
    },
  },
  plugins: [],
};
