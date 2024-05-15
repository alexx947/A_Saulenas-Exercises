function greetings(name, callback) {
    console.log(`Hey` + ' ' + name);
    callback();
}

function callMe() {
    console.log('Bye now!');
}

greetings('Marcus', callMe);