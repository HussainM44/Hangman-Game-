// VARIABLES //
let words
let category
let currentWords
let pin
let guesses
let wrongGuesses = []
let correctGuess = []
let winGame
let loseGame
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

  guesses
  wrongGuesses = []
  correctGuess = []
  winGame = false
  loseGame = false
  guessWordEl.style.color = "white"
  messageEl.style.color = "white"
  bodyParts.forEach((part) => (part.style.display = "none"))
  myInputEl.value = ""
  messageEl.innerText = "Lets Guess !!!"

  pin = words[Math.floor(Math.random() * words.length)]
  currentWords = pin.toLocaleLowerCase()

  saveInput()
}

const saveInput = () => {
  messageEl.innerText = "Lets Guess !!!"
  if (myInputEl.value != "" && myInputEl.value.length != 1) {
    messageEl.innerText = "😤 Guess Single Letter Only 😤"
    return
  } else {
    guesses = myInputEl.value.toLocaleLowerCase()
  }

  render()
}

const render = () => {
  updateGuess()
  updateWord()
  checkWinner()
  gameOver()
  displayBody()
}

const updateGuess = () => {
  if (correctGuess.includes(guesses) || wrongGuesses.includes(guesses)) {
    messageEl.innerText = "⛔⛔ Already Guessed !! Try Again ⛔⛔ "
  } else if (currentWords.includes(guesses)) {
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
    messageEl.innerText = "🎉🎉 Congrats !! You Genius 🎉🎉"
    winGame = true
  }
}

const displayBody = () => {
  let i = 0
  while (i <= 6) {
    if (wrongGuesses.length == i) {
      bodyParts[i].style.display = "block"
    }
    i++
  }

  if (wrongGuesses.length > 5) {
    messageEl.innerText = "LOSER !!!👎👎"
    messageEl.style.color = "red"
    guessWordEl.innerText = currentWords
    guessWordEl.style.color = "green"
    loseGame = true
  }
}

gameOver = () => {
  if (winGame || loseGame) {
    submitEl.disabled = true
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
