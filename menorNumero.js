function menorNumero(lista){
    let menor = lista[0]

    for (let i = 0; i < (lista.length - 1); i++){
        if (lista[i + 1] < lista[i]) {
            menor = lista[i + 1] < menor ? lista[i + 1] : menor
        }
    }

    return menor
}

console.log(menorNumero([1,3,4,5,6,4,2]))

// Outra forma

const menor = (lista) => lista.reduce((elementoAnterior, proximoElemento) => elementoAnterior < proximoElemento ? elementoAnterior : proximoElemento)

console.log(menor([-2,3,4,5,6,4,1]))