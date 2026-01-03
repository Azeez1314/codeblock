// Task:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


// function twoSort(s){

// }

// function that takes in an array
function twoSort(s){
    return s
    // sort alphabetically
    .sort()
    // remove first string
    .shift()
    // split string into individual strings
    .split('')
    // rejoin individual strings with '***' between them
    .join('***')
}