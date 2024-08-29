const removerVogais = palavra => {
    const vogais = ['a','e','i','o','u']
    const palavraParaLista = palavra.split('')
    const listaSemVogais = palavraParaLista.filter(e => !vogais.includes(e))

    return listaSemVogais.join('')
}

let palavra = 'kayc'
console.log(removerVogais(palavra))