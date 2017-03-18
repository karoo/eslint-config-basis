 module.exports = {
  "rules": {
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
    // disallow the use of undeclared variables unless mentioned in /*global */ comments
    "no-undef": "warn",
    // disallow initializing variables to undefined
    "no-undef-init": "error",
    // disallow the use of undefined as an identifier
    "no-undefined": "error",
    // disallow the use of variables before they are defined
    "no-use-before-define": "error",
  }
}
 
 