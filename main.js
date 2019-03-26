const numberButton = document.querySelectorAll('.number')

let outputLine = document.querySelector('.blank')

numberButton.addEventListener('click', function () {
    outputLine.innerHTML.replace(numberButton.innerText)
})