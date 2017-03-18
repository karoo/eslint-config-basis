module.exports = {
  "rules": {
    // disallow the use of console
    "no-console": "warn",
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
  }
}