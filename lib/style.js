module.exports = {
  rules: {
    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": "error",
    // enforce consistent spacing inside single-line blocks
    "block-spacing": "error",
    // enforce consistent brace style for blocks
    "brace-style": "error",
    // enforce camelcase naming convention
    "camelcase": "error",
    // enforce or disallow capitalization of the first letter of a comment
    "capitalized-comments": "off",
    // require or disallow trailing commas
    "comma-dangle": "error",
    // enforce consistent spacing before and after commas
    "comma-spacing": "error",
    // enforce consistent comma style
    "comma-style": "error",
    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": "error",
    // enforce consistent naming when capturing the current execution context
    "consistent-this": "off",
    // require or disallow newline at the end of files
    "eol-last": "error",
    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": "error",
    // require function names to match the name of the variable or property to which they are assigned
    "func-name-matching": "error",
    // require or disallow named function expressions
    "func-names": "off",
    // enforce the consistent use of either function declarations or expressions
    "func-style": "off",
    // disallow specified identifiers
    "id-blacklist": "off",
    // enforce minimum and maximum identifier lengths
    "id-length": "off",
    // require identifiers to match a specified regular expression
    "id-match": "off",
    // enforce consistent indentation
    "indent": ["error", 2],
    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": "error",
    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing": "error",
    // enforce consistent spacing before and after keywords
    "keyword-spacing": "error",
    // enforce position of line comments
    "line-comment-position": "error",
    // enforce consistent linebreak style (linebreak-style)
    "linebreak-style": "error",
    // require empty lines around comments (lines-around-comment)
    "lines-around-comment": "off",
    // require or disallow newlines around directives (lines-around-directive)
    "lines-around-directive": "error",
    // enforce a maximum depth that blocks can be nested (max-depth)
    "max-depth": "off",
    // enforce a maximum line length (max-len)
    "max-len": "error",
    // enforce a maximum file length (max-lines)
    "max-lines": "off",
    // enforce a maximum depth that callbacks can be nested (max-nested-callbacks)
    "max-nested-callbacks": "off",
    // enforce a maximum number of parameters in function definitions (max-params)
    "max-params": "off",
    // enforce a maximum number of statements allowed in function blocks (max-statements)
    "max-statements": "off",
    // enforce a maximum number of statements allowed per line (max-statements-per-line)
    "max-statements-per-line": "off",
    // Enforce or disallow newlines between operands of ternary expressions (multiline-ternary)
    "multiline-ternary": "off",
    // require constructor names to begin with a capital letter
    "new-cap": "off",
    // require parentheses when invoking a constructor with no arguments (new-parens)
    "new-parens": "error",
    // require or disallow an empty line after variable declarations (newline-after-var)
    "newline-after-var": "off",
    // require an empty line before return statements (newline-before-return)
    "newline-before-return": "off",
    // require a newline after each call in a method chain (newline-per-chained-call)
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
    // disallow bitwise operators (no-bitwise)
    "no-bitwise": "error",
    // disallow Array constructors (no-array-constructor)
    "no-array-constructor": "error",
    // enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": ["error", {
      "anonymous": "never",  // is for anonymous function expressions(e.g. function () {}).
      "named": "never", // is for named function expressions (e.g. function foo () {}).
      "asyncArrow": "ignore" // is for async arrow function expressions (e.g. async () => {}). 
    }]
  }
}