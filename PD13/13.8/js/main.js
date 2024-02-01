let a = window.prompt("Write the first number");
let b = window.prompt("Write the second number");
let c = window.prompt("Write the third number");

if(a<b && b<c && c>a){
    console.log(`${a} < ${b} < ${c}`);
}

else if(b>a && a>c && c<b){
    console.log(`${b} > ${a} > ${c}`);
}

else{
    console.log("error.");
}