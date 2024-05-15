function getType(variable) {
    return typeof variable;
}

let result1 = getType(20);
let result2 = getType("Hello world!");
let result3 = getType(true);

console.log(result1);
console.log(result2);
console.log(result3);