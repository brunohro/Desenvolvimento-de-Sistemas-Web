// 3.     Escreva um programa que recebe o preço de um produto e a quantidade comprada, calcula o subtotal, aplica um desconto progressivo (5% acima de R$100, 10% acima de R$300) e exibe um resumo formatado do pedido usando template literals.


function calcularTotal(preco, quantidade) {
    let subtotal = preco * quantidade;
    let desconto = 0;

    if (subtotal > 300) {
        desconto = subtotal * 0.10;
    } else if (subtotal > 100) {
        desconto = subtotal * 0.05;
    }

    let total = subtotal - desconto;

    console.log(`Subtotal: R$${subtotal.toFixed(2)}`);
    console.log(`Desconto: R$${desconto.toFixed(2)}`);
    console.log(`Total: R$${total.toFixed(2)}`);
}

calcularTotal(50, 5); // Subtotal: R$250.00, Desconto: R$12.50, Total: R$237.50