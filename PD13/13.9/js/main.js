let a = 10;
let b = 50;
let c = 30;
let d = 150;

let telpa = false;

for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        let plotis = a - i * 2;
        let ilgis = b - j * 2;

        if (plotis >= c && ilgis >= d) {
            telpa = true;
            break;
        }
    }
    if (telpa) {
        break;
    }
}

if (telpa) {
    console.log('Atvirukas tilps i vokeli');
} else {
    console.log('Atvirukas netilps i vokeli');
}