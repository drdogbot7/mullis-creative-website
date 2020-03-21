module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      display: ['hippo', 'sans-serif'],
    },
    colors: {
      'transparent': 'transparent',
      'white': 'white',
      'black': 'black',
      gray: {
        100: "#EEEEEF",
        200: "#D4D5D6",
        300: "#BBBBBD",
        400: "#87898C",
        500: "#54565B",
        600: "#4C4D52",
        700: "#323437",
        800: "#262729",
        900: "#191A1B"
      },
      'blue': '#0000ff',
      'indigo': '#4000ff',
      'purple': '#7f00ff',
      'pink': '#ff00ff',
      'red': '#ff0000',
      'orange': '#ff8000',
      'yellow': '#ffff00',
      'green': '#00ff00',
      'teal': '#00ffc8',
      'cyan': '#00ffff',
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9]
    }
  },
  variants: {},
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
}