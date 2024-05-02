function test(arrayNumbers) 
 {
  return arrayNumbers.sort((x,y) => y - x)[arrayNumbers.length - 4]
}

numbers = [1, 4, 7, 8, 11]
console.log("Skaicius: "+test(numbers));