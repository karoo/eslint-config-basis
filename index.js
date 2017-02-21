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
    // disallow await inside of loops
    "no-await-in-loop": "error",
    // disallow unnecessary parentheses
    "no-extra-parens": "error",
    // disallow calling some Object.prototype methods directly on objects
    "no-prototype-builtins": "error",
    // disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": "error",
    // disallow negating the left operand of relational operators
    "no-unsafe-negation": "error",
    // enforce valid JSDoc comments
    "valid-jsdoc": "error",
    "space-before-function-paren": ["error", {
        "anonymous": "never",  // is for anonymous function expressions(e.g. function () {}).
        "named": "never", // is for named function expressions (e.g. function foo () {}).
        "asyncArrow": "ignore" // is for async arrow function expressions (e.g. async () => {}). 
    }]
  }
}