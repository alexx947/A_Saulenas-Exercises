const array = [1, 3, 5];

console.log(array);

const index = array.indexOf(3);
if (index > -1) { 
  array.splice(index, 1); 
}

console.log(array); 