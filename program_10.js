//Temperature converter

//The temperature conversion formula from celsius to fahrenheit -> F = (C * (9 / 5)) + 32
var cel = parseFloat(prompt("Enter a celsius temperature :"));
var fah = (cel * (9 / 5)) + 32;//Formula : celsius to fahrenheit -> F = (C * (9 / 5)) + 32
alert("Fahrenheit : " + fah + " Degree");


//The temperature conversion formula from fahrenheit to celsius -> C = (F - 32) * (5 / 9)
var fah = parseFloat(prompt("Enter a fahrenheit temperature :"));
var cel = (fah - 32) * (5 / 9);//Formula : fahrenheit to celsius -> C = (F - 32) * (5 / 9)
document.write("Celsius : " + cel + " Degree");

