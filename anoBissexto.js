function anoBissexto(ano){
    const anoComoLista = ano.toString().split('')

    if(anoComoLista[anoComoLista.length - 1] === '0' && anoComoLista[anoComoLista.length - 2] === '0') {
        return false
    }

    return ano % 4 === 0 ? true : false
}

console.log(anoBissexto(2004))