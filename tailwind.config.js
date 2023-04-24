/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,jsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#191919",
        secondary: "#E6D9C9",
        tertiary: "#927963",
        background: "#F6F3EC",
        grey: "#E0DDD7",
      },
      fontFamily: {
        title: "Abril Fatface",
        text: "Lato",
      },
      screens: {
        xs: "425px",
        ss: "620px",
        sm: "825px",
        md: "1024px",
        lg: "1250px",
        xl: "1700px",
      },
      keyframes: {
        sidebar: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%%": { transform: "translateY(0px)", opacity: "1" },
        },
        slideShow: {
          "0%": { transform: "translateX(200px)", opacity: "0" },
          "15%": { transform: "translateX(0px)", opacity: "1" },
          "85%": { transform: "translateX(0px)", opacity: "1" },
          "100%": { transform: "translateX(-200px)", opacity: "0" },
        },
      },
      animation: {
        sidebar: "sidebar 1000ms ease-in-out ",
        slideShow: "slideShow 8000ms ease-in-out",
      },
    },
  },
  plugins: [],
};
