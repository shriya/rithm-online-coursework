/*

{ JavaScript History and Setup. }

1. What is the difference between JavaScript and ECMAScript?

ECMAScript is a standard, and JavaScript is an implementation of that standard - other language implementations may also follow the ECMAScript standard.

2. Who is Brendan Eich?

Creator of Javascript!

3. How do you hide and show the Chrome console?

Command + Option + J

4. Create a simple page with a script tag. Inside of the script tag declare a couple of variables and then log their values to the console.

(see sample.html)

5. Research prompt and confirm - what do they do?

prompt() displays a pop-up box asking the user for something; ex.

prompt("What is your name?")

will show a pop-up asking the user for a name

confirm() displays a pop-up box telling the user something that they must click to confirm, ex. 

confirm("Are you sure you want to proceed?")

will show a pop-up asking the user to confirm that they want to proceed

*/

//////////////////////////////////////////////

// { Variables and Primitives. }

//
var firstName = prompt("What is your first name?");

console.log("Hi, " + firstName + "!");
console.log("How are you doing, " + firstName + "?");
console.log("See you later, " + firstName + "!");

//
var myFirstName = "Shriya";
var myLastName = "Nevatia";
var fullName = myFirstName + " " + myLastName;

//
var sentence = 'An example of escaping with a slash because you can\'t otherwise escape!'
console.log(sentence);
























