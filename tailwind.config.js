module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumar: ["Kumar One Outline", "sans-serif"],
        lexend: ['Lexend', 'sans-serif'],
        windSong: ['WindSong', 'sans-serif'],
      },
      aspectRatio: {
        '3/2': '3/2',
        '2/3': '2/3',
      },
    },
  },
  plugins: [],
};