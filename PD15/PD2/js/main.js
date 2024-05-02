const numberArray = [1, 2, 3, 4];
const copiedArray = [];

for (let i = 0; i < numberArray.length; i++) {
    copiedArray[i] = numberArray[i];
}
console.log(copiedArray);
console.log(numberArray.length);