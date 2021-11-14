//JavaScript number methods
//The rules for JavaScript number methods (collected from w3schools)

//The toString() method returns a number as a string.
var num = 29;
num = toString(num);
console.log(typeof (num));

//The parseInt() JavaScript methods that can be used to convert variables to numbers
var num1 = "29";
var num2 = "29.5";
num1 = parseInt(num1); //Parses its argument and returns an integer 
num2 = parseFloat(num2); //Parses its argument and returns a floating point number
console.log(typeof (num1));
console.log(typeof (num2));

//toFixed() returns a string, with the number written with a specified number of decimals
var number1 = 2.7568;
console.log(number1.toFixed(2));

//toPrecision() returns a string, with a number written with a specified length
var number2 = 2.7568;
console.log(number2.toPrecision(4));

//The Number() method can be used to convert JavaScript variables to numbers
console.log(Number(true)); //Returns 1
console.log(Number(false)); //Returns 0

