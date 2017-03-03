module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "./lib/best-practices",
    "./lib/errors",
    "./lib/es6",
    "./lib/style",
    "./lib/variables",    
  ],
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6
  }
}