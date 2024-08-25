const nums = [1,2,3,4,5]

// O map realiza um for com um próposito para criar um novo array
// O map pode receber 3 parâmetros sendo eles o valor do elemento, o indice e array
let resultado = nums.map(e => e*2)
console.log(resultado)

const soma10 = e => e + 10
const triple = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triple).map(paraDinheiro)
console.log(resultado)


// Aula 02: desafio
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]
console.log(carrinho)

// desafio: retornar um array apenas com os preços
const newCarrinho = carrinho.map(e => JSON.parse(e))
console.log(newCarrinho)

const precos = newCarrinho.map(e => e.preco)
console.log(precos)


// Aula 03: criar um método map2 para simular o map
Array.prototype.map2 = function(callback) {
    let novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

const testeArray = [1,2,3]
const teste = testeArray.map2(e => e*2)
console.log(teste)