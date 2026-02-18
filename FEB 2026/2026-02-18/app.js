// Task: 
// Numericals of a String (click to show)
// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it 
// with the amount of times you've already seen it...

// But will your code be performant enough?

// Examples:

// input = "Hello, World!";
// result = "1112111121311";

// input = "aaaaaaaaaaaa";
// result = "123456789101112";



// Answer:
function numericals(s) {
  let res = "",
    chars = {};
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (chars.hasOwnProperty(cur)) {
      chars[cur] += 1;
    } else {
      chars[cur] = 1;
    }
    res += chars[cur];
  }
  return res;
}