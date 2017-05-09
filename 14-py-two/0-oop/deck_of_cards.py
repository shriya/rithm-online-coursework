import random

def log(fun):
    def inner(*args):
        if len(args) > 0: 
            fun_args = " ".join([str(x) for x in args])
        else:
            fun_args = ""
        print("running the function '{}' returned '{}'".format(fun.__name__, fun_args))
        return fun(*args)
    return inner

class Card: 
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return "{}, {}".format(self.suit, self.value)

class Deck: 

    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]

        self.i = 0
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def __str__(self):
        return "deck of {} cards".format(len(self.cards))

    def __iter__(self):
        return self

    def __next__(self): 
        if (self.i == len(self.cards)):
            raise StopIteration
        else:
            self.i += 1
            return self.cards[self.i - 1]

    @log
    def deal(self):
        if len(self.cards) == 0:
            raise ValueError("All cards have been dealt")
        self.shuffle()
        return self.cards.pop()

    @log
    def shuffle(self):
        if len(self.cards) == 52:
            random.shuffle(self.cards)
            return self

my_deck = Deck()

# for card in my_deck:
#     print(card)

my_deck.deal()

