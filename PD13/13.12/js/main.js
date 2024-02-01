let deze = 400;
let talpa = 70;

if(deze > talpa){
    let k = 0;
    do {
        deze -= talpa;
        k = k + 1;
    } while (deze >= 0);
    
    console.log(`Sunkvezimis nuvaziuos ${k} kartu(s) kad nuveztu visas dezes.`);
} else if(deze < talpa){
    console.log(`Sunkvezimis nuvaziuos 1 karta kad nuveztu visas dezes.`)
}