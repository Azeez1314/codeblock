/* Task:

```
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0, is
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
```

Hint: ||loop through array of vowels and check for the indexOf in the original string. If -1 you found the missing one!  ||


Answer:
*/


function absentVowel(x){
    // store the vowels in a variable
      var vowels = 'aeiou';
    // loop through the vowels 
    // make them lowercase (as there may be uppercase in the string)
    // find the index of the vowels and subtract 1. 
    // this will find the zero indexed number.
    // return that number.
      
      for (var i in vowels) {
        if (x.indexOf(vowels[i]) == -1) {
          return Number(i);
        }
      }
    }
    
    console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
    
    console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);