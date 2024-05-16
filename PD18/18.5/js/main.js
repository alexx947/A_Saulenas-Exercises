const startObject = {
    String1: 5,
    String2: 20,
    String3: 7,
    String4: 40
};
function unlockedObjects(object) {
    const newObject = {};

    for (const String in object) {
        if (object[String] > 10) {
            newObject[String] = object[String];
        }
    }

    return newObject;
}


const newObject = unlockedObjects(startObject);
console.log(newObject);