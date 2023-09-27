
/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

Hint: ||make an array, map through it making your changes to each letter, and join back into a string||

Answer:*/

function transformString(arr){
    return arr.split('').map((s) => s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase()).join('').split(' ').reverse().join(' ')
  }
  
  console.log(transformString('Example Input', 'iNPUT eXAMPLE'))