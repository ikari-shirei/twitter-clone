/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1d9bf0',
        'twitter-black': '#14171A',
        'twitter-dark-gray': '#657786',
        'twitter-light-gray': '#AAB8C2',
        'twitter-el-gray': '#E1E8ED',
        'twitter-eel-gray': '#F5F8FA',
        'twitter-card-hover-bg': '#e1e8ed73',
        'twitter-icon-hover-bg': '#1da0f22f',
        'twitter-red': '#f91880',
        'twitter-green': '#00ba7c',
      },
    },
  },
  plugins: [],
}
