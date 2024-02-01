let kaina = 980;
let discount = 25;
let cash = window.prompt("You have this much $:");


let zDisc = (kaina * discount / 100);

if(cash > zDisc){
    console.log("Dinaru uztenka");
} else{
    console.log("Dinaru neuztenka");
};

console.log("Telefono bendra kaina: " + zDisc);