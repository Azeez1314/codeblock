
/* Task:
Given an integer, reverse the or/* Task:
Given an integer, reverse the order of the digits.


Answer:
*/
const reverseInt = integer =>
  parseInt(
    integer
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(integer)


console.log(reverseInt(13)); // 31
console.log(reverseInt(-123)); // -321
console.log(reverseInt(8900)); // 98
console.log(reverseInt(-456)); // -654
console.log(reverseInt(500)); // 5
console.log(reverseInt(0)); // 0