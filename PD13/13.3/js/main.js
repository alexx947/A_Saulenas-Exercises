let x = 2;
let y = -2;
let z = 4;

if (x < y && y < z && z > x){
    console.log("Rezultatas: "+x+", "+y+", "+z)
}
else if(x < y && y > z && z > x){
    console.log("Rezultatas: "+x+", "+z+", "+y)
}

else if(x > y && y > z && z < x){
    console.log("Rezultatas: "+z+", "+y+", "+x)
}
else if(x < y && y > z && z < x){
    console.log("Rezultatas: "+z+", "+x+", "+y)
}

else if(x > y && y < z && z > x){
    console.log("Rezultatas: "+y+", "+x+", "+z)
}
else if(x < y && y < z && z < x){
    console.log("Rezultatas: "+y+", "+z+", "+x)
}