// 10.     Escreva uma função que calcule o n-ésimo termo da sequência de Fibonacci (iterativa ou recursiva, à sua escolha).

function termoFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

console.log(termoFibonacci(5)); // 5
console.log(termoFibonacci(10)); // 55