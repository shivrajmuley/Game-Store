/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 5s  linear infinite',
     
      },
   
      keyframes: {
        'infinite-scroll': {
          from: { width: "0px"},
          to: { width: "130px" },
       

  
        },
    
      }      
    },
  },
  plugins: [],
}

