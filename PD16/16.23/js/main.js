function addNumber(a, b) {
    return a + b;
}

function subtractNumber(a, b) {
    return a - b;
}

function multiplyNumber(a, b) {
    return a * b;
}

function divideNumber(a, b) {
    if (b < 0) {
        window.alert("Skaicius per mazas");
    } else {
        return a / b;
    }
}

const additionNumber = addNumber(1, 3);
const substract = subtractNumber(20, 10);
const multiply = multiplyNumber(40, 10);
const divisions = divideNumber(60, 6);

console.log(additionNumber);
console.log(substract);
console.log(multiply);
console.log(divisions);