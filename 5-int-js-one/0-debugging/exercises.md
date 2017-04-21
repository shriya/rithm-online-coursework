# { Debugging Exercises. }

## Part IA

### 1. What does the throw keyword do?

The throw keyword throws an error and stops the program at that point when the user does something incorrectly or something goes wrong in your program; for example -- if you have an if statement, an if else statement, but then all other cases are incorrect and will break the program, you can put a throw statement (throw "message"; or throw TypeOfError("message");) in the else statement. 

### 2. What does the finally keyword do?

The finally keyword is used to name the block of code that will execute no matter what error is or is not thrown; you put it at the end of a try/catch block. 

### 3. What is the difference between a TypeError and ReferenceError?

A TypeError is thrown when you use a type incorrectly; for example, undefined(); throws a TypeError because undefined is not a function and thus cannot be called with ();. 

A ReferenceError is thrown when you try to access a variable that doesn't exist in the scope you're in; for example, when you try to use a variable that only exists inside a function in the global scope. 

### 4. How do you create a snippet in the Chrome dev tools?

Cmd + Opt + J to open the Console
Click Sources tab
Click Snippets tab in the leftmost section of Sources
Click New Snippet
Start typing a snippet in the middle section
Cmd + Enter to run (or click Play button)

### 5. In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?

Exceptions are errors; pausing on caught exceptions pauses your program from running every time an error shows up so you can see exactly where the error was thrown (and then can more easily fix it, before the execution continues).

### 6. How do we "catch" errors in JavaScript? Give an example with code for what that might look like.

We can catch errors using a try/catch block; where you "try" to run a block of code, then if something goes wrong or it does not behave the way you expect it to, you "catch" the error returned and can look at it. 

~~~~ 
try {
	var name = prompt("What is your name?");
	if (name !== "Shriya") {
		throw "You are not my mother";
	}
	console.log("You are my mother");
} catch(e) {
	console.log(e);
}
~~~~

## Part IB

### 1. Explain what type of error will be thrown, why the error is occuring, and how to fix it:

~~~~
person;
~~~~

ReferenceError; this variable does not exist. We can fix it by actually declaring the variable: 

~~~~
var person; 
~~~~

^ person will be undefined

~~~~
var person = "Shriya"; 
~~~~

^ to create *and* initialize a variable

### 2. Explain what type of error will be thrown, why the error is occuring, and how to fix it:

~~~~
var data = {};
data.displayInfo();
~~~~

TypeError; data is an empty object, the key displayInfo() was not already created in the data object, so it's value is undefined. Thus, when we try to call it like a function (with the parentheses () at the end), you will get a TypeError.

~~~~
var data = {};
data.displayInfo;
~~~~

^ now it's just an undefined property and there's no longer an error thrown.

~~~~
var data = {};
data.displayInfo = [1, 2, 3];
~~~~

^ this creates a key displayInfo and makes its value an array with 3 items; [1, 2, 3]

### 3. Explain what type of error will be thrown, why the error is occuring, and how to fix it:

~~~~
var data = {};
data.displayInfo.foo = "bar";
~~~~

This would be a ```TypeError``` because we're trying to access the property ```foo``` inside ```displayInfo``` (but ```displayInfo``` was never created because ```data``` is an empty object, so we can't access a property of ```undefined```). 

~~~~
var data = {};
data.displayInfo = {
	foo: "bar"
}; 
~~~~

### 4. Explain what type of error will be thrown, why the error is occuring, and how to fix it:

~~~~
function data(){
    var thing = "foo";
}
data();
thing;
~~~~

Here there will be a ```ReferenceError```; the program is trying to access ```thing``` in the global scope, but it only exists inside the function ```data```.

## Part II

### 1. Fix the broken code and explain what was wrong:

~~~~
for(var i=0; i > 5; i++){
    console.log(i);
}
~~~~

The increment ```i``` is initialized at ```0```, but the condition checks that ```i``` is greater than ```5```, so the code never runs (nothing is logged to the console).

~~~~
for(var i=0; i < 5; i++){
    console.log(i);
}
~~~~

### 2. Fix the broken code and explain what was wrong:

~~~~
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}
~~~~

The condition that was checked inside the ```if``` statment had only one ```=```, so it was an assignment rather than a comparison. It needs to be a ```===``` instead -- a Syntax Error

~~~~
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}
~~~~

### 3. Fix the broken code and explain what was wrong:

~~~~
function loopToFive(){
    for(var i = 0, i < 5, i++){
        console.log(i);
    }
}
~~~~

There is a comma between each section of the for loop rather than a semicolon; Syntax Error _(took me far too long to realize this, lol)_

~~~~
function loopToFive(){
    for (var i = 0; i < 5; i++){
        console.log(i);
    }
}
~~~~

### 4. Fix the broken code and explain what was wrong:

~~~~
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8] 

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.
~~~~

Made all changes: 

~~~~
function displayEvenNumbers(){
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var evenNumbers = [];
    for (var i = 0; i < numbers.length; i++){
        if ((numbers[i] % 2) === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // should return [2,4,6,8] 

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.
~~~~













































































