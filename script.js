// VARIABLES
let inputValue
let words
let currentWords
let guesses = []
let wrongGuesses = []
let correctGuess = []
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
  words = [
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Russia",
    "China",
    "Japan",
    "South Korea",
    "India",
    "Australia",
    "New Zealand",
    "South Africa",
    "Egypt",
    "Nigeria",
    "Kenya",
    "Turkey",
    "Saudi Arabia",
    "United Arab Emirates",
    "Israel",
    "Indonesia",
    "Thailand",
    "Vietnam",
    "Philippines",
    "Malaysia",
    "Singapore",
    "Pakistan",
    "Bangladesh",
    "Ukraine",
    "Poland",
    "Netherlands",
    "Sweden",
    "Norway",
    "Finland",
    "Denmark",
    "Switzerland",
    "Austria",
    "Belgium",
    "Portugal",
    "Greece",
    "Colombia",
    "Peru",
    "Chile",
    "Venezuela",
    "Morocco",
  ]
  bodyParts.forEach((part) => (part.style.display = "none"))
  messageEl.innerText = "Start Guessing"
  currentWords = words[Math.floor(Math.random() * words.length)]

  render()
}

const render = () => {
  updateGuess()
  updateWord()
  checkWinner()
  displayBody()
}

const updateGuess = () => {
  if (currentWords.includes(myInputEl.value)) {
    correctGuess.push(myInputEl.value)
  } else {
    wrongGuesses.push(myInputEl.value)
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
  console.log(wrongGuesses.length)
  for (i = 1; i <= wrongGuesses.length; i++) {
    if (wrongGuesses.length == i) {
      bodyParts[i - 1].style.display = "block"
    }
  }
  if (wrongGuesses.length == 6) {
    messageEl.innerText = "Lost"
  }
}

submitEl.addEventListener("click", () => {
  saveInput()
})

init()
