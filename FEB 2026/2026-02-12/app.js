// Task: EFFICIENT SOLUTION!
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] --> 42 (i.e. sum of 23 and 19)
// [99, 2, 2, 23, 19]  --> 122 (i.e. sum of 99 and 23)
// Input sequence contains minimum two elements and every element is an integer.


// Answer:
function largestPairSum(numbers) {
  // Sort the array in descending order
  const sorted = numbers.sort((a, b) => b - a);
  
  // The two largest numbers are at the start
  return sorted[0] + sorted[1];
}

console.log(largestPairSum([10, 14, 2, 23, 19]));  // 42
