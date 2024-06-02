/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary':'#581DEA',
      'primary-dark':'#581DFF',
      'secondary':'#EB7F1C',
      'black':'black',
      'white':'white'
    },
    fontWeight: {
      'thin':'100;'
    },
    dropShadow: {
      'white': '10px 10px 20px rgba(255,255,255,0.3)',
      'black': '10px 10px 20px rgba(0,0,0,0.5)'
    }
    ,
    fontFamily: {
      sans: ["Montserrat", 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

