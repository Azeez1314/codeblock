// // Task:
// Find min and max (click to show)
// Implement a function that returns the minimal and the maximal value of a list (in this order).


// Answer:
function getMinMax(arr){
    let min = arr[0];
    let max = arr[0];
    
    arr.forEach(val => {
      if(val > max) max = val;
      if(val < min) min = val;
    });
    
    return [min, max];
  };
