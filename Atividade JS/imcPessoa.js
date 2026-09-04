// 6.     Escreva uma função que recebe peso e altura e retorna a classificação de IMC da pessoa nas faixas usuais (abaixo do peso, normal, sobrepeso, obesidade).

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }  

    return {
        imc: imc.toFixed(2),
        classificacao: classificacao
    };
}

console.log(calcularIMC(70, 1.75)); // { imc: '22.86', classificacao: 'Normal' }