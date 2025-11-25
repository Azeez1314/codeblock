Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


// PREP acronym for solving coding problems (Parameters, Return, Example, Pseudocode),

// P
We need to write a function that takes two parameters,
and return one parameter twice of the,
and also greater than one.

// R
The function should return one parameter twice of the,
also greater than one.

// E
two parameters will be included,
a var called year will be declared,
year is assigned twice a parameter plus the second parameter

// P
return a var equals
twice dad plus son

function twiceAsOld(dadAge, sonAge) {
    return Math.abs(dadAge - 2 * sonAge)
}






















