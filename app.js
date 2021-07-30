// UI elements

const displayUI = document.querySelector('#display');
const digitsUI = document.querySelector('#digits');
const operationsUI = document.querySelector('#operations');


// App elements

let firstNum, secondNum, result;
let mathOperator = '';


// Event listeners

digitsUI.addEventListener('mouseup', pressDigit);
operationsUI.addEventListener('mouseup', pressOperation);


// Event handlers

function pressDigit(e) {
  if (e.target !== digitsUI) {
    displayUI.textContent += e.target.value;
  }
}

function pressOperation(e) {
  if (e.target !== operationsUI) {

    switch (e.target.id) {
      case 'clear':
        displayUI.textContent = '';
        break;
      case 'add':
        if (mathOperator === '') {
          storeItems(displayUI.textContent, e.target.value)
          displayUI.textContent += '+';
        } else {
          storeSecondNum (displayUI.textContent)
          result = operate(mathOperator, firstNum, secondNum);
          displayUI.textContent = result;
          storeItems(result, e.target.value)
          displayUI.textContent += '+';
        }
        break;
      case '-':
        displayUI.textContent += '-';
        break;
      case '*':
        displayUI.textContent += '*';
        break;
      case '/':
        displayUI.textContent += '/';
        break;
        default:
          displayUI.textContent += 'ERROR';
        break;
    }
  }
}


// Variable storing

// Function that stores first number and operator
function storeItems(number, operator) {
  firstNum = parseInt(number);
  mathOperator = operator;
}

function storeSecondNum (displayValue) {
  let arr = displayValue.split(mathOperator);
  secondNum = parseInt(arr[1]);
}


// Math functions

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      break;
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

