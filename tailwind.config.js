/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1da1f2',
        'twitter-black': '#14171A',
        'twitter-dark-gray': '#657786',
        'twitter-light-gray': '#AAB8C2',
        'twitter-el-gray': '#E1E8ED',
        'twitter-eel-gray': '#F5F8FA',
        'twitter-card-hover-bg': '#e1e8ed73',
        'twitter-icon-hover-bg': '#1da0f22f',
      },
    },
  },
  plugins: [],
}
