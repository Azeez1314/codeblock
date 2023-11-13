/** Task:
Given a string of words or phrases, count the number of vowels.

Answer:
*/
const vowels = string => {
    let count = 0
  
    let choices = "aeiou";
    for(let character of string.toLowerCase())
      if(choices.includes(character)) count++
    return count;
  }
  
  
  
  
  console.log(vowels("hello world"), 3);