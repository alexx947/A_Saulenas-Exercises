let charArray = ["a", "b", "c", "d", "e"]
let searchChar = "a";
let counter = 0;
for(let i = 0; i< charArray.length; i++){
    if (charArray [i] == searchChar){
        counter++;
    }
}
console.log(counter);