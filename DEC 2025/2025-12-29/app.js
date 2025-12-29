// Task:

// Make a function that returns the value multiplied by 50 and increased by 6. If the 
// value entered is a string it should return "Error".

// function problem(x){
//   //your code here
// }

function problem(x){
    //your code here
     if (typeof(x) === 'number') {
      return x * 50 + 6;
    } else {
      return 'Error';
    }
  }