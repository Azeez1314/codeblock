// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

function century(year) {
    let result = 0;
    for (let i = 0; i < year; i++) {
      if (i % 100 === 0) {
        result++;
      }
    }
    return result;
  }

  //Another way
  function century(year) {
    return Math.ceil(year / 100);
  }
  





