// Variables
let guessWords
let wordContainer
let winner
let inputValue
let currentWord

const saveInput = () => {
  inputValue = myWordEl.value
  render()
}

const questionEl = document.querySelector(".question")
const missingEl = document.querySelector(".missing")
const myWordEl = document.querySelector(".myInput")
const messageEl = document.querySelector(".message")
const submitEl = document.querySelector(".submit")
const resetEl = document.querySelector(".reset")

// Functions

const init = () => {
  guessWords = [
    "ball",
    "tree",
    "fish",
    "book",
    "jump",
    "hand",
    "ring",
    "duck",
    "mask",
    "glow",
    "fork",
    "pond",
    "wind",
    "bark",
    "quiz",
    "grub",
    "hazy",
    "knob",
    "zest",
    "wisp",
    "lynx",
    "jinx",
    "vane",
    "kite",
    "wave",
    "snow",
    "salt",
    "trap",
    "lamp",
    "frog",
  ]

  winner = false

  const updateQuestion = () => {
    currentWord = guessWords[Math.floor(Math.random() * guessWords.length)]
    questionEl.innerText = currentWord
  }



// Events

// Last
init()
