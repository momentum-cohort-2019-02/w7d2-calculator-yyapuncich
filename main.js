'use strict'

// gets all numbers
const numberButton = document.querySelectorAll('.number')

// calc symbols and functions
const clearButton = document.querySelector('.clear')
const equalButton = document.querySelector('.equal')
const decimalButton = document.querySelector('.dot')

// all buttons
const allButtons = document.querySelectorAll('.p')

// blank line
let outputLine = document.querySelector('.blank')

// displays contents  when clicked in blank div
for (let button of allButtons) {
    button.addEventListener('click', function () {
    outputLine.innerText += button.innerText
})
}

// display total
equalButton.addEventListener('click', function () {
    if (isFinite(math.eval(outputLine.innerText))) {
        return outputLine.innerText = math.eval(outputLine.innerText) 
    } else {
        return outputLine.innerText = "Dunno."
    }
})

// clear outputLine
clearButton.addEventListener('click', function () {
    outputLine.innerText = ""
})