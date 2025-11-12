// function checkAge(age) {
//      return (age > 18) 
//        ? true
//     :
//       // ...
//        confirm('Did parents allow you?');
//   }


// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }

// let promptForXAndN = prompt('Show the result', '');

// let powerFunction = function pow(x,n) {
//     return Math.pow(x,n)
// }

let x = prompt("First number?", '');
let n = prompt("Second number?", '');

function powa(x, n) {
    return x**n
}

alert(powa(x, n))