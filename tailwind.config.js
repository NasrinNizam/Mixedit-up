/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'poppins':["Poppins", 'sans-serif']
    },
    extend: {
      backgroundImage:{
        'photo':"url('/Orange.png')"
      }
    },
    container:{
      center:true,
      padding:'50px'
    }
  },
  plugins: [],
}