let Array1 = [1, 2, 3, 4, 5, 6, 7]; 
let Array2 = [2, 4, 5, 7, 8];
let Array = [...Array1, ...Array2];
let mergedArray = [...new Set(Array)]
console.log(mergedArray);