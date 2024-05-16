function firstFunction() {
    let count = 0;
    for (let x in firstPerson) {
        if (firstPerson[x] == secondPerson[x]) {
            count++;
        }
    }
    if (count == 3) {
        console.log("vienodi")
    } else {
        console.log("nevienodi")
    }
}

const firstPerson = {
    firstName:"John", 
    lastName:"Doe", 
    age: 27,
};

const secondPerson = {
    firstName:"Leonid", 
    lastName:"Brezhnev", 
    age: 58,
};

firstFunction();