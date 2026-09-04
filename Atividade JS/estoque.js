// 12.     Dado um array de produtos em estoque (nome, preço, quantidade), escreva funções que calculem o valor total do estoque, encontrem o produto mais caro e listem os produtos com quantidade abaixo de um mínimo informado.


let produtos = [
    { nome: "Produto A", preco: 10, quantidade: 5 },
    { nome: "Produto B", preco: 20, quantidade: 2 },
    { nome: "Produto C", preco: 15, quantidade: 8 },
    { nome: "Produto D", preco: 30, quantidade: 1 }
];

function valorTotalEstoque(produtos) {
    let total = 0;
    for (let produto of produtos) {
        total += produto.preco * produto.quantidade;
    }
    return total;
}

function produtoMaisCaro(produtos) {
    let maisCaro = produtos[0];
    for (let produto of produtos) {
        if (produto.preco > maisCaro.preco) {
            maisCaro = produto;
        }
    }
    return maisCaro;
}

function produtosAbaixoMinimo(produtos, minimo) {
    return produtos.filter(produto => produto.quantidade < minimo);
}


console.log("Valor total do estoque: R$" + valorTotalEstoque(produtos)); 
console.log("Produto mais caro: " + produtoMaisCaro(produtos).nome); 
console.log("Produtos abaixo do mínimo de 3 unidades: ", produtosAbaixoMinimo(produtos, 3).map(p => p.nome)); 