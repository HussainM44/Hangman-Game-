// VARIABLES //
let words
let currentWords
let pin
let guesses
let wrongGuesses = []
let correctGuess = []

let displayWords

let messageEl = document.querySelector(".message")

let guessWordEl = document.querySelector(".guessWord")

let missingEl = document.querySelector(".missing")

let myInputEl = document.querySelector(".myInput")

let submitEl = document.querySelector(".submit")

let resetEl = document.querySelector(".reset")

const bodyParts = [
  document.querySelector(".rope"),

  document.querySelector(".head"),

  document.querySelector(".body"),

  document.querySelector(".armLeft"),

  document.querySelector(".armRight"),

  document.querySelector(".legLeft"),

  document.querySelector(".legRight"),
]

// FUNCTIONS //
const saveInput = () => {
  if (myInputEl.value.length != 1) {
    messageEl.innerText = "Guess Single Letter Only"
  } else {
    guesses = myInputEl.value.toLocaleLowerCase()
  }

  render()
}
const init = () => {
  words = [
    "Cat",
    "Dog",
    "Horse",
    "Lion",
    "Tiger",
    "Bear",
    "Wolf",
    "Deer",
    "Moose",
    "Fox",
    "Zebra",
    "Goat",
    "Sheep",
    "Pig",
    "Cow",
    "Yak",
    "Bat",
    "Rat",
    "Mouse",
    "Whale",
    "Shark",
    "Dolphin",
    "Seal",
    "Otter",
    "Crab",
    "Squid",
    "Lobster",
    "Snail",
    "Clam",
    "Eagle",
    "Hawk",
    "Falcon",
    "Owl",
    "Duck",
    "Swan",
    "Crow",
    "Raven",
    "Parrot",
    "Finch",
    "Toad",
    "Frog",
    "Gecko",
    "Lizard",
    "Snake",
    "Ant",
    "Bee",
    "Wasp",
  ]
  bodyParts.forEach((part) => (part.style.display = "none"))
  messageEl.innerText = "Start Guessing"

  pin = words[Math.floor(Math.random() * words.length)]
  currentWords = pin.toLocaleLowerCase()
  console.log(currentWords)
  render()
}

const render = () => {
  updateGuess()
  updateWord()
  checkWinner()
  displayBody()
}

const updateGuess = () => {
  if (currentWords.includes(guesses)) {
    correctGuess.push(guesses)
  } else {
    wrongGuesses.push(guesses)
  }
}

const updateWord = () => {
  displayWords = currentWords
    .split("")
    .map((word) => (correctGuess.includes(word) ? word : "_"))

    .join(" ")

  guessWordEl.innerText = displayWords

  missingEl.innerText = wrongGuesses.join(" ")
}

const checkWinner = () => {
  if (!displayWords.includes("_")) {
    messageEl.innerText = "Winner"
  }
}

const displayBody = () => {
  for (i = 1; i <= wrongGuesses.length; i++) {
    if (wrongGuesses.length == i) {
      bodyParts[i - 1].style.display = "block"
    }
  }
  if (wrongGuesses.length == 6) {
    messageEl.innerText = "Lost"
  }
}

// EVENTS //

submitEl.addEventListener("click", () => {
  saveInput()
})

resetEl.addEventListener("click", () => {
  init()
})

init()
