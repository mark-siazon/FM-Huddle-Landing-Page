/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 // Include the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}",   // Include all JS, TS, JSX, and TSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        "heading": ["Poppins", "sans-serif"],
        "body": ["Open Sans"],
      },
    },
  },
  plugins: [],
};
