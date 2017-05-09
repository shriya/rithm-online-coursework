# { List Exercises. }

## Part 1 

### 1. Given a list [1,2,3,4], print out all the values in the list.

`print([value for value in [1,2,3,4]])`

### 2. Given a list [1,2,3,4], print out all the values in the list multiplied by 20.

`print([value*20 for value in [1,2,3,4]])`

### 3. Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter (["E", "T", "M"]).

`[value[0] for value in ["Elie", "Tim", "Matt"]]`

### 4. Given a list [1,2,3,4,5,6] return a new list of all the even values ([2,4,6]).

`[value for value in [1,2,3,4,5,6] if value % 2 == 0]`

### 5. Given two lists [1,2,3,4] and [3,4,5,6], return a new list that is the intersection of the two ([3,4]).

`[value for value in [1,2,3,4] if [3,4,5,6].count(value) > 0]`

### 6. Given a list of words ["Elie", "Tim", "Matt"] return a new list with each word reversed and in lower case (['eile', 'mit', 'ttam']).

`[value[::-1].lower() for value in ["Elie", "Tim", "Matt"]]`

### 7. Given two strings "first" and "third", return a new string with all the letters present in both words (["i", "r", "t"]).

`[value for value in "first" if "third".count(value) > 0]`

### 8. For all the numbers between 1 and 100, return a list with all the numbers that are divisible by 12 ([12, 24, 36, 48, 60, 72, 84, 96]).

`[value for value in range(1, 100) if value % 12 == 0]`

### 9. Given the string "amazing", return a list with all the vowels removed (['m', 'z', 'n', 'g']).

`[letter for letter in "amazing" if letter not in ['a','e','i','o','u']]`

### 10. Generate a list with the value [[0, 1, 2], [0, 1, 2], [0, 1, 2]].

`[list(range(0,3)) for val in range(0, 3)]`

### 11. Generate a list with the value:

```
[
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
]
```
`[list(range(10)) for val in range(0, 10)]`


## Part 2 

Complete the following Codewars problems:

### 1. [Reversed Strings](https://www.codewars.com/kata/reversed-strings)

done

### 2. [Looking for a benefactor](https://www.codewars.com/kata/looking-for-a-benefactor)

done

### 3. [Sum of a sequence](https://www.codewars.com/kata/sum-of-a-sequence/)

done

### 4. [Max diff](https://www.codewars.com/kata/max-diff-easy-1/python)

done

### 5. [Count the similey faces!](https://www.codewars.com/kata/583203e6eb35d7980400002a/)

done

### 6. [Sentence Count](https://www.codewars.com/kata/sentence-count)

done (can't submit...? but all tests pass)

### 7. [Tortoise Racing](https://www.codewars.com/kata/tortoise-racing)

_(not yet done)_

### 8. [Calculate String Rotation](https://www.codewars.com/kata/calculate-string-rotation)

_(not yet done)_
