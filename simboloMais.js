function simboloMais(repeticoes) {
    let stringRepetida = ''
    for (let i = 0; i < repeticoes; i++){
        stringRepetida = stringRepetida + '+'
    }

    return stringRepetida
}

console.log(simboloMais(2, '+'))
console.log(simboloMais(0, true))
console.log(simboloMais(1, 2))

let entrada = prompt('digite:')

console.log(simboloMais(entrada))