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
        'primary-hover': '#f5b029', 
        'secondary-hover': '#231105', 
        'red-prinary-hover': '#990e0e', 
      },
      fontFamily:{
        'secondary':['"Alfa Slab One"'],
      },
      spacing: {
        17: '4.25rem',
        18: '4.50rem',
        19: '4.75rem',
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

