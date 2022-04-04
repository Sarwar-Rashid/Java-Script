// Relational operator -> >, >=, <, <=, ==, ===, !=
// Logical operator -> &&, ||, !

var num1 = 25;
var num2 = 30;
console.log(num1>num2); //Return false

var num1 = 25;
var num2 = 30;
console.log(num1>=num2); //Return false

var num1 = 25;
var num2 = 30;
console.log(num1<num2); //Return true

var num1 = 25;
var num2 = 30;
console.log(num1<=num2); //Return true

var num1 = 25;
var num2 = 30;
console.log(num1==num2); //Return false

var num1 = 30;
var num2 = '30';
console.log(num1==num2); //Return true

var num1 = 30;
var num2 = '30';
console.log(num1===num2); //Return false

var num1 = 25;
var num2 = 30;
console.log(num1 != num2); //Return true

var num1 = 50;
var num2 = 30;
var num3 = 20;
console.log(num1>num2 && num1>num3); //Return true

var num1 = 20;
var num2 = 30;
var num3 = 40;
console.log(num1>num2 || num1>num3); //Return false

console.log(!true); //Return false
console.log(!false); //Return true

