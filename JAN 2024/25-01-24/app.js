/*
Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
```

Hint:|| loop through the characters and use bracket notation to add one to the value for that letter in the object or add that letter as a property of the object with the value of 1||

Answer:
*/

function countChars(str){
    //create obj
    let countObj = {}
    //loop -> check val exist ? val++ : val-1
    for(const c of str){
      if( countObj[c] ){
        countObj[c]++
      }else{
        countObj[c] = 1
      }
    }
  
    return countObj
    
  }
  
  console.log(countChars('ab(1a'),"{'a': 2, 'b': 1}")
  console.log(countChars('dog'),"{'d': 1, 'o': 1, 'g': 1}")
  console.log(countChars('abba'),"{'a': 2, 'b': 2}")