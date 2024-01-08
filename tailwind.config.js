/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#e35223',
        footer:'#E0DFCB',
        social:'#FFFFFF'
        
      }
    },
  },
  plugins: [],
}

