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
    // enforce getter and setter pairs in objects
    "accessor-pairs": "error",
    // enforce return statements in callbacks of array methods
    "array-callback-return": "error",
    // enforce the use of variables within the scope they are defined
    "block-scoped-var": "error",
    // enforce that class methods utilize this
    "class-methods-use-this": "error",
    // enforce a maximum cyclomatic complexity allowed in a program
    // "complexity": "error",
    // require return statements to either always or never specify values
    // "consistent-return": "error",
    // enforce consistent brace style for all control statements
    "curly": "error",
    // require default cases in switch statements
    "default-case": "error",
    // enforce consistent newlines before and after dots
    "dot-location": "error",
    // enforce dot notation whenever possible
    "dot-notation": "error",
    // require the use of === and !==
    "eqeqeq": "error",
    // disallow the use of alert, confirm, and prompt
    "no-alert": "error",
    // disallow the use of arguments.caller or arguments.callee
    "no-caller": "error",
    // disallow division operators explicitly at the beginning of regular expressions
    "no-div-regex": "error",
    // disallow empty functions
    "no-empty-function": "error",
    // disallow null comparisons without type-checking operators
    "no-eq-null": "error",
    // disallow the use of eval()
    "no-eval": "error",
    // disallow extending native types
    "no-extend-native": "error",
    // disallow unnecessary calls to .bind()
    "no-extra-bind": "error",
    // disallow unnecessary labels
    "no-extra-label": "error",
    // disallow leading or trailing decimal points in numeric literals
    "no-floating-decimal": error,
    // disallow assignments to native objects or read-only global variables
    "no-global-assign": "error",
    // disallow shorthand type conversions
    "no-implicit-coercion": "error",
    // disallow variable and function declarations in the global scope
    // "no-implicit-globals": "error",
    // disallow the use of eval()-like methods
    "no-implied-eval": "error",
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": "error",
    // disallow the use of the __iterator__ property
    // "no-iterator": "error",
    // disallow labeled statements
    "no-labels": "error",
    // disallow unnecessary nested blocks
    "no-lone-blocks": "error",
    // disallow function declarations and expressions inside loop statements
    "no-loop-func": "error",
    // disallow magic numbers
    "no-magic-numbers": ["error", { 
      "ignore": [1]
    }],
    // disallow multiple spaces
    "no-multi-spaces": "error",
    // disallow multiline strings
    "no-multi-str": "error",
    // disallow new operators with the Function object
    "no-new-func": "error",
    // disallow new operators with the String, Number, and Boolean objects
    "no-new-wrappers": "error",
    // disallow new operators outside of assignments or comparisons
    "no-new": "error",
    // disallow octal escape sequences in string literals
    "no-octal-escape": "error",
    // disallow reassigning function parameters
    "no-param-reassign": "error",
    // disallow the use of the __proto__ property
    "no-proto": "error",
    // disallow certain properties on certain objects
    // "no-restricted-properties": [2, {
    //     "object": "require"
    // }]
    // disallow assignment operators in return statements
    "no-return-assign": "error",
    // disallow unnecessary return await
    // "no-return-await": "error",
    // disallow javascript: urls
    "no-script-url": "error",
    "space-before-function-paren": ["error", {
      "anonymous": "never",  // is for anonymous function expressions(e.g. function () {}).
      "named": "never", // is for named function expressions (e.g. function foo () {}).
      "asyncArrow": "ignore" // is for async arrow function expressions (e.g. async () => {}). 
    }]
  }
}