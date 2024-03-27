const tekstas = "JavaScript for all";

const stack = [];

for (let i = 0; i < tekstas.length; i++) {
    stack.push(tekstas[i]);
}

let atvirksciaiTekstas = '';
while (stack.length > 0) {
    atvirksciaiTekstas += stack.pop();
}

console.log(atvirksciaiTekstas);