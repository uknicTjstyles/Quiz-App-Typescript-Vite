/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
  			fine: '0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.05)',
  			elevated: '0 10px 30px rgba(0, 0, 0, 0.15), 0 15px 50px rgba(0, 0, 0, 0.1)',
  			subtle: '0 2px 6px rgba(0, 0, 0, 0.15)',
  			hover: '0 8px 16px rgba(0, 0, 0, 0.2)'
  		},
    },
  },
  plugins: [],
}