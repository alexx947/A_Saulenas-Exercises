let number = 42;
const numbers = [];
let numbersSum = 0;
for (let i = 1; i <= 42; i++) {
  if (number % i == 0) {
    numbers.push(i);
    console.log(numbers);

  }
}
console.log(numbers);
console.log(numbersSum);