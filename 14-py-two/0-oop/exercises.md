# { Object Oriented Programming in Python Exercises. }

## Part 1

## Part 2

### 1. Create a deck of cards class. Internally, the deck of cards should use another class, a card class. Your requirements are:

* The Deck class should have a deal method to deal a single card from the deck
* After a card is dealt, it is removed from the deck.
* There should be a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
* The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)

_(in deck_of_cards.py)_

#### BONUSES

##### 1. Make the deck iterable.  You should be able to do the following:

```d = Deck()
for card in d:
    print(card)
```

done

##### 2. Create a decorator called `log` that will print the name of the function being invoked and the arguments to that function

done

##### 3.  Read ahead to file IO.  Change your log function so that rather than printing, log with write the information to a file called deck.log

so in your class, you should be able to do something like this:

```@log
def shuffle(self):
```



##### 4. Make your Deck saveable.  Save contents (and the order) of your deck of cards to a CSV file.
 


##### 5. Load your deck from a CSV file

You should be able to kill your program after doing a save.  Start it up again and do a load and have the same deck of cards in the same order
