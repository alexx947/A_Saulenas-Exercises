let a = 96;
let z = 103;

let k = 0;

for (let number = a; number <= z; number++) {
    let numberText = number.toString();
    k += numberText.length;
};

console.log(`ploksteliu reikes = ${k}`);