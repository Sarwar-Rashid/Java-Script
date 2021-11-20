//JavaScript Operators

//JavaScript Arithmetic Operators -> +(Addition), -(Subtraction), *(Multiplication), /(Division), %(Modulus (Remainder)), **(Exponentiation (ES2016)), ++(Increment), --(Decrement)

var add = 5 + 5;
document.write(add);

var sub = 10 - 5;
document.write(sub);

var mul = 5 * 5;
document.write(mul);

var div = 5 / 3;
document.write(div);

var mod = 5 % 3;
document.write(mod);

var exp = 2 ** 3;//The exponentiation operator (**) raises the first operand to the power of the second operand
document.write(exp);

var inc = 9;
document.write(++inc);//Pre increment
document.write(inc++);//Post increment
document.write(inc);

var dec = 6;
document.write(--dec);//Pre decrement
document.write(dec--);//Post decrement
document.write(dec);

//JavaScript Comparison Operators -> ==(equal to), ===(equal value and equal type), !=(not equal), !==(not equal value or not equal type), >(greater than), <(less than), >=(greater than or equal to), <=(less than or equal to)

var com1 = (4 == 4);
var com2 = (4 == 5);
var com3 = (4 == "4");
var com4 = (4 === "4");

var com5 = (4 != 6);
var com6 = (6 != 6);
var com7 = (6 !== 6);
var com8 = (6 !== "6");

var com9 = (6 > 3);
var com10 = (3 > 6);

var com11 = (3 < 5);
var com12 = (5 < 3);

var com13 = (4 >= 8);
var com14 = (4 >= 4);
var com15 = (5 >= 1);

var com16 = (7 <= 7);
var com17 = (2 <= -3);
var com18 = (5 <= 10);

console.log(com1);//Returns true
console.log(com2);//Returns false
console.log(com3);//Returns true
console.log(com4);//Returns false

console.log(com5);//Returns true
console.log(com6);//Returns false
console.log(com7);//Returns false
console.log(com8);//Returns true

console.log(com9);//Returns true
console.log(com10);//Returns false

console.log(com11);//Returns true
console.log(com12);//Returns false

console.log(com13);//Returns false
console.log(com14);//Returns true
console.log(com15);//Returns true

console.log(com16);//Returns true
console.log(com17);//Returns false
console.log(com18);//Returns true

//JavaScript Logical Operators -> ||(logical or), &&(logical and), !(logical not)

var log1 = (true || true);
var log2 = (true || false);
var log3 = (false || true);
var log4 = (false || false);

var log5 = (true && true);
var log6 = (true && false);
var log7 = (false && false);

var log8 = (!false);
var log9 = (!true);

console.log(log1);//Returns true
console.log(log2);//Returns true
console.log(log3);//Returns true
console.log(log4);//Returns false

console.log(log5);//Returns true
console.log(log6);//Returns false
console.log(log7);//Returns false

console.log(log8);//Returns true
console.log(log9);//Returns false

//JavaScript Assignment Operators -> =, +=, -=, *=, /=, %=, **=(The **= operator is a part of ECMAScript 2016)

var x = 4;
x += 4; //x=x+4
document.write(x);

var y = 8;
y -= 4 //y=y-4
document.write(y);

var z = 4;
z *= 4; //z=z*4
document.write(z);

//JavaScript String Operators
//Adding two numbers, will return the sum, but adding a number and a string will return a string

var text1 = "Happy New Year " + 2022;
var text2 = 2000 + 22 + " Happy New Year!";
var x = "75" - "5";
var y = "75" + "5";
var z = "50" - "Number";

console.log(text1);
console.log(text2);
console.log(x);
console.log(y);
console.log(z);//Returns NaN -> Not a Number

//Conditional (Ternary) Operators
//Syntax -> variable name = (condition) ? value1 : value2;

var x = (12 > 6) ? "Sarwar" : "Rashid";
console.log(x);

