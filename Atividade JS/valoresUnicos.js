// Array somente com valores únicos

function valoresUnicos(numeros) {

    return [...new Set(numeros)];
}

let numeros = [1, 2, 2, 3, 4, 4, 5, 5, 5];

console.log(valoresUnicos(numeros));