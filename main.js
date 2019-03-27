'use strict'
// gets all numbers
const numberButton = document.querySelectorAll('.number')

// const oneButton = document.querySelector('.one')
// const twoButton = document.querySelector('.two')
// const threeButton = document.querySelector('.three')
// const fourButton = document.querySelector('.four')
// const fiveButton = document.querySelector('.five')
// const sixButton = document.querySelector('.six')
// const sevenButton = document.querySelector('.seven')
// const eightButton = document.querySelector('.eight')
// const nineButton = document.querySelector('.nine')
// const zeroButton = document.querySelector('.zero')

// calc symbols and functions
const clearButton = document.querySelector('.clear')
const equalButton = document.querySelector('.equal')
const decimalButton = document.querySelector('.dot')

// operands all
const allButtons = document.querySelectorAll('.p')

// const divideButton = document.querySelector('.divide')
// const multipyButton = document.querySelector('.multipy')
// const subtractButton = document.querySelector('.subtract')
// const addButton = document.querySelector('.add')

// blank line
let outputLine = document.querySelector('.blank')

// displays contents  when clicked in blank div

for (let button of allButtons) {
    button.addEventListener('click', function () {
    outputLine.innerText += button.innerText
})
}

// let total = eval(out)
equalButton.addEventListener('click', function () {
    return outputLine.innerText = (eval(outputLine.innerText))
})

// use eval or math.eval for the math