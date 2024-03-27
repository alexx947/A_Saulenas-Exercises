const sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5];
const vasaris = [-16, -14.5, -11, -10.3, -3.5, 0];
const kovas = [-3, -2.5, 0, 5, 9.5, 11.2];

function vidutineTemp(menesioTemp) {
    let suma = 0;
    for (let i = 0; i < menesioTemp.length; i++) {
        suma += menesioTemp[i];
    }
    return suma / menesioTemp.length;
}

const vidutineSausioTemp = vidutineTemp(sausis);
const vidutineVasarioTemp = vidutineTemp(vasaris);
const vidutineKovoTemp = vidutineTemp(kovas);

const bendrasVidurkis = (vidutineSausioTemp + vidutineVasarioTemp + vidutineKovoTemp) / 3;

console.log(`Vidutine sausio temp: ${vidutineSausioTemp.toFixed(2)}.`);
console.log(`Vidutine vasario temp: ${vidutineVasarioTemp.toFixed(2)}.`);
console.log(`Vidutine kovo temp: ${vidutineKovoTemp.toFixed(2)}.`);
console.log(`Bendras matavimu vidurkis: ${bendrasVidurkis.toFixed(2)}.`);