// VARIABLES
let inputValue
let words
let currentWords
let correctGuesses = []

let displayWords

let messageEl = document.querySelector(".message")

let guessWordEl = document.querySelector(".guessWord")

let wrongWordEl = document.querySelector(".wrongWord")

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
}

const updateWord = () => {
  currentWords = words[Math.floor(Math.random() * words.length)]
  displayWords = currentWords
    .split("")
    .map((word) => (correctGuesses.includes(word) ? word : "_"))
    .join(" ")
  guessWordEl.innerText = displayWords
}

submitEl.addEventListener("click", () => {
  saveInput()
})

init()
