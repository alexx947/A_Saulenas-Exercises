const Array1 = [1, 2, 3, 4, 5, 6]; 
const Array2 = [1, 3, 3, 4, 5, 6]; 
  
const difference = 
    Array1.filter((element) => !Array2.includes(element)); 
  
console.log(difference);