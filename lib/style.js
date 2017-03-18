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
    // disallow bitwise operators (no-bitwise)
    "no-bitwise": "error",
    // disallow continue statements (no-continue)
    "no-continue": "error",
    // disallow inline comments after code (no-inline-comments)
    "no-inline-comments": "off",
    // disallow if statements as the only statement in else blocks (no-lonely-if)
    "no-lonely-if": "error",
    // Disallow mixes of different operators (no-mixed-operators)
    "no-mixed-operators": "off",
    // Disallow Use of Chained Assignment Expressions (no-multi-assign)
    "no-multi-assign": "error",
    // disallow multiple empty lines (no-multiple-empty-lines)
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    // disallow negated conditions (no-negated-condition)
    "no-negated-condition": "off",
    // disallow nested ternary expressions (no-nested-ternary)
    "no-nested-ternary": "off",
    // disallow Object constructors (no-new-object)
    "no-new-object": "error",
    // disallow the unary operators ++ and -- (no-plusplus)
    "no-plusplus": "off",
    // disallow specified syntax (no-restricted-syntax)
    "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement"],
    // disallow all tabs (no-tabs)
    "no-tabs": "off",
    // disallow ternary operators (no-ternary)
    "no-ternary": "off",
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "error",
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": "off",
    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": "error",
    // disallow whitespace before properties
    "no-whitespace-before-property": "error",
    // enforce the location of single-line statements (nonblock-statement-body-position)
    "nonblock-statement-body-position": "off",
    // enforce consistent line breaks inside braces (object-curly-newline)
    "object-curly-newline": ["error", "always"],
    // enforce consistent spacing inside braces
    "object-curly-spacing": ["error", "always"],    
    // enforce placing object properties on separate lines
    "object-property-newline": "off",
    // enforce variables to be declared either together or separately in functions
    "one-var": "off",
    // require or disallow newlines around variable declarations (one-var-declaration-per-line)
    "one-var-declaration-per-line": ["error", "always"],
    // require or disallow assignment operator shorthand where possible
    "operator-assignment": "off",
    // enforce consistent linebreak style for operators
    "operator-linebreak": "off",
    // require or disallow padding within blocks
    "padded-blocks": "off",
    // require quotes around object literal property names
    "quote-props": ["error", "as-needed", { "keywords": false }],
    // enforce the consistent use of either backticks, double, or single quotes
    "quotes":  [ 'error', 'single', { avoidEscape: true }],
    // require JSDoc comments (require-jsdoc)
    "require-jsdoc": "off",
    // require or disallow semicolons instead of ASI
    "semi": "error",
    // Enforce spacing before and after semicolons (semi-spacing)
    "semi-spacing": [ "error", { before: false, after: true }],
    // require object keys to be sorted
    "sort-keys": "off",
    // require variables within the same declaration block to be sorted
    "sort-vars": "off",
    // enforce consistent spacing before blocks
    "space-before-blocks": "error",
    // enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": ["error", {
      "anonymous": "never",  // is for anonymous function expressions(e.g. function () {}).
      "named": "never", // is for named function expressions (e.g. function foo () {}).
      "asyncArrow": "ignore" // is for async arrow function expressions (e.g. async () => {}). 
    }],
    // enforce consistent spacing inside parentheses
    "space-in-parens": "error",
    // require spacing around infix operators
    "space-infix-ops": "error",
    // enforce consistent spacing before or after unary operators
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false
    }],
    // enforce consistent spacing after the // or /* in a comment
    "spaced-comment":  [ "error", "always", {
      exceptions: [ "-", "+" ],
      markers: [ "*!" ],
    }],
    // require or disallow spacing between template tags and their literals
    "template-tag-spacing": "error",
    // require or disallow Unicode byte order mark (BOM)
    "unicode-bom": "error",
    // require parenthesis around regex literals
    "wrap-regex": "off",
   
  }
}