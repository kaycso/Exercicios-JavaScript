function indicesEElementosPares(lista) {
    let elementosPares = []
    const indicePares = []

    for (let i = 0; i < lista.length; i++){
        if (i % 2 === 0) {
            indicePares.push(i)
        }
    }

    for (let i = 0; i <= indicePares.length; i++) {
        if (lista[indicePares[i]] % 2 ===0) {
            elementosPares.push(lista[indicePares[i]])
        }
    }

    return elementosPares
}

console.log(indicesEElementosPares([2,1,3,4,6,7,10]))