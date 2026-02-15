// Task: Remainder version: Good balance of readability and efficiency!
// Round up to the next multiple of 5 (click to show)
// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// Answer:
function roundToNext5(n) {
  const remainder = n % 5;
  return remainder === 0 ? n : n + (5 - remainder);
}