/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'sidebar-bg': "url('/src/assets/sidebar.png')",
        'main-bg': "url('/src/assets/background.png')"
      },
      colors:{
        "dark-red": "#710303",
        "floral-white": "#fff9ec",
        "deep-blue": "#1c1f36",
        "light-gray": "#bfd1e5"
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        exo2: ['"Exo 2"', "sans-serif"],
      },
      boxShadow: {
        "red-shadow": "0 4px 50px 0 rgba(113, 3, 3, 1)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

