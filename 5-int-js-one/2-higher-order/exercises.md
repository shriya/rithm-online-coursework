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

























































































