// converter segundos para horas, minutos e segundos

function converterSegundos(segundos) {
    let horas = Math.floor(segundos / 3600);

    let resto = segundos % 3600;

    let minutos = Math.floor(resto / 60);

    let segundosRestantes = resto % 60;

    console.log(`${horas}h ${minutos}min ${segundosRestantes}s`);
}

converterSegundos(6000); // 1h 40min 0s