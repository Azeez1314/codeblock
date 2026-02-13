// Task: 
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
function roundToNext5(n){
  if(n % 5 === 0) return n;
  if((n + 1) % 5 === 0) return n + 1;
  if((n + 2) % 5 === 0) return n + 2;
  if((n + 3) % 5 === 0) return n + 3;
  if((n + 4) % 5 === 0) return n + 4;
}