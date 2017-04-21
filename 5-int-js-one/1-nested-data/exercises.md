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





















































































