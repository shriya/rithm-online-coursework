# { Higher Order Functions. }

## Practice

### 1. Let's try to write a function called each which accepts two parameters: an array and a callback function. The each function should loop over the array passed to it and run the callback function on each element in it.

~~~~
// this function should accept 2 parameters, put them in!
function each(){
    // put your code inside here!
}

each([1,2,3,4], function(val){
    console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

each([1,2,3,4], function(val){
    console.log(val*2);
});

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8
~~~~

~~~~
function each (arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		fn(arr[i]);
	}
}
~~~~

## Exercises

### 1. Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. Here's an example:

~~~~
map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]
~~~~

~~~~
function map(arr, fn) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr[i] = fn(arr[i]);
	}
	return newArr;
}
~~~~

### 2. Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. Here are two examples:

~~~~
reject([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]
~~~~

~~~~
function reject(arr, fn) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (!fn(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
~~~~

# { Timers. }

### 1. What is the difference between setInterval and setTimeout?

```setInterval``` runs the block of code inside of it continuously / infinitely (until/unless it is stopped by clearTimeout or clearInterval) with delays (or "intervals") of the number of milliseconds passed into the function, whereas ```setTimeout``` only runs the block of code inside of it once, with a delay of the number of milliseconds passed into it. 

### 2. What is the difference between using setInterval and a loop? Why would you want to choose one over the other?

```setInterval``` allows you to have an interval between each iteration of the loop, but a normal loop will not. It also doesn't force you to set a condition to break out of an infinite loop (which is potentially dangerous!), but a while loop requires it (hackable by using ```while (true)```)) You would want to choose ```setInterval``` if you want a delay between each iteration of the loop, otherwise a for or while loop.

### 3. What is the first parameter that setInterval and setTimeout accept?

An anonymous callback function 

### 4. Why is it so important to store the result of setInterval and setTimeout in a variable?

The return value of ```setInterval``` and ```setTimeout``` is a timer id. We can store and then pass this value into ```clearTimeout``` or ```clearInterval```, otherwise the ```setInterval``` function will run forever! 

### 5. What does asynchronous mean in the context of setTimeout and setInterval?

Asynchronous code means code that will be executed at a later time in the program. For these functions, it means that the block of code inside of them will be handled by the javascript event queue rather than simply put on the call stack.

# { Closures. }
 
## Exercises 
 
### 1. What is a closure?

Closure is when a function is able to access variables from an outer function that has already returned.

###  2. List two reasons why closures are useful

Closures allow us to have "private variables" that are not accessible outside of a function. It also allows us to use nested functions to modify data without that data being visible outside of the wrapper function.

### 3. What is a module?

A module is a piece of code that can be encapsulated and reused.

### 4. What is the arguments array-like object?

The keyword `arguments` refers to the set of all arguments which were passed into a function.

### 5. Why do we call arguments an array-like-object?

`Arguments` is an "array-like object" because it has a `length` property, but you can't do other array functions on it (like `push` or `pop`). 

### 6. Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.

```
var firstCounter = createCounter();

firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3
firstCounter(); // 4

var secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4
```

```
function createCounter() {
	var count = 0;
	return function countUp() {
		return count++;
	}
}
```

# { Higher Order Functions, Timers, and Closures Exercises. }

### 1. `countdown`

Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

~~~~
countDown(4);
// 3
// 2
// 1
// "DONE!"
~~~~

~~~~
function countdown(num) {
	var timerId = setInterval(function() {
		console.log(num);
		num--;
	}, 1000);

	setTimeout(function() {
		clearInterval(timerId);
		console.log("DONE!");
	}, num*1000)
}
~~~~

### 2. `randomGame`

Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

~~~~
function randomGame() {
	var counter = 0;
	var timerId = setInterval(function() {
		var rand = Math.random();
		counter++;
		if (rand > 0.75) {
			clearTimeout(timerId);
			console.log(`It took ${counter} tries`);
		}
	}, 1000);
}
~~~~

### 3. `isEven`

Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not

~~~~
isEven(2); // true
isEven(3); // false
~~~~

~~~~
function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	return false;
}
~~~~

### 4. `isOdd`

Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

~~~~
isOdd(3); // true
isOdd(14); // false
~~~~

~~~~
function isOdd(num) {
	if (num % 2 === 1) {
		return true;
	}
	return false;
}
~~~~

### 5. `isPrime`

Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false

~~~~
isPrime(8); // false
isPrime(17); // true
~~~~

~~~~
function isPrime(num) {
	if (num === 2) {
		return true;
	}
	if (num > 2) {
		for (var i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			} 
		}
		return true;
	}
	return false;
}
~~~~

### 6. `numberFact`

Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

~~~~
numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true
~~~~

~~~~
function numberFact(num, cb) {
	return cb(num);
}
~~~~

### 7. `find`

Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.

~~~~
find([8,11,4,27], function(val){return val >= 10}); // 11
find([8,11,4,27], function(val){return val === 5}); // undefined
~~~~

~~~~
function find(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
		if (cb(arr[i]) === true) {
			return arr[i];
		}
	}
}

// example
// find([1,2,3], function(val) {
//	return val % 2 === 0;
// });
~~~~

### 8. `findIndex`

Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.

~~~~
// returns 1 (index of the first value greater than or equal to 10)
findIndex([8,11,4,27], function(val){return val >= 10});

findIndex([8,11,4,27], function(val){return val === 7}); // undefined
~~~~

~~~~
function findIndex(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
		if (cb(arr[i]) === true) {
			return i;
		}
	}
}
~~~~

### 9. specialMultiply

Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

~~~~
specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function 
~~~~

~~~~
function specialMultiply(a, b) {
	if (arguments.length === 2) {
		return a * b;
	} else {
		return function innerMult(num) {
			return a * num;
		}
	}
}
~~~~
