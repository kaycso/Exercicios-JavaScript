function despesasTotais(listaDespesas) {
    let soma = 0

    for (let i = 0; i < listaDespesas.length; i++) {
        soma = soma + listaDespesas[i].preco
    }

    return soma
}

console.log(despesasTotais([
    {nome: 'jornal online', categoria: 'informação', preco: 20.00},
    {nome: 'bermuda', categoria: 'roupa', preco: 79.90}
]))