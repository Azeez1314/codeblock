// Task:
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock



// function sayHello(name) {

// }

function sayHello(name) {
    let result = 'Hello, '
    
    for(let i = 0; i < name.length; i++){
    result += name[i]
    }
    
    return result;
    }
    
    
    console.log(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
    console.log(sayHello('Captain Kirk'), 'Hello, Captain Kirk')