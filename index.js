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
    // the use of console
    "no-console": "warn",
    // the use of alert
    "no-alert": "warn",
    // disallow the use of debugger
    "no-debugger": "error",
    // disallow duplicate arguments in function definitions
    "no-dupe-args": "error",
    // disallow duplicate keys in object literals
    "no-dupe-keys": "error",
    // disallow duplicate case labels
    "no-duplicate-case": "error",
    // disallow empty character classes in regular expressions
    "no-empty-character-class": "error",
    // disallow empty block statements
    "no-empty": "error",
    // disallow assignment operators in conditional expressions
    "no-cond-assign": "error",
    // disallow reassigning exceptions in catch clauses
    "no-ex-assign": "error",
    // disallow unnecessary boolean casts
    "no-extra-boolean-cast": "error",
    // disallow unnecessary semicolons
    "no-extra-semi": "error",
    // disallow reassigning function declarations
    "no-func-assign": "error",
    // disallow variable or function declarations in nested blocks
    "no-inner-declarations": "error",
    // disallow invalid regular expression strings in RegExp constructors
    "no-invalid-regexp": "error",
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": "error",
    // disallow calling global object properties as functions
    "no-obj-calls": "error",
    // disallow multiple spaces in regular expressions
    "no-regex-spaces": "error",
    // disallow sparse arrays
    "no-sparse-arrays": "error",
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