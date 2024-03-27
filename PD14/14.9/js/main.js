let lasteles = 1;

const laikoInterval = 3;

const laikoTarpai = [3, 6, 9, 12, 15, 18, 21, 24];

for (let laikas = 0; laikas <= 24; laikas++) {
    if (laikoTarpai.includes(laikas)) {
        console.log(`Po ${laikas} valandu bus ${lasteles} lasteles`);
    }
    if (laikas % laikoInterval === 0) {
        lasteles *= 2;
    }
}