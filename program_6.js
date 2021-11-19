//JavaScript string library functions

var firstName = prompt("Enter your name :");
var len = firstName.length;//length -> Returns the length of a string
document.write("Number of character: " + firstName.length);

let text = "JavaScript";
document.write(text.charAt(4));//charAt() -> Returns the character at the specified index (position)

let text = "JavaScript";
document.write(text.toUpperCase());//toUpperCase() -> Converts a string to uppercase letters

let text = "JavaScript";
document.write(text.toLowerCase());//toLowerCase() -> Converts a string to lowercase letters

let text1 = "Java";
let text2 = "Script";
let fullText = text1.concat(text2);//concat() -> Joins two or more strings, and returns a new joined strings
document.write(fullText);

let text1 = "JavaScript";
document.write(text1.slice(0, 2));//slice() -> Extracts a part of a string and returns a new string

let firstName = prompt("Enter your first name :");
let lastName = prompt("Enter your last name :");
let fullName = (firstName + lastName);

document.write("Full name: " + fullName);
console.log("Length of full name: " + fullName.length);
console.log("UpperCase of full name: " + fullName.toUpperCase());
console.log("Second position of full name: " + fullName.charAt(1));


let firstName = prompt("Enter your first name :");
let lastName = prompt("Enter your last name :");
let fullName = (firstName + lastName);

console.log(`Full name: ${fullName} 
Length of full name: ${fullName.length}
UpperCase of full name: ${fullName.toUpperCase()}
Second position of full name: ${fullName.charAt(1)}`);//Use back-ticks(``) rather than the quotes("") to define a string

