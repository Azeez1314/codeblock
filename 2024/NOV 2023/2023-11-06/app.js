/*
Task:
Given a string of characters as input, write a function that returns it with the characters reversed.

Answer:
*/

const reverse = string =>
  string
    .split("")
    .reverse()
    .join("");

const _reverse = string => {
  let result = "";
  for (let character of string) result = character + result;
  return result;
};

const __reverse = string =>
  string.split("").reduce((result, character) => character + result);

// mocha.setup("bdd");
// const { assert } = chai;

// describe("String Reversal", () => {
//   it("Should reverse string", () => {
//     assert.equal(
console.log(reverse("Hello World!"), "!dlroW olleH");
    // assert.equal(
console.log(_reverse("Hello World!"), "!dlroW olleH");
    // assert.equal(
      
console.log(__reverse("Hello World!"), "!dlroW olleH");

//   });
// });

// mocha.run();