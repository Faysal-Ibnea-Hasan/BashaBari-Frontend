/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",'node_modules/preline/dist/*.js',],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui",'preline/plugin')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

