/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Bricolage Grotesque", sans-serif',
        ],
        'roboto': [
          '"Roboto", sans-serif'
        ]
      }

    },
  },
  plugins: [],
}

