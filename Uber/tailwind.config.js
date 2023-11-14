/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*{html, js}"],
  theme: {
    extend: {
      fontFamily:{
        "sans":['Poppins','sans']
      },
      //setting custom colors
      colors:{
        "primary":['#00471B'],
        "secondary":['#EEE1C6']
      },
      //setting Image
      backgroundImage:{
        "bgtenis":"url('/src/assets/bg.png')",
        "tenis":"url(/src/assets/tenis.png')"
      },
      //setting keyframes for animation
      keyframes:{
        levited:{
          "0%":{transform: "translatey(0px)"},
          "50%":{transform: "translatey(12px)"},
          "100%":{transform: "translatey(0px)"},
        }
      },
      animation:{
        levited:"levited 2.5s infinite"
      }
    },
  },
  plugins: [],
}

