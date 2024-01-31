let plytosX = 20 //cm
let plytosY = 10 //cm
let plyta = plytosX*plytosY
let kaina = 0.50
let sienaX = 400 //cm
let sienaY = 300 //cm
let plytuKiekis = sienaX*sienaY/plyta

console.log('Plytu kiekis ' + sienaX*sienaY/plyta + '.','Plytos kaina', (Math.round(plytuKiekis*kaina * 100) / 100).toFixed(2) + '.');