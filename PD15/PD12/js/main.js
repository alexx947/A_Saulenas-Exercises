function getUnion(array1, array2) {
    return Array.from(new Set([...array1, ...array2]));
  }
  
  const Array1 = [1, 2, 3, 4, 5];
  const Array2 = [4, 5, 6, 7, 8];
  const union = getUnion(Array1, Array2);
  console.log(union);