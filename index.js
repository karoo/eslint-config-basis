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
    // require let or const instead of var
    "no-var": "error",
    // require or disallow method and property shorthand syntax for object literals
    "object-shorthand": "error",
    // require super() calls in Constructors of derived classes
    "constructor-super": "error",
    // disallow reassigning const variables
    "no-const-assign": "error",
    // disallow duplicate class members
    "no-dupe-class-members": "error",
    // disallow this/super before calling super() in constructors
    "no-this-before-super": "error",
    // require generator functions to contain yield
    "require-yield": "error",
    "space-before-function-paren": ["error", {
        "anonymous": "never",  // is for anonymous function expressions(e.g. function () {}).
        "named": "never", // is for named function expressions (e.g. function foo () {}).
        "asyncArrow": "ignore" // is for async arrow function expressions (e.g. async () => {}). 
    }]
  }
}