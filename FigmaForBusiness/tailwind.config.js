/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Clash': ['Clash Display'],
        'Satoshi': ['Satoshi']
      },
      colors:{
        'Primary':['#380099'],
        'Amber':['#FFBB00'],
        'Folly':['#FF0055'],
        'third':['#200059']
      }
    },
  },
  plugins: [],
}

