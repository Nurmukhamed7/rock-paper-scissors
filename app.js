const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const resultDisplay = document.querySelector('#result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

// Generate user choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// Generate computer choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    } 
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// Generate Result
function getResult() {
    if (computerChoice === userChoice) {
        result = 'DRAW'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You WIN'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Computer WIN'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You WIN'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Computer WIN'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You WIN'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Computer WIN'
    }
    return resultDisplay.innerHTML = result

}
