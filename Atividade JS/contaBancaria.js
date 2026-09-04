// 15.     Modele uma classe ContaBancaria com titular e saldo. Implemente os métodos depositar(valor) e sacar(valor) — impedindo saldo negativo — e um método extrato() que retorna um resumo formatado da conta. Simule algumas operações entre duas contas.
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    extrato() {
        return `Titular: ${this.titular}\nSaldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

let conta1 = new ContaBancaria("Bruno", 1000);
let conta2 = new ContaBancaria("Henrique", 1500);

conta1.depositar(500);
conta2.sacar(200);

console.log(conta1.extrato());
console.log(conta2.extrato());