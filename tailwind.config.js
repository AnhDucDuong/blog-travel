module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'postDetail': "url('https://source.unsplash.com/collection/1118905/')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
