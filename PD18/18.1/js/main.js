const studentas = {
    name: 'John',
    lastName: 'Doe',
    age: '27',
    fullName: function() {
        return this.name + " " + this.lastName;
    }
};
console.log(studentas.fullName());