# { Nested Objects. }

## Exercises

### 1. Write a function called displayCities that console.logs all the values in the citiesLivedIn array:

~~~~
displayCities();

// "Seattle"
// "Providence"
// "New York"
~~~~

~~~~
function displayCities() {
	var citiesArr = instructorData.additionalData.moreDetails.citiesLivedIn;
	for(var i = 0; i < citiesArr.length; i++) {
		console.log(citiesArr[i]);
	}
}
~~~~

### 2. Write a function called displayHometownData that console.logs all the values inside of the hometown object

~~~~
displayHometownData();

// "West Orange"
// "NJ"
~~~~

~~~~
function displayHometownData(){
	var hometownData = instructorData.additionalData.moreDetails.hometown;
	for (key in hometownData) {
		console.log(hometownData[key]);
	}
}
~~~~

### 3. Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

~~~~
addDetail("isHilarious", true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/
~~~~

~~~~
function addDetail(key, value) {
	var moreDeets = instructorData.additionalData.moreDetails; 
	moreDeets[key] = value;
	return moreDeets;
}
~~~~

### 4. Finally, let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object (the new keys added above are not included in these examples).

~~~~
removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/
~~~~

~~~~
function removeDetail(key) {
	var moreDeets = instructorData.additionalData.moreDetails;
	delete moreDeets[key]; 
	return moreDeets;
}
~~~~

# { Nested Objects Exercises. }

## Part I

_Given the following nested object:_

~~~~
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}
~~~~

### 1. Using a for loop, console.log all of the numbers in the primeNumbers array.

~~~~
var primes = nestedData.innerData.numberData.primeNumbers;
for (var i = 0; i < primes.length; i++) {
	console.log(primes[i]);
}
~~~~

### 2. Using a for loop, console.log all of the even Fibonnaci numbers.

~~~~
var fibs = nestedData.innerData.numberData.fibonnaci;
for (var i = 0; i < fibs.length; i++) {
	if (fibs[i] % 2 === 0) {
		console.log(fibs[i]);
	}
}
~~~~

### 3. Console.log the value "second" inside the order array.

~~~~
console.log(nestedData.innerData.order[1]);
~~~~

### 4. Invoke the addSnack function and add the snack "chocolate".

~~~~
nestedData.innerData.addSnack("chocolate");
~~~~

### 5. Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

It refers to the entire Object that addSnack is contained inside; so addSnack returned the Object innerData

## Part II

_Given the following nested object:_

~~~~
var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}
~~~~

### 1. Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

~~~~
function addSpeaker(speakerName) {
	nestedObject.speakers.push({name: speakerName});
}

addSpeaker("Shriya");
~~~~

### 2. Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

~~~~
function addLanguage(name, helloLang) {
	var helloObj = {
		hello: helloLang
	};
	nestedObject.data.languages[name] = helloObj; 
}

addLanguage("hindi", "Namaste");
~~~~

### 3. Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

~~~~
function addCountry(ctr, cap, pop) {
	var countriesObj = nestedObject.data.continents.europe.countries;
	countriesObj[ctr] = {
		capital: cap,
		population: pop
	};
}

addCountry("spain", "Madrid", 46000000);
~~~~

# { Nested Arrays. }

## Exercises

### 1. Given the following array, write a function called printEvens that console.logs all of the even numbers

~~~~
var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

printEvens(); 

// 2
// 4
// 6
// 8
// 10
// 12
~~~~

~~~~
function printEvens() {
	for (var i = 0; i < nestedArr.length; i++) {
		for (var j = 0; j < nestedArr[i].length; j++) {
			if (nestedArr[i][j] % 2 === 0) {
				console.log(nestedArr[i][j]);
			}
		}
	}
}
~~~~

### 2. Given the following array, write a function called sumTotal returns the sum of all numbers in the array

~~~~
var nestedArr = [[[1,2],[3,4]],[[5,6]]];

sumTotal(); // 21
~~~~

~~~~
function sumTotal() {
	var sum = 0;
	for (var i = 0; i < nestedArr.length; i++) {
		for (var j = 0; j < nestedArr[i].length; j++) {
			for (var k = 0; k < nestedArr[i][j].length; k++) {
				sum = sum + nestedArr[i][j][k];
			}
		}
	}
	return sum;
}
~~~~

### 3. Given the following array, write a function called countVowels, which returns the count of all of the vowels in each string regardless of case. To see if a value is an array, you can not use typeof since that will return 'object', so one way to do this is by using the Array.isArray function.

~~~~
var arr = []
Array.isArray(arr) // true
Array.isArray('Hello') // false

var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

allVowels() // 13
~~~~

~~~~
var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

function countVowels() {
	var vowels = ["a", "e", "i", "o", "u"];
	var numVowels = 0;
	for (var i = 0; i < nestedArr.length; i++) {
		if (Array.isArray(nestedArr[i])) {
			for (var j = 0; j < nestedArr[i].length; j++) {
				if (Array.isArray(nestedArr[i][j])) {
					for (var k = 0; k < nestedArr[i][j].length; k++) {
						if (Array.isArray(nestedArr[i][j][k])) {
							for (var l = 0; l < nestedArr[i][j][k].length; l++) {
								if (Array.isArray(nestedArr[i][j][k][l])) {
								} else {
									for (var d = 0; d < nestedArr[i][j][k][l].length; d++) {
										if (vowels.indexOf(nestedArr[i][j][k][l][d].toLowerCase()) >= 0) {
											numVowels += 1;
										}
									}
								}
							}
						} else {
							for (var c = 0; c < nestedArr[i][j][k].length; c++) {
								if (vowels.indexOf(nestedArr[i][j][k][c].toLowerCase()) >= 0) {
									numVowels += 1;
								}
							}
						}
					}
				} else {
					for (var b = 0; b < nestedArr[i][j].length; b++) {
						if (vowels.indexOf(nestedArr[i][j][b].toLowerCase()) >= 0) {
							numVowels += 1;
						}
					}
				}
			}
		} else {
			for (var a = 0; a < nestedArr[i].length; a++) {
				if (vowels.indexOf(nestedArr[i][a].toLowerCase()) >= 0) {
					numVowels += 1;
				}
			}
		}
	}
	return numVowels;
}

countVowels();
~~~~

@_@ Is there a simpler way to do this...what

# { Nested Arrays Exercises. }

### 1. Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

~~~~
rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]
~~~~

~~~~
function rotate(arr, num) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		var data = arr[i];
		var newIndex = (i + num) % arr.length
		newArr[newIndex] = data;
	}
	return newArr;
}
~~~~

### 2. Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

~~~~
makeXOGrid(1,4) 

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3,2) 

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3,3) 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/
~~~~

~~~~
function makeXOGrid(rows, cols) {
	var myArr = [];
	for (var i = 0; i < rows; i++) {
		myArr.push([]);
		for (var j = 0; j < cols; j++) {
			if (i % 2 === 0) {
				if (j % 2 === 0) {
					myArr[i].push("X");
				} else {
					myArr[i].push("O");
				}
			} else {
				if (j % 2 === 0) {
					myArr[i].push("O");
				} else {
					myArr[i].push("X");
				}
			}
		}
	}
	return myArr;
}
~~~~




















































































