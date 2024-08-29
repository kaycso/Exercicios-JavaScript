function despesasTotais(listaDespesas) {
    return listaDespesas.map(objeto => objeto.preco).reduce((despesaAnterior, despesaAtual) => despesaAnterior + despesaAtual)
}

console.log(despesasTotais([
    {nome: 'jornal online', categoria: 'informação', preco: 20.00},
    {nome: 'bermuda', categoria: 'roupa', preco: 79.90}
]))