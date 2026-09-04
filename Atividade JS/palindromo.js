// 8.     Escreva uma função que recebe uma string e retorna se ela é um palíndromo, ignorando maiúsculas/minúsculas e espaços.

function verificarPalindromo(str) {
    // Remove espaços e converte para minúsculas
    const strFormatada = str.replace(/\s+/g, '').toLowerCase();
    // Verifica se a string é igual à sua reversa
    const isPalindromo = strFormatada === strFormatada.split('').reverse().join('');
    return isPalindromo ? "É um palíndromo" : "Não é um palíndromo";
}

console.log(verificarPalindromo("arara")); // É um palíndromo
console.log(verificarPalindromo("ovo")); // É um palíndromo
console.log(verificarPalindromo("casa")); // Não é um palíndromo