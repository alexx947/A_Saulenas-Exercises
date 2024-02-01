const a = 55;
const b = 12;

let yraDaliklis = false;

for (let daliklis = 1; daliklis <= b; daliklis++) {
    if (a % daliklis === 0) {
        yraDaliklis = true;
    }
}

if (yraDaliklis) {
    console.log(`${a} yra ${b} daliklis.`);
} else {
    console.log(`${a} nėra ${b} daliklis.`);
}