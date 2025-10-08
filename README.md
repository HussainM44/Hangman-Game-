# HANG MAN

### ***Pre Work-Out**

***Html***
For Game Hangman, Html will start with header being hangman . in the body will be a hanging man img src. The body will also show Word to be guessed , Number of guesses missed ,
the user input(guessed letter or word) and the buttons for submit and reset.
***Js***
The element constants will be created to select html items i.e hangman ,words ,submit .
There should be an array of words that will be guessed and to choose the word (.random) to the array will be used.
In the functions, when a word will be selected to guess the letters elements will be accessed so the word is guessed.
when the word selected will be same as to all the letters selected . it will show a *winner* .
If any of the letter will not be same in word selected . it will show that letter in web and also one life will reduced for the hangman.
if all lives of hangman is finished it should show the chosen word and *loser*

/project
 ├─ README.md
 └─ sc

# Hangman Details
***Play Game***
To play game, Random Word will already be chosen. You just have to Guess Word one by one , If anything guessed wrong or already guessed it will be displayed on the screen through Functions.


***Here is Link to Surge Link to my Game***

https://my-own-sandbox.surge.sh/


# Operations

## HTML

Html for this Hangman is very simple . Two Html are linked to the game.  It doesn't have complicated things.
* Hang Man (heading)
* Hangman Statue
* Play Button (To move to Second website to PLay )


* Hangman The Game (2nd Html)
* Hangman Statue for Guesses
* Category of Words to Guess
* Word to Guess
* Missing Word
* Input from The User
* Submit and Reset Buttons



## JS

Js includes Variables , Functions and Events
* Variables
Variables are as simple as they come  like words, correctGuess , wrongGuess etc.

* Functions
1. Functions to save Input from the user and choose a random word to guess and compare both random word and user's input.
2. Functions to change Visibility of hangman if Guessed wrong.
3. Functions to Check for Winner and Loser

* Events
  Event Listeners for Submit Button to save the User's Input.
  Event Listener for Reset Button to guess new Word.



## CSS

CSS is just there for a little beauty(Make-Up). Added some Grid and flex display to keep my structure disciplined.
Added Background Image and Gif for my Game to make it User friendly



