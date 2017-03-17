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
    "object-shorthand": "error",
    // require arrow functions as callbacks
    "prefer-arrow-callback": "off",
    // require const declarations for variables that are never reassigned after declared
    "prefer-const": "error",
    // require destructuring from arrays and/or objects
    "prefer-destructuring": "off",
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "off",
    // require rest parameters instead of arguments
    "prefer-rest-params": "off",
    // require spread operators instead of .apply()
    "prefer-spread": "off",
    // require template literals instead of string concatenation
    "prefer-template": "off",
    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": "error",
    // enforce sorted import declarations within modules
    "sort-imports": "off",
    // require symbol descriptions
    "symbol-description": "off",
    // require or disallow spacing around embedded expressions of template strings
    "template-curly-spacing": "error",
    // require or disallow spacing around the * in yield* expressions
    "yield-star-spacing": "error",
  }
}