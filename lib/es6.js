module.exports = {
  "rules": {
    // require braces around arrow function bodies
    "arrow-body-style": "error",
    // require parentheses around arrow function arguments
    "arrow-parens": [ "error", "as-needed" ],
    // enforce consistent spacing before and after the arrow in arrow functions
    "arrow-spacing": "error",
    // enforce consistent spacing around * operators in generator functions
    "generator-star-spacing": ["error", {"before": false, "after": true}],
    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": "error",
    // disallow duplicate module imports
    "no-duplicate-imports": "error",
    // disallow specified modules when loaded by import
    "no-restricted-imports:": "off",
    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": "error",
  }
}