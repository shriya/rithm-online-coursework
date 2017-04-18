# { Array Basics. }

### 1. Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements.

var favoriteFoods = ["artichokes", "parmesan cheese", "sour cream & onion chips", "tandoori paneer", "gin"];

### 2. Access the second element in favoriteFoods.

favoriteFoods[1];

### 3. Change the last element in favoriteFoods to some other food.

favoriteFoods[favoriteFoods.length-1] = "licorice";

### 4. Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.

var formerFavoriteFood = favoriteFoods.shift();

### 5. Add a favorite food to the back of the favoriteFoods array.

favoriteFoods.push("cookie dough ice cream");

### 6. Add a favorite food to the front of the favoriteFoods array.

favoriteFoods.unshift("black olives");

### 7. What happens when you try to pop from an empty array?

It returns undefined and the array is still empty

### 8. In the examples below, use splice to convert the first array to the second array:

~~~~
[2, 3, 4, 5] -> [2, 4, 5]
~~~~

var arr1 = [2, 3, 4, 5];
arr1.splice(1, 1);

~~~~
["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
~~~~

var arr2 = ["alpha", "gamma", "delta"];
arr2.splice(1, 0, "beta");

~~~~
[10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
~~~~

var arr3 = [10,-10,-5,-3,2,1];
arr3.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);

# { Array Methods. }

## Part I

### Write the code necessary to do the following:

##### Create an empty array called arr.

~~~~
var arr = [];
~~~~

##### Add your first name to the arr variable

~~~~
arr[0] = "Shriya";
~~~~

##### Add your last name to the end of the arr variable

~~~~
arr[1] = "Nevatia";
~~~~

##### Add your favorite color to the beginning of the arr variable

~~~~
arr.unshift("teal");
~~~~

### Your variable arr should look like this (using Elie for a first name, Schoppik for a last name and purple for a favorite color) ["purple", "Elie", "Schoppik"]. Keep going!

~~~~
console.log(arr);
["teal", "Shriya", "Nevatia"]
~~~~

##### Remove the favorite color from the arr variable (remember this is the first value in the array - what method can you use to remove the first value in an array?)

~~~~
arr.shift();
~~~~

##### Create another array called arr2.

~~~~
var arr2 = [];
~~~~

##### Add your favorite number to arr2

~~~~
arr2[0] = 8;
~~~~

##### Add the string "JavaScript" to the end of the arr2 variable

~~~~
arr2.push("JavaScript");
~~~~

### Your variable arr2 should look like this (using 42 as a favorite number) [42, "JavaScript"].

~~~~
console.log(arr2);
[8, "JavaScript"]
~~~~

##### See if the value 42 exists in the arr2 array. Do this using the indexOf method. What does indexOf return to you if the value passed to it can not be found in the array?

~~~~
arr.indexOf(42);
~~~~

it returns -1

##### Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.

~~~~
var combinedArr = arr.concat(arr2);
~~~~

### Your combinedArr variable should look like this (using our previous values) ["Elie", "Schoppik", 42, "JavaScript"]

~~~~
console.log(combinedArr);
["Shriya", "Nevatia", 8, "JavaScript"]
~~~~

## Part II

_Complete the following, starting from the following array: var arr = ["JavaScript", "Python", "Ruby", "Java"]_

##### Return the following array: ["Python", "Ruby"].

~~~~
arr.slice(1, 3);
~~~~

##### Combine the array with the array ["Haskell", "Clojure"].

~~~~
arr.concat("Haskell", "Clojure");
~~~~

##### Return the string "JavaScript, Python, Ruby, Java".

arr.join(", ");

##### Try to explain, in your own words (or diagrams!) what the difference is between passing by value vs. passing by reference.

Passing by value means that you are copying the value stored in a certain variable and updating a different variable's value to be assigned to that one. Passing by reference means that you are "pointing" the new variable to the same value as the initial variable (which means that when the value is updated, both variables are updated to that value).

# { Array Exercises. }

_For each of the exercises below, assume you are starting with the following people array._

~~~~
var people = ["Greg", "Mary", "Devon", "James"];
~~~~

### 1. Using a loop, iterate through this array and console.log all of the people.

for(i = 0; i < people.length; i++) {
	console.log(people[i]);
}

### 2. Write the command to remove "Greg" from the array.

people.shift();

### 3. Write the command to remove "James" from the array.

people.pop();

### 4. Write the command to add "Matt" to the front of the array.

people.unshift("Matt");

### 5. Write the command to add your name to the end of the array.

people.push("Shriya");

### 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

for (var i = 0; i < people.length; i++) {
	console.log(people[i]);
		if (people[i] === "Mary") {
		break;
	}
} 

### 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

var peopleCopy = people.slice(2, 4);

### 8. Write the command that gives the indexOf where "Mary" is located.

people.indexOf("Mary");

### 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).

people.indexOf("Foo");

### 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

var people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");

### 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

var withBob = people.concat("Bob");




