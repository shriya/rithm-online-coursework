# { Function Basics. }

### 1. Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console.

~~~~
myName(); // if your full name was Elie Schoppik this function would return "Elie Schoppik" 
~~~~

~~~~
function myName() {
	var name = "Shriya Nevatia"
	console.log(name);
}
myName();
~~~~

### 2. Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".

~~~~
var favoriteFoods = ["pizza", "ice cream"];
~~~~

### 3. Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream, depending on what you get back from Math.random.

~~~~
randomFood(); // either returns "pizza" or "ice cream"
~~~~

~~~~
function randomFood(food) {
	return food[Math.floor(food.length * Math.random())];
}
~~~~

### 4. Create a variable called numbers which is an array that contains the numbers 1 through 10.

~~~~
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
~~~~

### 5. Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd. Here is what that might look like:

~~~~
displayOddNumbers(); 

// 1
// 3
// 5
// 7
// 9
~~~~

~~~~
function displayOddNumbers(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 1) {
			console.log(numbers[i]);
		}	
	}
}
~~~~

### 6. Write a function called displayEvenNumbers which iterates over the numbers array and console.logs out all of the numbers that are even. Here is what that might look like:

~~~~
displayEvenNumbers(); 

// 2
// 4
// 6
// 8
// 10
~~~~

~~~~
function displayEvenNumbers(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			console.log(numbers[i]);
		}	
	}
}
~~~~

### 7. Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds

~~~~
returnFirstOddNumber(); 

// 1
~~~~

~~~~
function returnFirstOddNumber(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 1) {
			return numbers[i];
		}	
	}
}
~~~~

### 8. Create a function called returnFirstEvenNumber which iterates over the numbers array and returns the first even number it finds

~~~~
returnFirstEvenNumber(); 

// 2
~~~~
function returnFirstEvenNumber(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			return numbers[i];
		}	
	}
}
~~~~

~~~~

### 9. Create a function called returnFirstHalf which returns the first half of the numbers array

~~~~
returnFirstHalf(); 

// [1,2,3,4,5]
~~~~

function returnFirstHalf(numbers) {
	return numbers.slice(0, numbers.length/2);
}

### 10. Create a function called returnSecondHalf which returns the second half of the numbers array

~~~~
returnSecondHalf(); 

// [6,7,8,9,10]
~~~~

function returnSecondHalf(numbers) {
	return numbers.slice(numbers.length/2, numbers.length);
}

# { Function Parameters and Scope. }

### 1. Make a function for add, subtract, multiply, and divide. Each of these functions should accept two parameters and return the sum, difference, product and quotient.

~~~~
add(2,2); // 4
subtract(2,2); // 0
multiply(2,2); // 4
divide(2,2); // 1
~~~~

~~~~
function add(x, y) {
	return x + y;
}

function subtract(m, n) {
	return m - n;
}

function multiply(a, b) {
	return a * b;
}

function divide(u, v) {
	return u / v;
}
~~~~

### 2. Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter.

~~~~
// for this example, my first name is Tim
sayHello("Tim"); // "Hello Boss"
sayHello("Janey"); // "Hello Janey"
sayHello("Elie"); // "Hello Elie"
~~~~

~~~~
function sayHello(str) {
	if (str.toLowerCase() === "shriya") {
		return "Hello Boss";
	} else {
		return "Hello " + str;
	}
}
~~~~

### 3. Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)

~~~~
average([1,2,3,4,5]); // 3
average([1,2,3,4,5,6]); // 3.5
average([10,20]); // 15
~~~~

~~~~
function average(arr) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum/arr.length;
}
~~~~

### 4. Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the parameters.

~~~~
createStudent("Elie", "Schoppik");
/*
{
    firstName: "Elie",
    lastName: "Schoppik"
}
*/
createStudent("Tim", "Garcia");
/*
{
    firstName: "Tim",
    lastName: "Garcia"
}
*/
~~~~

~~~~
function createStudent(first, last) {
	var studentObj = {
		firstName: first,
		lastName: last
	}
	return studentObj;
}
~~~~

### 5. Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students

~~~~
var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie];

// your students array should contain three objects each with the keys of firstName and lastName. If they do not - make sure you correctly implement the createStudent function from above!
~~~~

### 6. Write a function called findStudentByFirstName, which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization

~~~~
findStudentByFirstName('elie') // true
findStudentByFirstName('Elie') // true
findStudentByFirstName('Janey') // false
findStudentByFirstName('Janey') // false
findStudentByFirstName('TIM') // true
findStudentByFirstName('MMMaaaTTTtttTTT') // false
~~~~

~~~~
function findStudentByFirstName(str) {
	for (var i = 0; i < students.length; i++) {
			if (str.toLowerCase() === students[i].firstName.toLowerCase()) {
			return true;
		} 
	}
	return false;
}
~~~~

### 7. Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

~~~~
extractEveryThird([1,2,3]); // [3]
extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]
extractEveryThird(["first value", "second value", "third value"]); // ["third value"]
~~~~

~~~~
function extractEveryThird(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if ((i + 1) % 3 === 0) {
			newArr = newArr.concat(arr[i]);
		}
	}
	return newArr;
}
~~~~

### 8. Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.

~~~~
countEvensAndOdds([1,2,3,4]);
/* 
 {
    oddCount:2,
    evenCount:2
 }
*/
countEvensAndOdds([1,2,3,4,5,6,7]);
/* 
 {
    oddCount:4,
    evenCount:3
 }
*/
~~~~

~~~~
function countEvensAndOdds(arr) {
	var obj = {
		oddCount: 0,
		evenCount: 0
	}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			obj.evenCount = obj.evenCount + 1;
		} else {
			obj.oddCount = obj.oddCount + 1;
		}
	}
	return obj;
}
~~~~

### 9. In the following example, what will be printed in the console? Make sure you first try read this code before pasting it into the console :)

~~~~
var myVar = "Hello from global";

function scopePractice() {
   var myVar = "Hello from function scope";
}

scopePractice();
console.log(myVar);

var tricky = "Hello from global";

function trickyScopePractice() {
    tricky = "Hello from function scope"; 
}

console.log(tricky); // we didn't call trickyScopePractice()
~~~~

~~~~
Hello from global
Hello from global
~~~~

### 10. Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

~~~~
onlyCapitalLetters("Amazing") // "A"
onlyCapitalLetters("nothing") // ""
onlyCapitalLetters("EVERYTHING") // "EVERYTHING"
~~~~

function onlyCapitalLetters(str) {
	var returnStr = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i].toUpperCase() === str[i]) {
			returnStr = returnStr + str[i];
		}
	}
	return returnStr;
}

# { Anonymous Functions and IIFEs. }

### 1. Write a function called displayFullName, which should accept two parameters, firstName and lastName. The function should be immediately invoked and return the firstName + lastName. You should NOT have to call this function, it should invoke right away.

~~~~
(function(firstName, lastName) {
	return firstName + " " + lastName;
})("Shriya", "Nevatia");
~~~~

### 2. Write a function called createCalculator, which should return an object that has four methods, add, subtract, multiply and divide.

~~~~
var calc = createCalculator();
calc.add(20,20); // 40
calc.subtract(2,2); // 0
calc.multiply(2,2); // 4
calc.divide(12,2); // 6
~~~~

~~~~
function createCalculator() {
	return {
		add: function(a, b) {
			return a + b;
		},
		subtract: function (x, y) {
			return x - y;
		}, 
		multiply: function(m, n) {
			return m * n;
		},
		divide: function (u, v) {
			return u / v;
		}
	}
}
~~~~

# { Hoisting. }

### 1. What does the following code output? Why?

~~~~
var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName(); // ?
~~~~

firstName is hoisted to the top of the program but is undefined, as is displayFirstName() (for the moment, also undefined). Inside displayFirstName(), firstName is declared but undefined. Now once the assignments are executed, the function is called and returns 'Tim', since that is the local variable that was created, assigned, and the function was invoked.

### 2. What does the following code output? Why?

~~~~
function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName();

console.log(firstName) // ?
~~~~

The function displayFirstName() is declared but not defined, initially. Within the function, the variable firstName is also declared but not defined. Now the program can execute the actual definitions; displayFirstName() is defined, and firstName within the function is assigned to "Tim". The program invokes displayFirstName() and returns "Tim", then the console.log line throws and error because there is no variable firstName that's visible in the global scope.

### 3. What does the following code output? Why?

~~~~
console.log(firstName) // ?
var firstName = "Elie"
~~~~

It outputs undefined because the variable firstName is declared via hoisting when the program begins to run, but it's logged to the console before being assigned to the string "Elie".

### 4. What does the following code output? Why?

~~~~
console.log(firstName) // ?
firstName = 'Elie'
~~~~

The program outputs an error (as a self-contained program unrelated to previous examples) because the variable firstName does not exist and was never declared.

### 5. What does the following code output? Why?

~~~~
function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}

sayHi(); // ?
~~~~

The function sayHi() is declared but not defined, and within it the variable firstName is also declared but not defined. Then the program begins to run -- the function is defined, then it's invoked in the line sayHi(); -- but firstName corresponds to undefined, not "Elie", so the function returns "Hi undefined".

### 6. What does the following code output? Why?

~~~~
function sayHi(){
    return 'Hi ' + firstName; 
    firstName = 'Elie'
}

sayHi(); // ?
~~~~

The function sayHi() is declared but not defined, but the variable firstName is never declared. This means that once the program begins to run (the line sayHi();), it will throw an error because firstName was never initialized. 

### 7. What does the following code output? Why?

~~~~
sayHi() // ?

function sayHi(){
    return 'Hi!';
}
~~~~

The function definition is hoisted to the top, so this will return "Hi!"

### 8. What does the following code output? Why?

~~~~
sayHi() // ?

var sayHi = function(){
    return 'Hi!';
}
~~~~

The function sayHi is created via hoisting but its value is undefined. It will return an error because we are trying to call undefined as if it is a function (with the () after sayHi)

*** 

# { Functions Exercises. } 

## Part 1

### 1. difference

* this function takes in two parameters and returns the difference of the two;

~~~~
difference(2,2); // 0
difference(0,2); // -2
~~~~

function difference(x, y) {
	return x - y;
}

### 2. product

* this function takes in two parameters and returns the product of the two;

~~~~
product(2,2); // 4
product(0,2); // 0
~~~~

function product(x , y) {
	return x * y;
}

### 3. printDay

* this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

~~~~
printDay(4); // "Wednesday"
printDay(41); // undefined
~~~~

function printDay(num) {
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	if (days[num - 1] !== undefined) {
		return days[num - 1];
	}
}

### 4. lastElement

* this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

~~~~
lastElement([1,2,3,4]); // 4
lastElement([]); // undefined
~~~~

function lastElement(arr) {
	return arr[arr.length - 1];	
}

### 5. numberCompare

* this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

~~~~
numberCompare(1,1); // "Numbers are equal"
numberCompare(2,1); // "First is greater"
numberCompare(1,2); // "Second is greater"
~~~~

function numberCompare(x, y) {
	if (x === y) {
		return "Numbers are equal";
	} else if (x > y) {
		return "First is greater";
	} else {
		return "Second is greater";
	}
}

### 6. singleLetterCount

* this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

~~~~
singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2
~~~~

function singleLetterCount(str, chr) {
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if(str[i].toLowerCase() === chr.toLowerCase()) {
			count += 1;
		}
	}
	return count;
}

## Part 2

### 1. multipleLetterCount

this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

~~~~
multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}
~~~~

function multipleLetterCount(str) {
	var myObj = {};
	for (var i = 0; i < str.length; i++) {
		if (myObj[str[i]] === undefined) {
			myObj[str[i]] = 1;
		} else {
			myObj[str[i]] += 1;
		}
	}
	return myObj;
}

### 2. arrayManipulation

* this function should take in at most four parameters (an array, command, location, and value).
  * If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
  * If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
  * If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
  * If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

~~~~
arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]
~~~~

function arrayManipulation(arr, com, loc, val) {
	if (com === "remove") {
		if (loc === "end") {
			return arr.pop();
		} else if (loc === "beginning") {
			return arr.unshift();
		}
	} else if (com === "add") {
		if (loc === "end") {
			return arr.push(val);
		} else if (loc === "beginning") {
			return arr.shift(val);
		}
	}
}

### 3. isPalindrome

* A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true

~~~~
isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome('hannah'); // true
isPalindrome('robert'); // false
~~~~

function isPalindrome(str) {
	var reversedStr = str.split("").reverse().join("");
	if (str === reversedStr) {
		return true;
	} else {
		return false;
	}
}

## Part 3

### 1. Rock / Paper / Scissor

* using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.

(function() {
	var options = ["Rock", "Paper", "Scissors"];
	console.log ("Welcome to Rock, Paper, Scissors. Type 'stop' as an answer to the prompt to exit the game.");
	do {
		var result = prompt("Rock, Paper, or Scissors?");
		var computerResult = options[Math.floor(Math.random() * options.length)];

		if (computerResult === "Rock") {
			if (result.toLowerCase() === "rock") {
				console.log("The computer chose Rock");
				console.log("You tied!");
			} else if (result.toLowerCase() === "paper") {
				console.log("The computer chose Rock");
				console.log("You won!");
			} else if (result.toLowerCase() === "scissors") {
				console.log("The computer chose Rock");
				console.log("You lost!");
			} 
		} else if (computerResult === "Paper") {
			if (result.toLowerCase() === "rock") {
				console.log("The computer chose Paper");
				console.log("You lost!");
			} else if (result.toLowerCase() === "paper") {
				console.log("The computer chose Paper");
				console.log("You tied!");
			} else if (result.toLowerCase() === "scissors") {
				console.log("The computer chose Paper");
				console.log("You won!");
			} 
		} else {
			if (result.toLowerCase() === "rock") {
				console.log("The computer chose Scissors");
				console.log("You won!");
			} else if (result.toLowerCase() === "paper") {
				console.log("The computer chose Scissors");
				console.log("You lost!");
			} else if (result.toLowerCase() === "scissors") {
				console.log("The computer chose Scissors");
				console.log("You tied!");
			}
		}
	} while (result !== "stop");
	console.log("Thanks for playing!");
})();
































































