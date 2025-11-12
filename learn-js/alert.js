// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 12

// Bee
// let nameOfJavaScript = prompt('What\'s the “official” name of JavaScript?', '');

// if (nameOfJavaScript == 'ECMAScript') {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'You don\'t know? “ECMAScript”!' ); // any value except 2015
// }

// Cee
// let showTheSign = prompt('Which one is the correct number?', '');

// if (showTheSign > 0) {
//   alert('1');
// } else if (showTheSign < 0){
//   alert('-1');
// } else if (showTheSign == 0){
//     alert('0');
//   }

// Dee
// let result = (a + b < 4) ? 'Below' : 'Over';

// Eee
// let login = prompt('login?', '');

// let message = (login == 'Employee') ?
//    'Hello' :
//  (login == 'Director') ?
//   'Greetings' :
//  (login == '') ?
//   'No login' :
//   '';

//   alert( message );

// Fee
// let age = prompt('Which one is the correct age?', '');

// if (age == 14) {
//   alert('I am 14 years');
//  } else {
//     alert('I am older than 14 but less than or equal to 90');
//   }

// Gee
// let userName = prompt('Who\'s there?', '');

// if (userName == 'Admin') {
//     let pass = prompt('Password?', '');

//     if (pass == 'The Master') {
//         alert('Welcome!')
//     } else if (pass == '' || pass == null) {
//         alert('Canceled')
//     } else {
//         alert('Wrong password')
//     }

// } else if (userName == '' || userName == null) {
//     alert('Canceled')
// } else {
//     alert('I don\'t know you')
// }

// Haysh
// let i = 0;
// while (++i < 5) alert( i );

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 2; i <= 10; i++) {

//     if (i % 2 === 0) {
//       alert( i );
//     }
  
//   }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// let numberGreaterThanHundred = prompt('Choose a number', '');

// for (let numberGreaterThanHundred = 0; numberGreaterThanHundred >= 100; numberGreaterThanHundred++) {
//     if (numberGreaterThanHundred > 100) {
//         alert('Fantastic')
// } else if (numberGreaterThanHundred == '' || numberGreaterThanHundred == null) {
//     alert('Canceled')
// } else {
//     alert('Choose another number!')
// }
// }

// Question
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.

//Answer

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     alert(i)
// }