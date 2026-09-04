// 16.     Modele uma classe Retangulo com base e altura, com métodos para calcular área e perímetro.


class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}

let retangulo1 = new Retangulo(5, 10);
console.log(`Área: ${retangulo1.calcularArea()}`); 

let retangulo2 = new Retangulo(3, 7);
console.log(`Perímetro: ${retangulo2.calcularPerimetro()}`);