const postcssEasyImport = require('postcss-easy-import');
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssEasyImport(),
    tailwindcss(),
    postcssPresetEnv({
      stage: 0
    })
  ]
}