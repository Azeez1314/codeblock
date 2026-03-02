// Task: True camelCase Version
// CamelCase Method (click to show)
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
// All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord



// Answer:
String.prototype.camelCase = function () {
  const words = this.split(" ").filter(w => w.length > 0);
  
  if (words.length === 0) return "";
  
  // First word stays lowercase, rest capitalize
  return words[0] + words
    .slice(1)
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join("");
};

console.log("hello world".camelCase());  // "helloWorld"
console.log("get user name".camelCase()); // "getUserName"