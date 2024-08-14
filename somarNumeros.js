function somarNumeros(arrayNumeros) {
    let soma = 0
    
    for (numero of arrayNumeros) {
        soma = soma + numero
    }

    return soma 
}

console.log(somarNumeros([1,10]))