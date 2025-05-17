```javascript
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
          primary: '#3b82f6',
          accent: '#7c3aed',
        },
      },
    },
    plugins: [],
  }
  ```
