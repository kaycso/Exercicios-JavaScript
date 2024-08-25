const produtos = [
    { nome: "notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de plástico", preco: 18.99, fragil: false },
]

console.log(produtos.filter(produto => produto.preco > 3000)) // retorna uma lista com um filtro ( no caso é para retornar todos objetos (produto) que o preco seja maior que 3000)

// retornar apenas produtos frágeis
const produtosFrageis = produtos.filter(e => e.fragil === true)
console.log(produtosFrageis)

// retornar apenas produtos frágeis e acima de 500 reais
const produtosFrageisEMaiorQue500 = produtos.filter(e => e.fragil === true && e.preco > 500)
console.log(produtosFrageisEMaiorQue500)


// Aula 02: simular o método filter
Array.prototype.filter2 = function(callback) {
    let novoArray = []
    for (let i=0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

console.log(produtos.filter2(e => e.preco > 2500))