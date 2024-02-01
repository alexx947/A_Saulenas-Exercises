const p1 = 16; 
const p2 = 12; 
const p = 35; 
const s = 29; 

let kiekis1 = 0;
let kiekis2 = 0;
let suma = 0;


do {
    kiekis1++;
    kiekis2++;
    suma = kiekis1 * p1 + kiekis2 * p2;
} while (suma <= s);

console.log('Pirkejui uzteks pinigu isigyti abi prekes.');
console.log('Is viso prekiu bus:', kiekis1 + kiekis2);
console.log('Is viso kainuos:', suma, 'euru');