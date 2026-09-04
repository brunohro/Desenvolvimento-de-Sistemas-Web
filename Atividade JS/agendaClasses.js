// 17.     Escolha um dos exercícios de array de objetos que você já resolveu (agenda de contatos, estoque ou carrinho de compras) e reescreva-o usando uma classe, com os dados como propriedades de instância e as operações como métodos. Compare as duas versões: o que ficou mais organizado?

class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(nome, telefone, categoria) {
        this.contatos.push({ nome, telefone, categoria });
    }

    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }

    listarContatosPorCategoria(categoria) {
        return this.contatos.filter(contato => contato.categoria === categoria);
    }

    listarTodosContatos() {
        return this.contatos;
    }
}

let minhaAgenda = new Agenda();
minhaAgenda.adicionarContato("Bruno", "1234-5678", "Amigos");
minhaAgenda.adicionarContato("Henrique", "9876-5432", "Trabalho");
minhaAgenda.adicionarContato("Rodrigues", "4567-8901", "Família");
minhaAgenda.adicionarContato("Oliveira", "4567-8991", "Família");


console.log(minhaAgenda.listarTodosContatos());
minhaAgenda.removerContato("Rodrigues");
console.log(minhaAgenda.listarTodosContatos());

// Utilizando classes o código ficou mais organizado, pois encapsulamos os dados e métodos relacionados à agenda em uma única estrutura (classe). Isso facilita a manutenção e a compreensão do código, além de permitir a criação de múltiplas instâncias da agenda.