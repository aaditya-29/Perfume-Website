/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        plum: "#DDA0DD",
        cream: "rgba(255, 192, 203, 0.532)",
        palegoldenrod: "#eee8aa",
        lightBlack: "hsla(0, 0%, 0%, 0.212)",
        "black-52": "#00000084",
        peach: "hsl(22, 52%, 95%)",
        "custom-bg": "hsl(22, 52%, 95%)",
        "custom-nav-color": "#e8e4e1",
        "animation-color": "#d0a060",
        "contact-custom-color": "#e9c5a3",
        "contact-hover-color": "#d7a884",
        lightPeach: "#f3ab81",
      },
      animation: {
        slide: "slide 15s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
