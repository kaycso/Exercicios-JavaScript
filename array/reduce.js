const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const notas = alunos.map(a => a.nota)
let resultado = notas.reduce(function(acumulador, atual) { // O valor acumulador se torna o primeiro elemento do array (índice 0) e o atual se torna o segundo elemento (índice 1)
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// Caso queira que o valor acumulador seja um valor diferente do primeiro elemento do array, é possível atribuir um valor diretamente para ele passando um segundo parâmetro ao método e o valor do parâmetro acumulador passará a ser o 1° elemento do array:
resultado = notas.reduce((acumulador, atual) => acumulador + atual, 30)
console.log(resultado)


// Aula 02: realizar desafios.
/*
    Desafio 1: Todos os alunos são bolsistas? (responder utilizando o reduce)
    Desafio 2: Algum aluno é bolsista? (responder utilizando o reduce)
*/

// Desafio 01:
let todosBolsistas = alunos.reduce((resultado, bolsista) => resultado && bolsista.bolsista, true)
console.log(todosBolsistas)
// Desafio 02:
let algumBolsista = alunos.reduce((acumulador, atual) => acumulador || atual.bolsista, false)
console.log(algumBolsista)

// Aula 03: simular o método reduce
Array.prototype.reduce2 = function(callback, valorAcumulador = undefined) {
    let inicio = 0

    if (valorAcumulador === undefined) {
        valorAcumulador = this[0]
        inicio = 1
    }

    for (let i = inicio; i < this.length; i++) {
        valorAcumulador = callback(valorAcumulador, this[i])
    }

    return valorAcumulador
}

const valores = [1,2,3,4]
let result = valores.reduce2((acumulador, atual) => acumulador + atual, 1)
console.log(result)