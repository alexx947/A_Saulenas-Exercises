let a = 50;

let dalikliai = [];
let dalikliuSuma = 0;
let lyginiuSuma = 0;

for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
        dalikliai.push(i);
        dalikliuSuma += i;
        if (i % 2 === 0) {
            lyginiuSuma += i;
        };
    };
};

console.log("Visi dalikliai:", dalikliai);
console.log("Dalikliu suma:", dalikliuSuma);
console.log("Lyginiu dalikliu suma:", lyginiuSuma);