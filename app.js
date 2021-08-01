// UI elements

const displayUI = document.querySelector('#display');
const digitsUI = document.querySelector('#digits');
const operationsUI = document.querySelector('#operations');


// App variables

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
        mathOperator = '';
        displayUI.textContent = '';
        break;
      case 'add':
        process();
        break;
      case 'subtract':
        process();
        break;
      case 'multiply':
        process();
        break;
      case 'divide':
        process();
        break;
      case 'equals':
        process();
        break;
      default:
        displayUI.textContent = 'ERROR';
        break;
    }
  }

  // Function that evaluates if there is an active math operation and runs functions accordingly
  function process() {

    if (mathOperator === '') {
      storeItems(displayUI.textContent, e.target.value)
    } else if (!displayUI.textContent[displayUI.textContent.length - 1].match(/\w/)) {
      replaceMathOperator(e.target.value)
    } else {
      storeSecondNum(displayUI.textContent)
      if (mathOperator === '/' && parseInt(secondNum) == 0) {
        displayUI.textContent = 'ERROR -> /0';
      } else {
        result = operate(mathOperator, firstNum, secondNum);
        displayUI.textContent = result;
        storeItems(result, e.target.value)
      }
    }
  }
}


// Variable storing and display editing

// Function that stores first number and operator
function storeItems(number, operator) {
  firstNum = parseInt(number);
  if (operator === '=') {
    mathOperator = '';
  } else {
    mathOperator = operator;
    displayUI.textContent += operator;
  }
}

function replaceMathOperator(newOperator) {
  let text = displayUI.textContent.replace(mathOperator, newOperator);
  displayUI.textContent = text;
  mathOperator = newOperator;
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

