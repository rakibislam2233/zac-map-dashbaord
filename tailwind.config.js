/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0116C5",
        secondary: "#0116C5"
      },
      animation: {
        "spin-reverse": "spin 1s linear reverse infinite",
      },
    },
  },
  plugins: [],
}