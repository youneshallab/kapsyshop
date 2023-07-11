/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        2: '2',
        3: '3'
      },
      animation: {
        fade: 'fadeOut 1s ease-in-out',
        slideup: 'slideUp 500ms ease-out',
        slidedown: 'slideDown 500ms ease-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': {backgroundColor: theme('colors.transparent')},
          '100%': {bottom: '0px'},
        },
        slideUp:{
          '0%': { 
            bottom: '-15px'
          },
          '10%': {
            bottom: '0px'
          },
        },
        slideDown:{
          '0%': { 
            top: '-10px'
          },
          '10%': {
            top: '0px'
          },
        }
      }),
    },
  },
  plugins: [],
}
