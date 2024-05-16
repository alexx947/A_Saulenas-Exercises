function newFunction() {
    const newPerson = firstPerson;
    return newPerson;
}

const firstPerson = {
    firstName:"John", 
    lastName:"Doe", 
    age: 27,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(firstPerson);

const secondPerson = newFunction();
secondPerson.firstName = "Jane";
secondPerson.age = 25;
console.log(secondPerson);