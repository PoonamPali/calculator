let inputDisplay = document.getElementById('inputDisplay');
let resultDisplay = document.getElementById('resultDisplay');
let currentInput = '0';
let operator = null;
let previousInput = null;

function appendNumber(number) {
    if (currentInput === '0' || operator === '=') {
        currentInput = number.toString();
        operator = null;
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function clearEntry() {
    currentInput = '0';
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    inputDisplay.innerText = '0';
    resultDisplay.innerText = '';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    updateDisplay();
}

function toggleSign() {
    if (currentInput !== '0') {
        currentInput = (parseFloat(currentInput) * -1).toString();
    }
    updateDisplay();
}

function operate(op) {
    if (operator && previousInput !== null) {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
}

function calculate() {
    if (operator && previousInput !== null) {
        let result;
        let prev = parseFloat(previousInput);
        let curr = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '=';
        resultDisplay.innerText = currentInput;
        updateDisplay();
    }
}

function updateDisplay() {
    if (operator && previousInput !== null) {
        inputDisplay.innerText = previousInput + ' ' + operator + ' ' + currentInput;
    } else {
        inputDisplay.innerText = currentInput;
    }
}


