const calcularMedia = (listaNumeros) => {
    return listaNumeros.reduce((elementoAnterior, proximoElemento) => elementoAnterior + proximoElemento) / listaNumeros.length
}

console.log(calcularMedia([2,4]))