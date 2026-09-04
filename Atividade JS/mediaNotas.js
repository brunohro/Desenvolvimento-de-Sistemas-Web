// 9.     Escreva uma função que recebe um array de notas de uma turma e retorna um objeto com a média, a maior e a menor nota.

function calcularNotas(notas) {
    let soma = 0;

    for(let nota of notas) {
        soma += nota;
    }

    let media = soma / notas.length;

    let maiorNota = Math.max(...notas);
    let menorNota = Math.min(...notas);

    return {
        media: media.toFixed(2),
        maiorNota: maiorNota,
        menorNota: menorNota
    };
}

let notas = [7, 8.5, 6, 9, 10, 5.5];
console.log(calcularNotas(notas));