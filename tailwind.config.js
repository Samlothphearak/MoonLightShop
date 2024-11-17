/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{html,js}",   // Specify paths to all your HTML and JS files
    "./public/js/**/*.js",       // Include your JS files
  ],
  theme: {
    extend: {
      colors: {
        sunflower: '#FFDD00',   // Custom color example
        oceanBlue: '#1D4ED8',    // Another custom color
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],   // Custom font stack
      },
      screens: {
        'xs': '480px',    // Add a custom breakpoint
      },
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins you want to use
  ],
}
