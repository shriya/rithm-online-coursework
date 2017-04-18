# { Object Basics. }

### 1. Create an object that has your firstName, lastName, and occupation as keys.

~~~~
var me = {
	firstName: "Shriya",
	lastName: "Nevatia",
	occupation: "student"
};
~~~~

### 2. Access each value from your object using both dot notation and bracket notation.

~~~~
me.firstName
me.lastName
me.occupation

me["firstName"]
me["lastName"]
me["occupation"]
~~~~

### 3. Add a key for hobby to your object. Remove the key and value for occupation.

~~~~
me.hobby = "dance"
delete me.occupation
~~~~

### 4. What is the difference between dot notation and bracket notation?

dot notation can't be used for numbers, bracket notation requires each key to be enclosed in quotes since it's a string *or* can be used when you need to evaluate an expression (ex. [2+3])

# { Object Iteration. }

### 1. Given the following object below, write code to print the value then the key to the console separated by '=>':

~~~~
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim
~~~~

Answer: 

~~~~
for (var key in namesAndHobbies) {
	console.log(namesAndHobbies[key] + " => " + key);
}
~~~~

### 2. Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object.

~~~~
namesAndHobbies.shriya = "dancing";
~~~~

### 3. Write an if statement that console.logs your name and hobby to the console if the key of your name is contained in the object.

~~~~
if("shriya" in namesAndHobbies) {
	console.log(namesAndHobbies["shriya"] + " => shriya")
}
~~~~

# { Object Exercises. }

_For each of the exercises below, assume you are starting with the following programming object._

~~~~
var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
~~~~

### 1. Write the command to add the language "Go" to the end of the languages array.

~~~~ 
programming.languages[3] = "Go";
~~~~ 

### 2. Change the difficulty to the value of 7.

~~~~ 
programming.difficulty = 7;
~~~~ 

### 3. Using the delete keyword, write the command to remove the jokes key from the programming object.

~~~~ 
delete programming.jokes;
~~~~ 

### 4. Write the command to add a new key called isFun and a value of true to the programming object.

~~~~ 
programming.isFun = true;
~~~~ 

### 5. Using a loop, iterate through the languages array and console.log all of the languages.

~~~~ 
for (var i = 0; i < programming.languages.length; i++) {
	console.log(programming.languages[i]);
}
~~~~ 

### 6. Using a loop, console.log all of the keys in the programming object.

~~~~ 
for (var key in programming) {
	console.log(key);
}
~~~~ 

### 7. Using a loop, console.log all of the values in the programming object.

~~~~ 
for (var key in programming) {
	console.log(programming[key]);
}
~~~~ 


