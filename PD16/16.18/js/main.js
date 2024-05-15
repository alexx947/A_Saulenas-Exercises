function uniqueLetters(text) {
    let unique = "";
    for (let i = 0; i < text.length; i++) {
        if (!unique.includes(text[i])) {
            unique += text[i];
        }
    }
    return unique.split('').sort().join('');
}

console.log(uniqueLetters("The quick brown fox jumps over the lazy dog"))
console.log(uniqueLetters("The slow red panda jumps over the blind cat"))