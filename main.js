const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Nice Try!"),
};

function operate(a, b, operator) {
  // calls the specified operator function and passes the two inputs into that func.
  return operator(a, b);
}

const display = document.querySelector("#display");

let displayValue = "";
let operator;
let firstOp;
let secondOp;
let final;

const operatorButton = document.querySelector("#operator-button");
const clearButton = document.querySelector("#clear-button");
const backButton = document.querySelector("#back-button");

function updateDisplay(int) {
  displayValue += int;
  display.textContent = displayValue;
}

[
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
].map((number) =>
  document
    .querySelector(`#${number}-button`)
    .addEventListener("click", (el) => updateDisplay(el.target.innerHTML))
);

[
  { elementName: "addition", operator: operations.add },
  { elementName: "subtraction", operator: operations.subtract },
  { elementName: "multiplication", operator: operations.multiply },
  { elementName: "division", operator: operations.divide },
].map((x) =>
  document
    .querySelector(`#${x.elementName}-button`)
    .addEventListener("click", () => {
      firstOp = parseInt(displayValue, 10);
      operator = x.operator;
      displayValue = "";
      display.textContent = "";
    })
);

operatorButton.addEventListener("click", () => {
  secondOp = parseInt(displayValue, 10);
  const answer = operate(firstOp, secondOp, operator);
  displayValue = "";
  final = Math.round((answer + Number.EPSILON) * 100) / 100;
  if (answer === "Nice Try") {
    updateDisplay(answer);
  }
  updateDisplay(final);
});

backButton.addEventListener("click", () => {
  const arr = Array.from(displayValue);
  arr.pop();
  const newDisplayValue = arr.join("");
  display.textContent = newDisplayValue;
  displayValue = newDisplayValue;
});

clearButton.addEventListener("click", () => {
  display.textContent = "";
  displayValue = "";
});
