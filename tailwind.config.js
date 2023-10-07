/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: "'Exo 2', sans-serif;",
        josephin: "'Josefin Sans', sans-serif;",
        lora: "'Lora', serif;",
        pacifico: "'Pacifico', cursive;",
        roboto: "'Roboto Slab', serif;",
        varela: "'Varela Round', sans-serif;",
      }
    },
  },
  plugins: [require("daisyui")],
}
