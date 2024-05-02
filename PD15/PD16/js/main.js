function getItem(array) {

    const itemIndex = Math.floor(Math.random() * array.length);
  
    return array[itemIndex];
  
  }
  
  
  const Array = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const Item = getItem(Array);
  
  console.log(Item);