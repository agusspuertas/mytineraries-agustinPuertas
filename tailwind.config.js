/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        amatica: ["Amatic SC", "cursive"],
        inter: ["Inter", "sans-serif"]
      },

     backgroundImage: {
      'hero_image': "url('/Hero_Img/Hero.jpg')"
     }
    },
  },
  plugins: [require("daisyui")],
}