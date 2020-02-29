const postcssImport = require('postcss-easy-import');
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss(),
    postcssPresetEnv({
      stage: 0
    })
  ]
}