/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  //if you need the USER CHANGE THEME
  // set this.. 
  darkMode:'class',

  //but if you need the theme CHANGE USING OS user THEME (light - dark) 
  //set this (darMode:'media')
  
  theme: {
    extend: {},
  },
  plugins: [],
}

