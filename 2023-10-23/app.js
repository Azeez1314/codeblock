/* Task:
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

Answer:
*/

const newFizzBuzz = function (num) {
    for (let i = 0; i <= num; i++) {
      if (num[i] % 2 === 0 && num[i] % 3 === 0){
        console.log("Fizz Buzz")
      } else if(i % 2 === 0){
        console.log("Fizz")
      } else if(num[i] % 3 === 0){
        console.log("Buzz")
      } else {
        console.log(i)
      }
    }
  }
  
  console.log(newFizzBuzz("30"))