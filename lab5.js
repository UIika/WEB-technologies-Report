//punkt 4

function processArray() {
    const arrayInput = document.getElementById("arrayInput").value;
    let arrayA = arrayInput.split(',').map(num => parseFloat(num.trim()));

    if (arrayA.some(isNaN)) {
        alert("Переконайтеся, що всі введені значення є числами та розділені комами.");
        return;
    }

    document.getElementById("inputArrayA").textContent = arrayA.join(", ");

    const maxElement = Math.max(...arrayA);
    const arrayB = arrayA.map(a => maxElement * a);

    document.getElementById("outputArrayB").textContent = arrayB.join(", ");

    insertionSortDescending(arrayB);
    document.getElementById("sortedArrayB").textContent = arrayB.join(", ");
}

function insertionSortDescending(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] < key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}


//punkt 6

const display = document.getElementById('display');

function inputDigit(digit) {
    display.innerText += digit;
}

function clearDisplay() {
    display.innerText = '';
}

function calculate(operation) {
    if (operation === '√') {
        const currentValue = parseFloat(display.innerText);
        display.innerText = Math.sqrt(currentValue);
    } else {
        display.innerText += operation;
    }
}

function calculateResult() {
    let expression = display.innerText;

    expression = expression.replace(/\^/g, '**');
    
    try {
        const result = eval(expression);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

