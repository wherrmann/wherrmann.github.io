/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site': {
          'bg': '#faf6f1',  // Light sepia background
          'text': '#2c2c2c', // Dark gray text
          'accent': '#5c5c5c', // Medium gray for accents
          'muted': '#8a8a8a', // Light gray for muted text
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
