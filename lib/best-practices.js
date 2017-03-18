 module.exports = {
  "rules": {
    // enforce getter and setter pairs in objects
    "accessor-pairs": "error",
    // enforce return statements in callbacks of array methods
    "array-callback-return": "error",
    // enforce the use of variables within the scope they are defined
    "block-scoped-var": "error",
    // enforce that class methods utilize this
    "class-methods-use-this": "error",
    // enforce a maximum cyclomatic complexity allowed in a program
    "complexity": "off",
    // require return statements to either always or never specify values
    "consistent-return": "off",
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
    "no-alert": "warn",
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
    "no-floating-decimal": "error",
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
    "no-restricted-properties": "off",
    // disallow assignment operators in return statements
    "no-return-assign": "error",
    // disallow unnecessary return await
    "no-return-await": "off",
    // disallow javascript: urls
    "no-script-url": "error",
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "error",
    // disallow comma operators
    "no-sequences": "error",
    // disallow throwing literals as exceptions
    "no-throw-literal": "error",
    // disallow unmodified loop conditions
    "no-unmodified-loop-condition": "error",
    // disallow unused expressions
    "no-unused-expressions": "error",
    // disallow unnecessary calls to .call() and .apply()
    "no-useless-call": "error",
    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": "error",
    // disallow unnecessary escape characters
    "no-useless-escape": "error",
    // disallow void operators
    "no-void": "error",
    // disallow specified warning terms in comments
    "no-warning-comments": "error",
    // disallow with statements
    "no-with": "error",
    // require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": "error",
    // enforce the consistent use of the radix argument when using parseInt()
    "radix": "error",
    // disallow async functions which have no await expression
    "require-await": "error",
    // require var declarations be placed at the top of their containing scope
    "vars-on-top": "error",
    // require parentheses around immediate function invocations
    "wrap-iife": "off",
    // require or disallow “Yoda” conditions
    "yoda": "error",
    // require or disallow strict mode directives
    "strict": "off",
    // require or disallow initialization in variable declarations
    "init-declarations": "error",
    // disallow deleting variables
    "no-catch-shadow": "error",
    // disallow labels that share a name with a variable
    "no-label-var": "error",
    // disallow specified global variables
    "no-restricted-globals": "off",
    // disallow identifiers from shadowing restricted names
    "no-shadow-restricted-names": "error",
    // disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow": "error",
    // disallow the use of variables before they are defined
    "no-use-before-define": "error",
  }
}
 
 