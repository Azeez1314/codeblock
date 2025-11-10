/* Task:

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

Answer:
*/

function findAverage(array) { 
    if(array === [] || array === null || array.length < 1){
      return 0
    } else {
      return array.reduce((a, c) => a + c, 0) / array.length
    }
    }