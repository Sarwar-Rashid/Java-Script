//how to add or concatenate strings in JavaScript
var firstName = " Sarwar", lastName = " Rashid";
document.write("My name is" + firstName + lastName);

var num1 = 29, num2 = 25;
console.log("Number1 = " + num1 + " and Number2 = " + num2);

//JavaScript template literals
//Template literals is an ES6 feature (JavaScript 2015)
//ES6 -> JavaScript Version: ECMAScript 6
//Back-Tics Syntax: Template literals use back-ticks(``) rather than the quotes("") to define a string

var firstName = " Sarwar", lastName = " Rashid";
alert(`My name is ${firstName} ${lastName}`);//Template literals allow variables in strings

console.log(`My first name is Sarwar 
My last name is Rashid`);//Template literals allows multiline strings

let fullName = "Sarwar Rashid";
let age = 22;
let dob = "21 November, 1998";
console.log(`My name is ${fullName}
My age is ${age}
My Date of Birth ${dob}`);

let a = 120;
let b = 80;
console.log(`The result is: (${a} + ${b}) = ${a + b}`);//Template literals allow expressions in strings

