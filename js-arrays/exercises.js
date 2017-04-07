///////////// Array Basics /////////////

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

///////////// Array Methods /////////////
















