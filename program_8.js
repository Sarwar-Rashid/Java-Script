//A simple calculator

var num1 = parseFloat(prompt("Enter first number :"));
var num2 = parseFloat(prompt("Enter second number :"));

var sum = (num1 + num2);
var sub = (num1 - num2);
var mul = (num1 * num2);
var div = (num1 / num2);
var mod = (num1 % num2);

console.log(`${num1} + ${num2} = ${sum}
${num1} - ${num2} = ${sub}
${num1} * ${num2} = ${mul}
${num1} / ${num2} = ${div}
${num1} % ${num2} = ${mod}`);

