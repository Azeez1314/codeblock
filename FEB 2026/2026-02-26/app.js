// Task: Better Solution!
// CamelCase Method (click to show)
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
// All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord



// Answer:
function toCamelCase(str) {
  return str.split(" ")
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join("");
}

console.log(toCamelCase("hello world"));  // "HelloWorld"