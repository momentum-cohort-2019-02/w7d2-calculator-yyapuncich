'use strict'
// gets all numbers
const numberButton = document.querySelectorAll('.number')
console.log(numberButton)

const oneButton = document.querySelector('.one')
const twoButton = document.querySelector('.two')
const threeButton = document.querySelector('.three')
const fourButton = document.querySelector('.four')
const fiveButton = document.querySelector('.five')
const sixButton = document.querySelector('.six')
const sevenButton = document.querySelector('.seven')
const eightButton = document.querySelector('.eight')
const nineButton = document.querySelector('.nine')
const zeroButton = document.querySelector('.zero')
// blank line
let outputLine = document.querySelector('.blank')

// displays number when clicked in blank div
for (let number of numberButton) {
    number.addEventListener('click', function () {
    outputLine.innerText += number.innerText
})
}

// use eval or math.eval for the math