// VARIABLES
let inputValue
let words
let currentWords
let correctGuesses = []
let wrongGuesses = []

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
  correctGuesses.push(myInputEl.value)

  render()
}
const init = () => {
  words = ["ball"]
  bodyParts.forEach((part) => (part.style.display = "none"))
  messageEl.innerText = "Start Guessing"
  render()
}

const render = () => {
  updateWord()
  checkWinner()
  checkWord()
}

const updateWord = () => {
  currentWords = words[Math.floor(Math.random() * words.length)]
  displayWords = currentWords
    .split("")
    .map((word) => (correctGuesses.includes(word) ? word : "_"))
    .join("")
  guessWordEl.innerText = displayWords
}

const checkWinner = () => {
  if (!displayWords.includes("_")) {
    messageEl.innerText = "Winner"
  }
}

const checkWord = () => {
  const ranWord = currentWords.split("")
  correctGuesses.map((word) => {
    if (!word.includes(ranWord)) {
      wrongGuesses.push(word)
      missingEl.innerText = wrongGuesses
    }
    console.log(wrongGuesses)
  })
}

submitEl.addEventListener("click", () => {
  saveInput()
})

init()
