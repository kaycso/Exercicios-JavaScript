function maiorDaLista(lista) {
    let maiorDaLista = lista[0]

    for (let i = 0; i < lista.length - 1; i++) {
        maiorDaLista = lista[i+1] > lista[i] && lista[i+1] > maiorDaLista ? lista[i+1] : maiorDaLista
    }

    return maiorDaLista
}

function segundoMaior(listaNumeros) {
    let maior = maiorDaLista(listaNumeros)

    let segundoMaior = maiorDaLista(listaNumeros.filter(elemento => elemento !== maior))

    return segundoMaior
}

console.log(segundoMaior([3,5,2,4]))