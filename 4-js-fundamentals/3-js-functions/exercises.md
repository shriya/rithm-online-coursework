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

### 2. Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter.

~~~~
// for this example, my first name is Tim
sayHello("Tim"); // "Hello Boss"
sayHello("Janey"); // "Hello Janey"
sayHello("Elie"); // "Hello Elie"
~~~~

### 3. Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)

~~~~
average([1,2,3,4,5]); // 3
average([1,2,3,4,5,6]); // 3.5
average([10,20]); // 15
~~~~

### 4. Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the

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

### 7. Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

~~~~
extractEveryThird([1,2,3]); // [3]
extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]
extractEveryThird(["first value", "second value", "third value"]); // ["third value"]
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

console.log(tricky);
~~~~

### 10. Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

~~~~
onlyCapitalLetters("Amazing") // "A"
onlyCapitalLetters("nothing") // ""
onlyCapitalLetters("EVERYTHING") // "EVERYTHING"
~~~~


























