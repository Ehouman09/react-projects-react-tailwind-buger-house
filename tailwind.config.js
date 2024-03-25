/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffc045',
        'secondary': '#3d2514',
        'red-primary': '#bf2222',
      },
      fontFamily:{
        'secondary':['"Alfa Slab One"'],
      }
    },
    
  },
  plugins: [],
}

