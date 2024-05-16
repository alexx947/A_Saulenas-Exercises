const person ={
    firstName: 'John',
    lastName: 'Doe',
    city: 'Fallbrook',
   }
   function printProperties(person){
    for (let key in person){
      console.log (key + ':'+ person[key]);
    }
   }
   printProperties(person)