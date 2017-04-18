# { JavaScript History and Setup. }

### 1. What is the difference between JavaScript and ECMAScript?

ECMAScript is a standard, and JavaScript is an implementation of that standard - other language implementations may also follow the ECMAScript standard.

### 2. Who is Brendan Eich?

Creator of Javascript!

### 3. How do you hide and show the Chrome console?

Command + Option + J

### 4. Create a simple page with a script tag. Inside of the script tag declare a couple of variables and then log their values to the console.

_(see index.html)_

### 5. Research prompt and confirm - what do they do?

~~~~ 
prompt() 
~~~~ 
displays a pop-up box asking the user for something; ex.

~~~~
prompt("What is your name?")
~~~~

will show a pop-up asking the user for a name

~~~~
confirm()
~~~~ 

displays a pop-up box telling the user something that they must click to confirm, ex. 

~~~~
confirm("Are you sure you want to proceed?")
~~~~

will show a pop-up asking the user to confirm that they want to proceed

# { Variables and Primitives. }

### 1. Create the following variables: name, which is a string set to your current name, and dayOfBirth, which is a number set to the day of your birth month

~~~~
var name = "Shriya";
var dayOfBirth = 31;
~~~~

### 2. See what happens when you have multiple variables of the same name. Which one takes precedence?

~~~~
var name = "Something";
console.log(name);
~~~~
answer: it's the last definition of the var

### 3. Write some JavaScript that prompt's the user for their favorite color. Once the user has submitted a favorite color, log that color to the console along with a friendly message.

~~~~ 
var faveColor = prompt("What is your favorite color?");
console.log(faveColor + " is such a beautiful color!");
~~~~ 

### 4. Create a string that contains both single quotes and double quotes.

~~~~ 
var myQuote = 'My favorite quote is "We judge ourselves by what we feel capable of doing, while others judge us by what we have already done." by Henry Wadsworth Longfellow';
console.log(myQuote);
~~~~ 

### 5. What is the difference between null and undefined?

undefined is for a value that has not yet been defined, while null is the intentional absence of data

### 6. What is NaN in JavaScript? What is the typeof NaN?

NaN stands for "not a number"

~~~~
console.log(typeof(NaN));
~~~~

the type of NaN is "number"

### 7. You can declare a variable by typing var thing;. What is the value of thing?

~~~~
var thing;
~~~~

thing is undefined 

# { Boolean Logic Exercises. }

## Part 1

#### 1. 2 == "2";

true because of type coercion

#### 2. 2 === 2;

true

#### 3. 10 % 3;

1; 10 divided by 3 is 3 remainder 1

#### 4. 10 % 3 === 1;

true

#### 5. true && false;

false

#### 6. false || true;

true; or means if one is true, whole thing is true

#### 7. true || false;

true; or means if one is true, whole thing is true

## Part II

~~~~
var isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
~~~~

### 1. What should the above code console.log?

Keep it up!

### 2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?

Since the value of isLearning is true, if(isLearning) is the same as if(true), which will run.

~~~~
var firstVariable;
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh!";

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
}
~~~~

### 1. What should the above code console.log? Why?

third

### 2. What is the value of firstVariable when it is initialized?

undefined

### 3. Is the value of firstVariable a "truthy" value? Why?

No; undefined is a falsey value

### 4. Is the value of secondVariable a "truthy" value? Why?

No; the empty string is a falsey value

### 5. Is the value of thirdVariable a "truthy" value? Why?

Yes; any integer other than 0 is a truthy value

## Part III

### 1. Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".

~~~~ 
var myNum = Math.random()

if (myNum > 0.5) {
	console.log("Over 0.5");
} else {
	console.log("Under 0.5");
}
~~~~ 

### 2. What is a falsey value? List all the falsey values in JavaScript.

Falsey values are values which evaluate to false: 

false
undefined
0
null
NaN
""











