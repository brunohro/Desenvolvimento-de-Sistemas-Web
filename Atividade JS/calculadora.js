// 5.     Implemente uma calculadora: uma função recebe dois números e um operador ('+', '-', '*', '/') e retorna o resultado. Trate operador inválido e divisão por zero. Use switch/case.


function calculadora(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Erro: Divisão por zero não é permitida.";
            }
            return num1 / num2;
        default:
            return "Erro: Operador inválido.";
    }
}


console.log(calculadora(10, 5, '+')); // 15
console.log(calculadora(10, 5, '-')); // 5
console.log(calculadora(10, 5, '*')); // 50
console.log(calculadora(10, 5, '/')); // 2
console.log(calculadora(10, 0, '/')); // Erro: Divisão por zero não é permitida.
console.log(calculadora(10, 5, '%')); // Erro: Operador inválido.