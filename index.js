module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules": {
    // disallow reassigning const variables
    "no-const-assign": "error",
    // disallow duplicate class members
    "no-dupe-class-members": "error"
  }
}