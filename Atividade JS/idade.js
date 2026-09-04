// 4.     Dado o ano de nascimento de uma pessoa, calcule a idade e determine, combinando operadores lógicos e de comparação, se ela já pode votar, se o voto é obrigatório e se ela ainda está isenta do serviço militar.

function verificarIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    let podeVotar = idade >= 16;
    let votoObrigatorio = idade >= 18 && idade <= 70;
    let isentaServicoMilitar = idade < 18;

    console.log(`Idade: ${idade} anos`);
    console.log(`Pode votar: ${podeVotar ? 'Sim' : 'Não'}`);
    console.log(`Voto obrigatório: ${votoObrigatorio ? 'Sim' : 'Não'}`);
    console.log(`Isenta do serviço militar: ${isentaServicoMilitar ? 'Sim' : 'Não'}`);
}

verificarIdade(2005); // Idade: 19 anos, Pode votar: Sim, Voto obrigatório: Sim, Isenta do serviço militar: Não