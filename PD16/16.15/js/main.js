function secondSmallestLargest(array) {
    array.sort(function (a, b) {
        return a - b;
    });

    return [array[1], array[array.length - 2]];
}

console.log(secondSmallestLargest([17, 125, 48, 91, 30]));