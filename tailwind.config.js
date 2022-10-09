/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
 
    extend: {
      fontFamily:{
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      colors:{
        primary:" hsl(26, 100%, 55%)",
        secondary:" hsl(25, 100%, 94%)",
        Veryvarkblue: "hsl(220, 13%, 13%)",
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        Lightgrayishblue: "hsl(223, 64%, 98%)",
        'white':{
          '50': 'hsl(0, 0%, 100%)',
        },
        'black':{
          '50': 'hsl(0, 0%, 0%)',
        }
      },
      container:{
        center:true,
        padding:'2rem',
      },
      screens:{
        'ex-sm': '430px',
      }
    },
  },
  plugins: [],
}
