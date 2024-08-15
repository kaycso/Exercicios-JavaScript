function contarCaracteres(caracter, frase) {
    let numeroRepeticoesDoCaracter = 0
    
    for (letra of frase.split('')) {
        numeroRepeticoesDoCaracter = caracter === letra ? numeroRepeticoesDoCaracter + 1 : numeroRepeticoesDoCaracter
    }

    return numeroRepeticoesDoCaracter
}

console.log(contarCaracteres('A', 'A maria'))