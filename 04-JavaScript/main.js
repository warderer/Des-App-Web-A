function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

console.log(calcularIMC(59, 1.60))

function obtenerDatosIMC() {
    const peso = parseFloat(prompt("Ingresa tu Peso"))
    const altura = parseFloat(prompt("Ingresa tu altura"))

    const imc = calcularIMC(peso, altura)
    alert("Tu indice de masa corporal es: " + imc)
}

obtenerDatosIMC()