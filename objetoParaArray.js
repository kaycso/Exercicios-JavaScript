let objetoExemplo = {
    nome: 'Maria',
    idade: 22
}

function objetoParaArray(objeto){
    let array = []

    let quantidadePropriedades = Object.keys(objeto).length

    for(let i = 0; i < quantidadePropriedades; i++){
        let propriedade = Object.keys(objeto)[i]
        let valorPropriedade = objeto[propriedade]
        array.push([propriedade, valorPropriedade])
    }

    return array
}

console.log(objetoParaArray(objetoExemplo))