module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "./lib/best-practices.js",
    "./lib/errors.js",
    "./lib/es6.js",
    "./lib/style.js",
    "./lib/variables.js",    
  ],
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6
  }
}