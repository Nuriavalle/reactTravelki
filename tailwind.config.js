/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage:{
        bgRegistroHotel: "url('../src/images/foto7.jpeg')",
        bgRegistroUsuario: "url('../src/images/foto8.jpg')",
        bgInicioSesion: "url('../src/images/fotov.jpg')"
        
      }
     },
  },
  plugins: [],
}

