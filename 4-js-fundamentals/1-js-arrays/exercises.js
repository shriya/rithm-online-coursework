///////////// Array Basics /////////////

/* 

// create array
var favoriteFoods = ["pasta", "artichokes", "iced lattes", "margaritas", "poached eggs"];

// access second element
favoriteFoods[1]; 

// change last element
favoriteFoods[favoriteFoods.length-1] = "cookie dough";

// remove first and store in var

var formerFavoriteFood = favoriteFoods.shift();

// add new to back 
favoriteFoods.push("goat cheese");

// add new to front
favoriteFoods.unshift("balsamic vinegar");

// pop from empty
var myArr = []

myArr.pop()

console.log(myArr);

// use splice to convert
// starting index, num elements to remove, elements to add...

var arrOne = [2, 3, 4 ,5];
arrOne.splice(1, 1);
console.log(arrOne);

var arrTwo = ["alpha", "gamma", "delta"];
arrTwo.splice(1, 0, "beta");
console.log(arrTwo);

var arrThree = [10, -10, -5, -3, 2, 1]; 
arrThree.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);
console.log(arrThree);

*/

///////////// Array Methods /////////////

/* 

// lmfao slice vs splice -_- why guise

var arr = [1, 2, 3, 4]

var copy = arr.slice(); 
console.log(copy); // [1, 2, 3, 4]

var anotherCopy = arr.slice(2);
console.log(anotherCopy); // [3, 4]

console.log(arr); // slice didn't modify the original because it was copied // [1, 2, 3, 4]

var lastCopy = arr.slice(1, 3)
console.log(lastCopy); // [2, 3]

// concat

var firstArr = [1, 2, 3];
var secondArr = [4, 5, 6];
var thirdArr = [7, 8, 9];
var combine = firstArr.concat(secondArr, thirdArr, 10, 11);

console.log(combine);

// join

var arr = ["K", "E", "S", "H", "A"];
console.log(arr.join("$"));

// indexOf 

// ^ use arr from above

console.log(arr.indexOf("E")); // 1, index 1
console.log(arr.indexOf("P")); // -1, not found

*/ 

/* 

var myString = "Shriya";
var newStr = "B" + myString.slice(1);
console.log(newStr);


// loop through keys of an object

var foodObj = {
	pasta: "tan",
	arugula: "green",
	latte: "brown"
}

for (var food in foodObj) {
	foodObj[food] = "color is " + foodObj[food];
}


if ("pasta" in foodObj) {
	console.log("yes");
} else {
	console.log("no");
}

(2 < 3) ? console.log("yes") : console.log("no"); 

*/ 


var numFunction = function myFunction (a, b) {
	return a + b;
}

myFunction(1, 3);


function() {}



// 

var example = (function() {
	var password = "1234"

	return {
		getPassword: function () {
			return password;
		}, 
		setPassword: function (newPassword) {
			password = newPassword;
			return "Password changed!";
		}
	}
})()












