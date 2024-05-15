let returnBiggerNumber = (arr, num) => {
    const index = arr.findIndex(element => element > num);
    if (index !== -1) {
        return arr.slice(index);
    } else {
        return arr;
    }
};

console.log(returnBiggerNumber([12, 73, 4, 98, 15, 68], 15));
console.log(returnBiggerNumber([32, 5, 76, 21, 40], 53));