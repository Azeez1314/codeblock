// let createObjs = {
//     name: 'John',
//     surname: 'Smith',
// }

// for (let createObj in createObjs) {
//     alert( createObj );
//     alert( createObjs[createObj] );
//   }

//   createObjs.name = 'Pete';

//   for (let createObj in createObjs) {
//     alert( createObj );
//     alert( createObjs[createObj] );
//   }

//   delete createObjs.name;

//   for (let createObj in createObjs) {
//     alert( createObj );
//     alert( createObjs[createObj] );
//   }

// function isEmpty(obj) {
//     let schedule = {
//         ["8:30"] : "get up",
//     };
//  if (isEmpty(schedule) == {} ){
//     alert( isEmpty(schedule) ); // true
//  } if (isEmpty(schedule) == schedule["8:30"] ){
//     alert( "get up") 
//  } else {
//     alert( isEmpty(schedule) )
//  }}


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   }
//   let sum = 0
//     for (let key in salaries) {
     
//     sum += salaries[key]
//     }

//     alert(sum)
  

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(menu){
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
          menu[key] *= 2;
        }
      }
    }

 alert(multiplyNumeric(menu))


 const user = {
    name: 'John',
    age: 30
 }

 clone = {}

 for (let key in user) {
    clone[key] = user[key]
 }

 clone.name = 'Pete'


