function contarCaracteres(caracter, frase) {
    let numeroRepeticoesDoCaracter = 0
    
    for (letra of frase.split('')) {
        numeroRepeticoesDoCaracter = caracter === letra ? numeroRepeticoesDoCaracter + 1 : numeroRepeticoesDoCaracter
    }

    return numeroRepeticoesDoCaracter
}

console.log(contarCaracteres('A', 'A maria'))

// Outra forma de fazer
const contarCaracter = (caracter, frase) => {
    return frase.split('').filter(e => e === caracter).length
}

console.log(contarCaracter('A', 'A mAria'))