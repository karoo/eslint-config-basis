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
    // Disallow unnecessary constructor (no-useless-constructor)
    "no-useless-constructor": "error",
    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": "off",
    // require let or const instead of var
    "no-var": "error",
    // require or disallow method and property shorthand syntax for object literals
    "object-shorthand": "error"
  }
}