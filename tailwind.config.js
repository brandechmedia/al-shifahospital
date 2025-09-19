/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        asap: ['"Asap Condensed"', 'sans-serif'],
        anton: ['"Anton"', 'sans-serif'],
      },
    },
     keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    // colors:{
    //   salman:'#e8cccc'
    // }
  },
  plugins: [],
}