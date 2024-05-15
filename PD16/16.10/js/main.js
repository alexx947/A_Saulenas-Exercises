function capitalize(sentence) {
    const word = sentence.split(' ');

    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substr(1).toLowerCase();
    }
    return word.join(' ');
}

const result = capitalize('mary, jane, adam, steve');
console.log(result);