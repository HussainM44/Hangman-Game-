// VARIABLES
let inputValue
let words
let currentWords
let guesses = []
let wrongGuesses = []
let ranW
let displayWords

let messageEl = document.querySelector(".message")

let guessWordEl = document.querySelector(".guessWord")

let missingEl = document.querySelector(".missing")

let myInputEl = document.querySelector(".myInput")

let submitEl = document.querySelector(".submit")

const bodyParts = [
  document.querySelector(".head"),

  document.querySelector(".body"),

  document.querySelector(".armLeft"),

  document.querySelector(".armRight"),

  document.querySelector(".legLeft"),

  document.querySelector(".legRight"),
]

const saveInput = () => {
  guesses.push(myInputEl.value)

  render()
}
const init = () => {
  words = ["ball"]
  bodyParts.forEach((part) => (part.style.display = "none"))
  messageEl.innerText = "Start Guessing"
  currentWords = words[Math.floor(Math.random() * words.length)]

  render()
}

const render = () => {
  updateGuess()
  updateWord()
  checkWinner()

  checkWord()
}

const updateGuess = () => {
  if (!currentWords.includes(myInputEl.value)) {
    wrongGuesses.push(myInputEl.value)
  }
}
const updateWord = () => {
  displayWords = currentWords
    .split("")
    .map((word) => (guesses.includes(word) ? word : "_"))

    .join(" ")

  guessWordEl.innerText = displayWords
}

const checkWinner = () => {
  if (!displayWords.includes("_")) {
    messageEl.innerText = "Winner"
  }
}

const checkWord = (i) => {
  ranW = currentWords
    .split("")
    .map((word, i) => (!word.includes(wrongGuesses[i]) ? wrongGuesses[i] : "_"))
    .join(" ")
  missingEl.innerText = ranW
}

submitEl.addEventListener("click", () => {
  saveInput()
})

init()
