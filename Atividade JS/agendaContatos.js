// 13.     Modele uma agenda de contatos (array de objetos com nome, telefone e categoria) e escreva funções para adicionar um contato, remover pelo nome e listar os contatos de uma categoria.
// Dado um array de números com valores repetidos, escreva uma função que retorna um novo array só com os valores únicos


let agenda = [
    { nome: "Bruno", telefone: "1234-5678", categoria: "Amigos" },
    { nome: "Henrique", telefone: "9876-5432", categoria: "Trabalho" },
    { nome: "Rodrigues", telefone: "4567-8901", categoria: "Família" },
    { nome: "Oliveira", telefone: "4567-8991", categoria: "Família" }
];

function adicionarContato(nome, telefone, categoria) {
    agenda.push({ nome, telefone, categoria });
}

function removerContato(nome) {
    agenda = agenda.filter(contato => contato.nome !== nome);
}

function listarContatosPorCategoria(categoria) {
    return agenda.filter(contato => contato.categoria === categoria);
}

adicionarContato("BH", "1111-2222", "Amigos");

console.log(agenda)
removerContato("Rodrigues");
console.log(agenda)
console.log(listarContatosPorCategoria("Amigos"));

