function add(a, b) { // adds the two inputs.
    return a + b;
}
function subtract(a, b) { // subtracts b from a
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

function operate(a, b, operator) { //calls the specified operator function and passes the two inputs into that func.
    return operator(a,b);
}

const display = document.querySelector("#display");
let displayValue = "";
let operator;
const one = document.querySelector("#one-button");
const two = document.querySelector("#two-button");
const three = document.querySelector("#three-button");
const four = document.querySelector("#four-button");
const five = document.querySelector("#five-button");
const six = document.querySelector("#six-button");
const seven = document.querySelector("#seven-button");
const eight = document.querySelector("#eight-button");
const nine = document.querySelector("#nine-button");
const zero = document.querySelector("#zero-button");
const additionButton = document.querySelector("#addition-button");
const subtractionButton = document.querySelector("#subtraction-button");
const multiplicationButton = document.querySelector("#multiplication-button");
const divisionButton = document.querySelector("#division-button");
const operatorButton = document.querySelector("#operator-button");
const clearButton = document.querySelector("#clear-button");
const backButton = document.querySelector("#back-button");
clearButton.addEventListener("click", () => {
    display.textContent = "";
    displayValue = "";
});

function updateDisplay(int) {
    displayValue += int

    return display.textContent = displayValue;
}
one.addEventListener("click", () => {
    updateDisplay(1);
});
two.addEventListener("click", () => {
    updateDisplay(2);
});
three.addEventListener("click", () => {
    updateDisplay(3);
});
four.addEventListener("click", () => {
    updateDisplay(4);
});
five.addEventListener("click", () => {
    updateDisplay(5);
});
six.addEventListener("click", () => {
    updateDisplay(6);
});
seven.addEventListener("click", () => {
    updateDisplay(7);
});
eight.addEventListener("click", () => {
    updateDisplay(8);
});
nine.addEventListener("click", () => {
    updateDisplay(9);
});
zero.addEventListener("click", () => {
    updateDisplay(0);
});
additionButton.addEventListener("click", () => {
    firstOp = parseInt(displayValue);
    operator = add;
    displayValue = "";
    display.textContent = "";
})
operatorButton.addEventListener("click", () =>{
    secondOp = parseInt(displayValue);
   const answer = operate(firstOp, secondOp, operator);
   displayValue = "";
   updateDisplay(answer);
})




