// 2.     Dada uma temperatura em Celsius, calcule e exiba o equivalente em Fahrenheit e em Kelvin.

function converterTemperatura(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    console.log(`${celsius}°C é equivalente a ${fahrenheit.toFixed(2)}°F e ${kelvin.toFixed(2)}K`);
}

converterTemperatura(25); // 25°C é equivalente a 77.00°F e 298.15K
