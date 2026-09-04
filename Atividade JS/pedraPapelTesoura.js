// 7.     Implemente Pedra, Papel e Tesoura: uma função recebe as jogadas de dois jogadores e retorna quem venceu, ou empate. Evite repetir a mesma comparação três vezes.

function pedraPapelTesoura(jogada1, jogada2) {
    const regras = {
        pedra: 'tesoura',
        papel: 'pedra',
        tesoura: 'papel'
    };

    if (jogada1 === jogada2) {
        return "Empate";
    }

    if (regras[jogada1] === jogada2) {
        return "Jogador 1 venceu";
    }

    return "Jogador 2 venceu";
}

console.log(pedraPapelTesoura('pedra', 'tesoura')); // Jogador 1 venceu
console.log(pedraPapelTesoura('tesoura', 'pedra')); // Jogador 2 venceu