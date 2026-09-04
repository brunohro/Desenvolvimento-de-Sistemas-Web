// 14.     Modele uma classe Produto com nome, preço e quantidade em estoque. Adicione métodos para aplicar um desconto percentual e para informar se o produto está disponível (quantidade > 0). Instancie ao menos três produtos e demonstre os métodos.

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }

    estaDisponivel() {
        return this.quantidade > 0;
    }
}

let produto1 = new Produto("Produto A", 100, 10);
let produto2 = new Produto("Produto B", 200, 0);
let produto3 = new Produto("Produto C", 150, 5);


produto1.aplicarDesconto(10);
produto2.aplicarDesconto(20);

console.log(produto1);
console.log(produto2);

console.log(`O ${produto1.nome} está disponível? ${produto1.estaDisponivel()}`);
console.log(`O ${produto2.nome} está disponível? ${produto2.estaDisponivel()}`);
