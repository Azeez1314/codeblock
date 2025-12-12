// Task:
// Practice Challenge Example Write a function that takes a number and returns whether it’s positive, negative, or zero.

function checkNumber(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  console.log(checkNumber(5));   // Positive
  console.log(checkNumber(-3));  // Negative
  console.log(checkNumber(0));   // Zero
  