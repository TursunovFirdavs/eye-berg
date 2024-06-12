/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-dark': '#181818',
        'secondary-dark': '#252C2C',
        'main-yellow': '#FF9549',
        'text-gray': '#939697'
      }
    },
    container: {
       center: true,
       padding: '5px',
       screens: {
         sm: '600px',
         md: '1296px'
       }
    }
  },
  plugins: [],
}