function estaEntre(numero, min, max, inclusivo = false) {
    if(inclusivo === true) {
        return numero >= min && numero <= max
    }

    return numero >= min && numero < max
}

console.log(estaEntre(20,1,20, true))