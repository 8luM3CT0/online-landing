module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['Open Sans', 'sans-serif'],
        'hind-font': ['Hind', 'sans-serif'],
        'font-robot': ['Roboto', 'sans-serif'],
        'robot-condensed': ['Roboto Condensed', 'sans-serif'],
        'robot-slab': ['Roboto Slab', 'serif'],
        'source-serif': ['Source Serif Pro', 'serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'ibm-sans': ['IBM Plex Sans', 'sans-serif'],
        'ibm-mono': ['IBM Plex Mono', 'monospace'],
        'path-ex': ['Pathway Extreme', 'sans-serif'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
        'montserr': ['Montserrat', 'sans-serif'],
        'mont-sub': ['Montserrat Subrayada', 'sans-serif']
      },
      backgroundImage: theme => ({
        'mm-lakes':
          'url(https://www.mercurynews.com/wp-content/uploads/2018/10/MAMMOTH5.jpg)',
        'bb-mountain':
          'url(https://www.bigbearmountainresort.com/-/media/widen/big-bear-mountain-resort/scenic/winter/2021-bb-ls-parkinglots-drone-jpg.ashx?h=1350&w=2400&hash=73F0A5457CB1AAB4146758943DA36862)',
          'oriental':
          'url(https://wallpaper.dog/large/20523548.jpg)',
          'alt-oriental':
          'url(https://wallpaper.dog/large/20514532.jpg)',
          'feudal':
          'url(https://wallpaperaccess.com/full/256.jpg)'
      })
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ]
}