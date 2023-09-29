/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'resposive': 'repeat(auto-fit, minmax(300px, 1fr));'
      }
    },
  },
  plugins: [],
}

