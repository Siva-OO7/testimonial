/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif']
      },
      colors: {
        moderateviolet: "hsl(263, 55%, 52%)",
        verydarkgrayishblue: "hsl(217, 19%, 35%)",
        verydarkblackishblue: "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",
        lightgray: "hsl(0, 0%, 81%)",
        lightgrayishblue: "hsl(210, 46%, 95%)"
      }
    },
  },
  plugins: [],
}

